import * as THREE from "three"
import { Engine } from "../Engine/Engine";
import type { Graphics } from "./Graphics";
import { GraphicsEventBus } from "./GraphicsEventBus";


export class GraphicsCanvas extends GraphicsEventBus {

	private static readonly version = "v1.0.0";

	private _renderingContainer: HTMLDivElement;
	private _renderingCanvas: HTMLCanvasElement;

	private _overlayContainer: HTMLDivElement;
	private _overlayCanvas: HTMLCanvasElement;

	private _backContainer: HTMLDivElement;
	private _backCanvas: HTMLCanvasElement;

	private _mousePosition: THREE.Vector2 = new THREE.Vector2();

	private _isMouseDown = false;

	constructor(public graphics: Graphics, containerId: string) {

		super();

		/**
		 * Used for renderer
		 */
		this._renderingContainer = Engine.getElementById(containerId) as HTMLDivElement;

		this._renderingCanvas = Engine.createCanvas(Engine.generateUUID(`canvas3d`));
		this._renderingCanvas.setAttribute("copyright", "@drsant");
		this._renderingCanvas.style.zIndex = "0";
		this._renderingContainer?.appendChild(this._renderingCanvas);

		/**
		 * To allow another div overlaying on top of the container,
		 * the position must be set to `relative`
		 */
		if (this._renderingContainer === undefined || this._renderingContainer === null) {
			console.error(`Cannot find the div container with id "${containerId}".`);
		}

		/**
		 * Main container.
		 */
		this._renderingContainer.style.position = "relative";


		/**
		 * Overlay container and overlay canvas. The overlay container also used for Controls.
		 */
		this._overlayContainer = this.createOverlayContainer("overlay-container");
		this._overlayCanvas = this.createOverlayCanvas("overlay-canvas");


		/**
		 * Middle canvas used for rendering. This canvas is used as domElement of the renderer.
		 */
		this._renderingCanvas.setAttribute("copyright", "@drsant");

		/**
		 *  Back container and overlay canvas.
		 */
		this._backContainer = this.createBackContainer("back-container");
		this._backCanvas = this.createBackCanvas("back-canvas");


		/**
		 * Append overlay container and back container to the main container.
		 */
		this._renderingContainer.appendChild(this._overlayContainer);
		this._renderingContainer.appendChild(this._backContainer);


		/**
		 * Append the overlay canvas and back canvas to their container.
		 */
		this._overlayContainer.appendChild(this._overlayCanvas);
		this._backContainer.appendChild(this._backCanvas);


		this._overlayContainer.style.zIndex = this._overlayCanvas.style.zIndex = "999";
		this._renderingContainer.style.zIndex = this._renderingCanvas.style.zIndex = "0";
		this._backContainer.style.zIndex = this._backCanvas.style.zIndex = "-999";



		this.updateClientRects();

		this.addEvents();
	}

	public dispose() {
		this.removeEvents();
		this.getRenderingCanvas().parentElement?.removeChild(this.getRenderingCanvas());

		this._overlayContainer.removeChild(this._overlayCanvas);
	}

	public getRenderingCanvas = () => {
		return this._renderingCanvas;
	}

