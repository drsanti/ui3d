
import { THREE } from "../Engine/Engine";
import type { Graphics } from "./Graphics";

export interface RayMouseCallbacks {
	mouseEnter?:  (intersection: THREE.Intersection) => void;
	mouseLeave?: (intersection: THREE.Intersection) => void;
	mouseDown?: (intersection: THREE.Intersection) => void;
	mouseUp?: (intersection: THREE.Intersection) => void;
	mouseMove?: (intersection: THREE.Intersection) => void;
	mouseClick?: (intersection: THREE.Intersection) => void;
	mouseDblClick?: (intersection: THREE.Intersection) => void;

}

export class RaySensor {

	private disMouseEnter = false;
	private disMouseLeave = false;

	private target?: THREE.Object3D;

	private callbackOptions?: RayMouseCallbacks

	private raycaster = new THREE.Raycaster();

	constructor(private graphics: Graphics){

		

		let isHover = false;
		let enterCount = 0;

		let lastIntersection: THREE.Intersection;

		graphics.on("mousemove", (e) => {

			const mousePoint = graphics.getNormalizedMouse(e.clientX, e.clientY);
			this.raycaster.setFromCamera(mousePoint, graphics.camera);
			const intersects = this.raycaster.intersectObjects(graphics.scene.children, true);

			isHover = intersects.length > 0 && intersects[0].object.uuid === this.target?.uuid;


			/**
			 * Checks and performs the callbacks.
			 */
			if(isHover) {
				lastIntersection = intersects[0];
				this.callbackOptions?.mouseMove?.(lastIntersection);
				graphics.dispatch("ray-move", lastIntersection);
			}

			if(isHover && this.disMouseEnter === false) {
				this.disMouseEnter = true;
				this.disMouseLeave = false;
				enterCount += 1;
				this.callbackOptions?.mouseEnter?.(lastIntersection);
				graphics.dispatch("ray-enter", lastIntersection);
			}
			else if(isHover === false &&  enterCount > 0 && this.disMouseLeave === false) {
				this.disMouseEnter = false;
				this.disMouseLeave = true;
				this.callbackOptions?.mouseLeave?.(lastIntersection);
				graphics.dispatch("ray-leave", this.target);
			}
		});




		graphics.on("mousedown", (e) => {
			const intersects = this.getIntersects(e.clientX, e.clientY, this.target);
			if(intersects){
				this.callbackOptions?.mouseDown?.(intersects[0]);
				graphics.dispatch("ray-mousedown", this.target);
			}
		});


		graphics.on("mouseup", (e) => {
			const intersects = this.getIntersects(e.clientX, e.clientY, this.target);
			if(intersects){
				this.callbackOptions?.mouseUp?.(intersects[0]);
				graphics.dispatch("ray-mouseup", this.target);
			}
		});


		graphics.on("click", (e) => {
			const intersects = this.getIntersects(e.clientX, e.clientY, this.target);
			if(intersects){
				this.callbackOptions?.mouseClick?.(intersects[0]);
				graphics.dispatch("ray-click", this.target);
			}
		});


		graphics.on("dblclick", (e) => {
			const intersects = this.getIntersects(e.clientX, e.clientY, this.target);
			if(intersects){
				this.callbackOptions?.mouseDblClick?.(intersects[0]);
				graphics.dispatch("ray-dblclick", this.target);
			}
		});

	}

	public sense = (target?: THREE.Object3D | string, callbackOptions?: RayMouseCallbacks) => {
		
		if(target == undefined) {
			const meshes = this.graphics.getMeshes();
			this.target = meshes[0];
			console.log(`%cThe target is ${target}, take the first mesh as target.`, `color: yellow`);
		}
		else if(typeof target === 'string') {
			this.target = this.graphics.getObjectByName(target);
			console.log(`%cThe target name is ${target}, take it from the main scene.`, `color: yellow`);
		}
		this.callbackOptions = callbackOptions;
	}



	private getIntersects = (clientX: number, clientY: number, target: THREE.Object3D | undefined) => {
		const graphics = this.graphics;
		const mousePoint = graphics.getNormalizedMouse(clientX, clientY);
		this.raycaster.setFromCamera(mousePoint, graphics.camera);
		const intersects = this.raycaster.intersectObjects(graphics.scene.children, true);	
		if(intersects.length > 0 && intersects[0].object.uuid === target?.uuid) {
			return intersects;
		}
		return undefined;
	}
}



