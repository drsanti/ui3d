import { THREE, Engine } from "../Engine/Engine";
import type { Graphics } from "./Graphics";
import { GraphicsEventBus } from "./GraphicsEventBus";


export class GraphicsCanvas extends GraphicsEventBus {

    private _canvas: HTMLCanvasElement;
    private _mousePosition: THREE.Vector2 = new THREE.Vector2();

    constructor(public graphics: Graphics, containerId: string) {
        
        super();

        this._canvas = Engine.createCanvas(Engine.generateUid(`canvas3d`));
		this._canvas.setAttribute("copyright", "@drsant");
		this._canvas.style.zIndex = "999";

        const container = Engine.getElementById(containerId);
        container?.appendChild(this._canvas);

        this.addEvents();
    }   

    public dispose () {
        this.removeEvents();  
        this.getCanvas().parentElement?.removeChild(this.getCanvas());   
    } 

    public getCanvas = () => {
        return this._canvas;  
    }

    public getMousePosition = () => {
		return this._mousePosition;
	}


    public computeNormalizedMousePosition = (clientX: number, clientY: number):THREE.Vector2 => {
        const containerBounds = this._canvas.getBoundingClientRect();
		const mx = clientX - containerBounds.left;
		const my = clientY - containerBounds.top;
        const nx = +(mx / containerBounds.width)  * 2 - 1;
		const ny = -(my / containerBounds.height) * 2 + 1;
        const norm = new THREE.Vector2(nx, ny);
        return norm;
    }

    public getNormalizedMousePosition = (): THREE.Vector2 => {
        return this.computeNormalizedMousePosition(this._mousePosition.x, this._mousePosition.y)
	}

    private addEvents = () => {

		const canvas = this.getCanvas();//this.graphics.renderer.domElement;
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

		const canvas = this.getCanvas();//this.graphics.renderer.domElement;
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


   

	// private mouseXY = new THREE.Vector2(0, 0);

	private handleCanvasMouseDown = (e: any) => {
		this.dispatch("mousedown", e);
	}

	private handleCanvasMouseUp = (e: any) => {
		this.dispatch("mouseup", e);
	}

	private handleCanvasMouseEnter = (e: any) => {
        // console.log("enter");
		this.dispatch("mouseenter", e);
	}

    private handleCanvasMouseMove = (e: any) => {
        this._mousePosition.x = e.clientX;
        this._mousePosition.y = e.clientY;
        // console.log(`x: ${this._mousePosition.x}, y: ${this._mousePosition.y}`)
		this.dispatch("mousemove", e);
	}

	private handleCanvasMouseLeave = (e: any) => {
        // console.log("leave");
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


	public onMouseDown = (callback: (e:any)=>void) => {
		this.on("mousedown", callback)
	}
	public onMouseUp = (callback: (e:any)=>void) => {
		this.on("mouseup", callback)
	}
	public onMouseEnter = (callback: (e:any)=>void) => {
		this.on("mouseenter", callback)
	}
	public onMouseMove = (callback: (e:any)=>void) => {
		this.on("mousemove", callback)
	}
	public onMouseLeave = (callback: (e:any)=>void) => {
		this.on("mouseleave", callback)
	}
	public onMouseClick = (callback: (e:any)=>void) => {
		this.on("click", callback)
	}
	public onMouseDblClick = (callback: (e:any)=>void) => {
		this.on("dblclick", callback)
	}
    public onKeyDown = (callback: (e:any)=>void) => {
		this.on("keydown", callback)
	}
	public onKeyUp = (callback: (e:any)=>void) => {
		this.on("keyup", callback)
	}

}