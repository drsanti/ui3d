
import {THREE, OrbitControls, GLTFLoader, type GLTF} from "../Graphics/ModulesIndex";

import { EngineEventBus } from './EngineEventBus';
import { Chrome, type ChromeHeap } from './Chrome';
import { Graphics } from '../Graphics/Graphics';
import { onMount, onDestroy } from 'svelte';
import { GraphicsAssets } from '../Graphics/GraphicsResources';
import { gsap, Power2, Power3, Power4, Back, Elastic, Bounce } from 'gsap';
import * as chroma from 'chroma-js';




export { THREE, Chrome, chroma, ChromeHeap, EngineEventBus };


export interface EngineStats {
	frames: number;
	delta: number;
	fps: number;
	load: number;
	heap?: ChromeHeap;
}

export type EngineCallback = (stats: EngineStats) => void;


export class Engine {

	public stats: EngineStats = { frames: 0, delta: 1 / 60, fps: 60, load: 0};
	
	private looper = 0;
	
	private callbacks: EngineCallback[] = [];
	
	private EventBus = EngineEventBus.getInstance();

	private static instance?: Engine = undefined;

    private constructor() {
        
		window.addEventListener("resize", () => {
			this.EventBus.dispatch("resize", { width: window.innerWidth, height: window.innerHeight });
		});
    }

    public static getInstance = (): Engine => {
        if (this.instance === undefined) {
            this.instance = new Engine();
        }
        return this.instance;
    }

	public onResize = (callback: (e: {width: number, height: number}) => void) => {
		this.EventBus.register("resize", (e) => {
			callback(e);
		});
	}

	public update = () => {

		this.stats.frames += 1;

		this.EventBus.dispatch("update", this.stats);
	}



	private ts = performance.now();
	private te = performance.now();
	private tf = performance.now();
	private nf = 0;

	private loop = () => {

		this.nf += 1;

		this.looper = requestAnimationFrame(this.loop);

		this.te = performance.now();
		this.stats.delta = (this.te - this.ts) / 1000;
		this.ts = this.te;

		if (!document.hidden) {

			if(this.te - this.tf >= 100) {
				this.stats.fps = 1000 * this.nf / (this.te - this.tf );
				this.nf = 0; this.tf = this.te;

				this.EventBus.dispatch("engine-stats", this.stats);
			}

			const t0 = window.performance.now();

			this.update();
			
			this.callbacks.map(callback => callback(this.stats));
			
			this.stats.load = (window.performance.now() - t0);

			this.stats.heap = Chrome.getHeapInfo();
		}
	}

	public addCallback = (callback: EngineCallback) => {
		if (this.callbacks.indexOf(callback) === -1) {
			this.callbacks.push(callback);
		}
	}

	public removeCallback = (callback: EngineCallback) => {
		this.callbacks = this.callbacks.filter(c => c !== callback);
	}

	public onFrame = (callback: EngineCallback) => {
		this.addCallback(callback);
	}

	public start = () => {
		this.loop();
	}

	public stop = () => {
		cancelAnimationFrame(this.looper);
	}


	public getHeapLimit = () => {
		if(this.stats.heap) {
			return this.stats.heap.limitSize;
		}
		return NaN;
	}
	public getHeapSize = () => {
		if(this.stats.heap) {
			return this.stats.heap.totalSize;
		}
		return NaN;
	}
	public getHeapUsed = () => {
		if(this.stats.heap) {
			return this.stats.heap.usedSize;
		}
		return NaN;
	}

	public getHeapAllocated = () => {
		if(this.stats.heap) {
			return this.stats.heap.allocated;
		}
		return NaN;
	}
	public getHeapConsumed = () => {
		if(this.stats.heap) {
			return this.stats.heap.consumed;
		}
		return NaN;
	}


	static generateUUID = (prefix?: string, suffix?: string) => {
		// format: prefix-xxxxxxx-suffix
		const str = "0123456789abcdefghijklmnopqrstuvwxyz";
		let uid = "";
		for(let i=0; i<7; i++) {
			const idx = Math.floor(Math.random() * str.length);
			if(idx < 0 || idx > str.length)
				throw new Error(`The index %{idx} is out of range!!`);
			uid += str[idx];
		}

		uid = prefix ? `${prefix}-${uid}` : uid;
		uid = suffix ? `${uid}-${suffix}` : uid;
		return uid;
	}

	static getElementById = (elementId: string) => {
		return document.getElementById(elementId) as HTMLElement;
	}

	static getCanvasById = (canvasId: string) => {
		return document.getElementById(canvasId) as HTMLCanvasElement;
	}

	static createCanvas = (canvasId?: string) => {
		const c = document.createElement("canvas");
		c.id = Engine.generateUUID(canvasId ? canvasId : `canvas`);
		return c as HTMLCanvasElement;
	}

	static createOverlayContainer = (idPrefix?: string, backgroundColor?: string) => {
		const div = document.createElement("div");
		div.id = Engine.generateUUID(idPrefix ? idPrefix : `overlay-div-container`);
		div.style.position = "absolute";
		div.style.top = "0";
		div.style.left = "0";
		div.style.bottom = "0";
		div.style.right = "0";
		console.log(`%cOverlay Container "${div.id}" is created`, `color:#a5f`);
		div.style.backgroundColor = backgroundColor ? backgroundColor : "rgba(0, 0, 0, 0.0)";
		return div;
	}



	//-----------------------------------------------------------------------------
	// Graphics APIs Wrapper
	//-----------------------------------------------------------------------------

	public static init = (callbackOptions?: { mountCallback?: (engine: Engine) => any, destroyCallback?: (engine: Engine) => any}): Promise<Engine>  => {

		return new Promise( ( resolve ) => {

			onMount( async() => {
				await GraphicsAssets.downloadResources("Engine.init");
				resolve(this.getInstance());
				callbackOptions?.mountCallback?.(this.getInstance());
			});

			onDestroy(() => {
				if(this.instance){
					callbackOptions?.destroyCallback?.(this.getInstance());
				}
			});
		});
	}


	public getResources = () => {
		return GraphicsAssets.resources;
	}

	public downloadResources = async (callerId?: string) => {
		return await GraphicsAssets.downloadResources(callerId);
	}

	public createGraphics = (canvasId: string) => {
		return new Graphics(Engine.getInstance(), canvasId);
	}

	public createTween = (options: EngineTween) => {
		const opt = options;
		const progress: { value: number } = { value: opt.firstValue };
		return gsap.to(progress, {
            ease: Back.easeInOut,
			value: opt.lastValue,
			duration: opt.duration ? opt.duration : 1,
			repeat: opt.repeat === undefined || opt.repeat == 0 ? 0 : opt.repeat, // -1 infinite
     		yoyo: opt.yoyo === true ? opt.yoyo : false ,
			onUpdate: () =>  opt.onUpdate(progress.value),
			onComplete: () => opt.onComplete?.()
		});
	}


}

export interface EngineTween {
    firstValue: number;
    lastValue: number;
    duration?: number;
    repeat?: number;
    yoyo?: boolean;
    onUpdate: (value: number) => void;
    onComplete?: () => void;
}