	public getContainer = () => {
		if (this._renderingCanvas.parentElement === null) {
			throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);
		}
		return this._renderingCanvas.parentElement as HTMLDivElement;
	}

	public getCanvas = () => this._renderingCanvas;



	public updateClientRects = () => {
		return new Promise((resolve) => {
			requestAnimationFrame(() => {
				// this._renderingCanvas.getBoundingClientRect();
				// this._overlayCanvas.getBoundingClientRect();
				this._renderingContainer.getBoundingClientRect();
				this._overlayContainer.getBoundingClientRect();
				this._backContainer.getBoundingClientRect();
				resolve(this);
			});
		});
	}

	public getOverlayContainer = () => this._overlayContainer as HTMLDivElement;

	public getOverlayCanvas = () => this._overlayCanvas as HTMLCanvasElement;


	public getBackContainer = () => this._backContainer as HTMLDivElement;

	public getBackCanvas = () => this._backCanvas as HTMLCanvasElement;



	public getMousePosition = () => {
		return this._mousePosition;
	}


	/**
	 * Add an overlay container to the GraphicsCanvas parent (parent div element).
	 * Note: The GraphicsCanvas parent is a div element containing domElement (canvas) of renderer.
	 */
	public addOverlayContainer = (overlayContainer: HTMLDivElement) => {

		const parent = this.getContainer();//this._canvas.parentElement;

		if (parent === null) {
			throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);
		}

		if (parent.style.position !== "relative") {
			console.warn(`The display property of parent element "${parent}" is changed to "relative"`);
			parent.style.position = "relative";
		}
		parent.appendChild(overlayContainer);
	}

	/**
	 * Creates an overlaying div container element.
	 */
	public createOverlayContainer = (idPrefix?: string, backgroundColor?: string) => {
		return Engine.createOverlayContainer(idPrefix ? idPrefix : `overlay-container`, backgroundColor);
	}

	/**
	 * Creates an overlay canvas element.
	 */
	public createOverlayCanvas = (idPrefix?: string) => {
		return Engine.createCanvas(idPrefix ? idPrefix : `overlay-canvas`);
	}


	/**
	 * Creates a back div container element.
	 */
	public createBackContainer = (idPrefix?: string, backgroundColor?: string) => {
		return Engine.createBackContainer(idPrefix ? idPrefix : `back-container`, backgroundColor);
	}

	/**
	 * Creates a back canvas element.
	 */
	public createBackCanvas = (idPrefix?: string) => {
		return Engine.createCanvas(idPrefix ? idPrefix : `back-canvas`);
	}


	public initialCanvas2D = (): Promise<HTMLCanvasElement> => {
		return new Promise((resolve) => {
			window.requestAnimationFrame(() => {
				this._overlayContainer.getBoundingClientRect();
				this._renderingContainer.getBoundingClientRect();
				this._backContainer.getBoundingClientRect();
				resolve(this._overlayCanvas);
			});
		});
	}



	public computeNormalizedMousePosition = (clientX: number, clientY: number): THREE.Vector2 => {
		const containerBounds = this._renderingCanvas.getBoundingClientRect();
		const mx = clientX - containerBounds.left;
		const my = clientY - containerBounds.top;
		const nx = +(mx / containerBounds.width) * 2 - 1;
		const ny = -(my / containerBounds.height) * 2 + 1;
		const norm = new THREE.Vector2(nx, ny);
		return norm;
	}

	public getNormalizedMousePosition = (): THREE.Vector2 => {
		return this.computeNormalizedMousePosition(this._mousePosition.x, this._mousePosition.y)
	}

	private addEvents = () => {

		const canvas = this._overlayContainer;//this.getContainer();//this.getCanvas();
		canvas.addEventListener("mousedown", this.handleCanvasMouseDown);
		canvas.addEventListener("mouseup", this.handleCanvasMouseUp);
		canvas.addEventListener("mouseenter", this.handleCanvasMouseEnter);
		canvas.addEventListener("mousemove", this.handleCanvasMouseMove);
		canvas.addEventListener("mouseleave", this.handleCanvasMouseLeave);
		canvas.addEventListener("click", this.handleCanvasMouseClick);
		canvas.addEventListener("dblclick", this.handleCanvasMouseDblClick);

		canvas.addEventListener("keydown", this.handleCanvasKeyDown);
		canvas.addEventListener("keyup", this.handleCanvasKeyUp);
	}


	private removeEvents = () => {

		const canvas = this._overlayContainer;//this.getContainer();//this.getCanvas();
		canvas.removeEventListener("mousedown", this.handleCanvasMouseDown);
		canvas.removeEventListener("mouseup", this.handleCanvasMouseUp);
		canvas.removeEventListener("mouseenter", this.handleCanvasMouseEnter);
		canvas.removeEventListener("mousemove", this.handleCanvasMouseMove);
		canvas.removeEventListener("mouseleave", this.handleCanvasMouseLeave);
		canvas.removeEventListener("click", this.handleCanvasMouseClick);
		canvas.removeEventListener("dblclick", this.handleCanvasMouseDblClick);

		canvas.removeEventListener("keydown", this.handleCanvasKeyDown);
		canvas.removeEventListener("keyup", this.handleCanvasKeyUp);
	}




	private handleCanvasMouseDown = (e: any) => {
		this._isMouseDown = true;
		this.dispatch("mousedown", e);
	}

	private handleCanvasMouseUp = (e: any) => {
		this._isMouseDown = false;
		this.dispatch("mouseup", e);
	}

	private handleCanvasMouseEnter = (e: any) => {
		this.dispatch("mouseenter", e);
	}

	private handleCanvasMouseMove = (e: any) => {
		this._mousePosition.x = e.clientX;
		this._mousePosition.y = e.clientY;
		this.dispatch("mousemove", e);

		if (this._isMouseDown) {
			this.dispatch("mousedrag", e);
		}
	}

	private handleCanvasMouseLeave = (e: any) => {
		this.dispatch("mouseleave", e);
	}

	private handleCanvasMouseClick = (e: any) => {
		this.dispatch("click", e);
	}

	private handleCanvasMouseDblClick = (e: any) => {
		this.dispatch("dblclick", e);
	}

	private handleCanvasKeyDown = (e: any) => {
		this.dispatch("keydown", e);
	}
	private handleCanvasKeyUp = (e: any) => {
		this.dispatch("keyup", e);
	}


	public onMouseDown = (callback: (e: any) => void) => {
		this.on("mousedown", callback)
	}
	public onMouseUp = (callback: (e: any) => void) => {
		this.on("mouseup", callback)
	}
	public onMouseEnter = (callback: (e: any) => void) => {
		this.on("mouseenter", callback)
	}
	public onMouseMove = (callback: (e: any) => void) => {
		this.on("mousemove", callback)
	}
	public onMouseLeave = (callback: (e: any) => void) => {
		this.on("mouseleave", callback)
	}
	public onMouseClick = (callback: (e: any) => void) => {
		this.on("click", callback)
	}
	public onMouseDblClick = (callback: (e: any) => void) => {
		this.on("dblclick", callback)
	}
	public onKeyDown = (callback: (e: any) => void) => {
		this.on("keydown", callback)
	}
	public onKeyUp = (callback: (e: any) => void) => {
		this.on("keyup", callback)
	}

}