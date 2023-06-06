
import { THREE } from "../Engine/Engine";
import type { Graphics } from "./Graphics";
import type { GraphicsCanvas } from "./GraphicsCanvas";


export interface RayMouseCallbacks {
	mouseEnter?:  (intersection: THREE.Intersection) => void;
	mouseLeave?: (intersection: THREE.Intersection) => void;
	mouseDown?: (intersection: THREE.Intersection) => void;
	mouseUp?: (intersection: THREE.Intersection) => void;
	mouseMove?: (intersection: THREE.Intersection) => void;
	mouseDrag?: (intersection: THREE.Intersection) => void;
	mouseClick?: (intersection: THREE.Intersection) => void;
	mouseDblClick?: (intersection: THREE.Intersection) => void;

}

export class GraphicsRaySensor {

	private _disMouseEnter = false;

	private _disMouseLeave = false;

	private _target?: THREE.Object3D;

	private _callbackOptions?: RayMouseCallbacks

	private _raycaster = new THREE.Raycaster();



	constructor(public graphics: Graphics){


		let isHover = false;

		let enterCount = 0;

		let lastIntersection: THREE.Intersection;

		const graphicsCanvas = this.graphics.getGraphicsCanvas() as GraphicsCanvas;


		// let isMouseDown = false;
		

		graphicsCanvas.on("mousemove", (e) => {

			const mousePoint = graphicsCanvas.getNormalizedMousePosition();
			this._raycaster.setFromCamera(mousePoint, this.graphics.camera);
			const intersects = this._raycaster.intersectObjects(this.graphics.scene.children, true);

			
			isHover = intersects.length > 0 && (intersects[0].object.name === this._target?.name);

			/**
			 * Checks and performs the callbacks.
			 */
			if(isHover) {
				lastIntersection = intersects[0];
				this._callbackOptions?.mouseMove?.(lastIntersection);
				graphicsCanvas.dispatch("ray-move", lastIntersection);

				// if(isMouseDown) {
				// 	this._callbackOptions?.mouseDrag?.(lastIntersection);
				// 	graphicsCanvas.dispatch("ray-drag", lastIntersection);	
				// }
				
			}

			if(isHover && this._disMouseEnter === false) {
				this._disMouseEnter = true;
				this._disMouseLeave = false;
				enterCount += 1;
				this._callbackOptions?.mouseEnter?.(lastIntersection);
				graphicsCanvas.dispatch("ray-enter", lastIntersection);
			}
			else if(isHover === false &&  enterCount > 0 && this._disMouseLeave === false) {
				this._disMouseEnter = false;
				this._disMouseLeave = true;
				this._callbackOptions?.mouseLeave?.(lastIntersection);
				graphicsCanvas.dispatch("ray-leave", this._target);
			}
		});


		graphicsCanvas.on("mousedown", (e) => {
			const intersects = this.getIntersects(this._target);
			if(intersects){
				// isMouseDown = true;
				this._callbackOptions?.mouseDown?.(intersects[0]);
				graphicsCanvas.dispatch("ray-mousedown", this._target);
			}
		});


		graphicsCanvas.on("mouseup", (e) => {
			const intersects = this.getIntersects(this._target);
			if(intersects){
				// isMouseDown = false;
				this._callbackOptions?.mouseUp?.(intersects[0]);
				graphicsCanvas.dispatch("ray-mouseup", this._target);
			}
		});


		graphicsCanvas.on("click", (e) => {
			const intersects = this.getIntersects(this._target);
			if(intersects){
				this._callbackOptions?.mouseClick?.(intersects[0]);
				graphicsCanvas.dispatch("ray-click", this._target);
			}
		});


		graphicsCanvas.on("dblclick", (e) => {
			const intersects = this.getIntersects(this._target);
			if(intersects){
				this._callbackOptions?.mouseDblClick?.(intersects[0]);
				graphicsCanvas.dispatch("ray-dblclick", this._target);
			}
		});

		graphicsCanvas.on("mousedrag", (e) => {
			const intersects = this.getIntersects(this._target);
			if(intersects){
				this._callbackOptions?.mouseDrag?.(intersects[0]);
				graphicsCanvas.dispatch("ray-drag", this._target);
			}
		});

	}

	public sense = (target?: THREE.Object3D | string, callbackOptions?: RayMouseCallbacks) => {
		


		if(target == undefined) {
			const meshes = this.graphics.getMeshes();
			this._target = meshes[0];
			console.log(`%cThe target is ${target}, take the first mesh as target.`, `color: yellow`);
		}
		else if(typeof target === 'string') {
			this._target = this.graphics.getObjectByName(target);
			console.log(`%cThe target name is ${target}, take it from the main scene.`, `color: yellow`);
		}
		this._callbackOptions = callbackOptions;
	}



	private getIntersects = (target: THREE.Object3D | undefined) => {
		const graphics = this.graphics;
		const graphicsCanvas =  graphics.getGraphicsCanvas() as GraphicsCanvas;
		const mousePoint = graphicsCanvas.getNormalizedMousePosition();

		this._raycaster.setFromCamera(mousePoint, graphics.camera);
		const intersects = this._raycaster.intersectObjects(graphics.scene.children, true);	
		if(intersects.length > 0 && intersects[0].object.name === target?.name) {
			return intersects;
		}
		return undefined;
	}
}



