import * as THREE from 'three';
import { EngineEventBus } from './EngineEventBus';
import { Chrome, type ChromeHeap } from './Chrome';

export { THREE, Chrome, ChromeHeap };


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
	
	static EventBus = EngineEventBus.getInstance();


	constructor() {
		//
	}

	public update = () => {
		this.stats.frames += 1;
		// TWEEN.update();
		Engine.EventBus.dispatch("update", this.stats);
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
				Engine.EventBus.dispatch("engine-stats", this.stats);
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


	static generateUid = (prefix?: string, suffix?: string) => {
		// format: prefix-xxxxxxx-suffix
		const str = "0123456789abcdefghijklmnopqrstuvwxyz";
		let uid = "";
		for(let i=0; i<7; i++) {
			const idx = Math.ceil(Math.random() * str.length);
			uid += str[idx];
		}

		uid = prefix ? `${prefix}-${uid}` : uid;
		uid = suffix ? `${uid}-${suffix}` : uid;
		return uid;
	}

	static getElementById = (elementId: string) => {
		return document.getElementById(elementId);
	}

	static getCanvasById = (canvasId: string) => {
		return document.getElementById(canvasId) as HTMLCanvasElement;
	}

	static createCanvas = (canvasId?: string) => {
		const c = document.createElement("canvas");
		c.id = canvasId ? canvasId : Engine.generateUid();
		return c as HTMLCanvasElement;
	}
}
