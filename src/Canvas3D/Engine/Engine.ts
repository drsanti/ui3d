import * as THREE from 'three';

export { THREE };

interface EngineMemory extends Performance {
	memory?: {
		totalJSHeapSize: number;
		usedJSHeapSize: number;
		jsHeapSizeLimit: number;
	};
}

export interface EngineStats {
	frames: number;
	delta: number;
	load: number;
	heap: {
		totalJSHeapSize: number;
		usedJSHeapSize: number;
		jsHeapSizeLimit: number;
	};
}

export type EngineCallback = (stats: EngineStats) => void;


export class Engine {

	private looper = 0;

	private stats: EngineStats = { frames: 0, delta: 1 / 60, load: 0, heap: { totalJSHeapSize: 0, usedJSHeapSize: 0, jsHeapSizeLimit: 0 } };

	private callbacks: EngineCallback[] = [];

	private performance = window.performance as EngineMemory;

	constructor() {
		//
	}

	public update = () => {
		this.stats.frames += 1;
	}

	private ts = 0;
	private te = 0;
	private loop = () => {

		this.looper = requestAnimationFrame(this.loop);

		this.te = performance.now();
		this.stats.delta = (this.te - this.ts) / 1000;
		this.ts = this.te;

		if (!document.hidden) {

			const t0 = this.performance.now();
			this.update();
			this.callbacks.map(callback => callback(this.stats));
			this.stats.load = (this.performance.now() - t0);

			if (this.performance && this.performance.memory) {
				this.stats.heap.totalJSHeapSize = this.performance.memory.totalJSHeapSize;
				this.stats.heap.usedJSHeapSize = this.performance.memory.usedJSHeapSize;
				this.stats.heap.jsHeapSizeLimit = this.performance.memory.jsHeapSizeLimit;
			}
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

	static getCanvasById(canvasId: string) {
		return document.getElementById(canvasId) as HTMLCanvasElement;
	}
}
