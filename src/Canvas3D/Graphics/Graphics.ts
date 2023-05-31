import { Engine, THREE, type EngineStats } from "../Engine/Engine";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { GraphicsEventBus } from "./GraphicsEventBus";
import { GraphicsLoader, type ModelData, type ModelLoadedCallback, type ModelLoadingCallback } from "./GraphicsLoader";



export {GLTFLoader, GraphicsEventBus}

type GraphicsAsset = THREE.Group | THREE.Mesh | null;


export class Graphics extends GraphicsEventBus {

	public scene: THREE.Scene = new THREE.Scene();
	public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
	public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
	public controls?: OrbitControls;


	private isRunning = true;
	private frameCnt = 0;




	public loadGLTF = async (gltfPath: string, loadedCallback?: ModelLoadedCallback, loadingCallback?: ModelLoadingCallback): Promise<ModelData>=> {
		return await GraphicsLoader.loadGLTF(gltfPath,loadedCallback,loadingCallback);
	}

	/**
	 * Load a GLTF model, and add a specified GLTF scene (group) to the scene.
	 */
	public loadScene = async (gltfPath: string, sceneIndex?: number, loadedCallback?: ModelLoadedCallback, loadingCallback?: ModelLoadingCallback): Promise<THREE.Group> => {
		const data = await this.loadGLTF(gltfPath,loadedCallback,loadingCallback);
		
		sceneIndex = sceneIndex ? sceneIndex : 0
		sceneIndex = sceneIndex >= data.gltf.scenes.length ? data.gltf.scenes.length - 1 : sceneIndex;
		sceneIndex = sceneIndex < 0 ? data.gltf.scenes.length - 1 : sceneIndex;
		const scene = data.gltf.scenes[sceneIndex]; //** GLTF scene is THREE.Group
		this.scene.add(scene);
		return scene;
	}


	private rayLine:THREE.Line;
	private lineGeometry: THREE.BufferGeometry;

	constructor(private engine: Engine, canvasId: string) {

		super();

		this.createCanvas(canvasId);

		this.engine.addCallback(this.update);

		this.camera.position.set(3, 3, 2);
		this.camera.lookAt(new THREE.Vector3(0,))


		const light = new THREE.DirectionalLight(0xFFFFFF, 2);
		light.position.set(2,5,2);
		this.scene.add(light);
	


		// Define a line material
		const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

		// Create a line geometry
		this.lineGeometry = new THREE.BufferGeometry();
		const positions = [];
		positions.push(0, 0, 0); // Start point
		positions.push(0, 0, 0); // End point
		this.lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

		// Create a line object
		this.rayLine = new THREE.Line(this.lineGeometry, lineMaterial);
		this.scene.add(this.rayLine );



	}


	public clearScene = () => {

		this.scene.traverse( (obj) => {

			this.scene.remove(obj);

			if(obj instanceof THREE.Mesh) {
				obj.geometry.dispose();
				obj.material.map?.dispose();
				obj.material.aoMap?.dispose();
				obj.material.alphaMap?.dispose();
				obj.material.envMap?.dispose();
				obj.material.lightMap?.dispose();
				obj.material.specularMap?.dispose();
				obj.material.normalMap?.dispose();

				obj.material.dispose();
			}
		});
	}

	public start() {
		this.isRunning = true;
	}

	public stop() {
		this.isRunning = false;
	}


	public update = (stats: EngineStats) => {

		if(this.isRunning === false && this.frameCnt > 0) {
			return;
		}

		this.frameCnt += 1;

		this.controls?.update();
		this.renderer.render(this.scene, this.camera);

		// const r = 0xFF * (Math.sin(stats.frames / 20) + 1) / 2;
		// const g = 0xFF * (Math.sin(stats.frames / 40) + 1) / 2;
		// const b = 0xFF * (Math.sin(stats.frames / 50) + 1) / 2;
		// this.renderer.setClearColor((r | g << 8 | b << 16), 0.05);


		// const canvas = Engine.getCanvasById("canvas2d")
		// const ctx = canvas.getContext("2d");
		// canvas.style.zIndex = "-1";
		// if (ctx) {
		// 	canvas.width = canvas.width * 1;
		// 	ctx.fillStyle = 'rgba(255, 255, 0, 0.5)'; // Set the fill color to transparent
		// 	ctx.fillRect(0, 0, canvas.width, canvas.height); 
		// }
	}

	public getCanvas = () => {
		return this.renderer.domElement;
	}

	public createCanvas(containerId: string) {

		/**
		 * Remove all events from the renderer.comElement.
		 */
		this.removeCanvasEvents(); 

		/**
		 * Create new canvas and append to container (parent).
		 */
		const canvas = Engine.createCanvas(Engine.generateUid(`canvas3d`));
		canvas.setAttribute("copyright", "@drsant");
		canvas.style.zIndex = "999";
		const container = Engine.getElementById(containerId);
		container?.appendChild(canvas);

		


		/**
		 * Dispose current renderer and create a new one.
		 */
		this.renderer.dispose();
		this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
		this.renderer.setClearAlpha(0);
		this.renderer.setClearColor(0x00000, 0);
		this.renderer.setSize(canvas.width, canvas.height);
		this.renderer.setPixelRatio(canvas.width / canvas.height);


		/**
		 * Add all events to the canvas. This function must be called after the renderer is created.
		 */
		this.addCanvasEvents();
		

		/**
		 * Update camera's aspect ratio and projection matrix.
		 */
		this.camera.aspect = canvas.width / canvas.height;
		this.camera.updateProjectionMatrix();

		/**
		 * Dispose current control and create a new one.
		 */
		this.controls?.dispose();
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);


		
	}


	//**------------------------------------------------------------------
	//** Canvas Events 
	//**------------------------------------------------------------------

	/**
	 * Removes all events from the canvas (renderer.domElement).
	 * This function is called from the `createCanvas` function.
	 */
	private removeCanvasEvents = () => {
		const canvas = this.renderer.domElement;
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
	
	/**
	 * Adds all events to the canvas (renderer.domElement).
	 * This function is called from the `createCanvas` function.
	 */
	private addCanvasEvents = () => {
		const canvas = this.renderer.domElement;
		canvas.addEventListener("mousedown", this.handleCanvasMouseDown);
		canvas.addEventListener("mouseup", this.handleCanvasMouseUp);
		canvas.addEventListener("mouseup", this.handleCanvasMouseEnter);
		canvas.addEventListener("mousemove", this.handleCanvasMouseMove);
		canvas.addEventListener("mouseleave", this.handleCanvasMouseLeave);
		canvas.addEventListener("click", this.handleCanvasMouseClick);
		canvas.addEventListener("dblclick", this.handleCanvasMouseDblClick);

		canvas.addEventListener("keydown", this.handleCanvasKeyDown);	
		canvas.addEventListener("keyup", this.handleCanvasKeyUp);	
	}

	// private mouseXY = new THREE.Vector2(0, 0);

	private handleCanvasMouseDown = (e: any) => {
		this.dispatch("mousedown", e);
	}
	private handleCanvasMouseUp = (e: any) => {
		this.dispatch("mouseup", e);
	}
	private handleCanvasMouseEnter = (e: any) => {
		this.dispatch("mouseenter", e);
	}

	private handleCanvasKeyDown = (e: any) => {
		this.dispatch("keydown", e);
	}
	private handleCanvasKeyUp = (e: any) => {
		this.dispatch("keyup", e);
	}

	public getNormalizedMouse = (clientX: number, clientY: number) => {

		const containerBounds = this.renderer.domElement.getBoundingClientRect();
		const mouseX = clientX - containerBounds.left;
		const mouseY = clientY - containerBounds.top;
		
		const normX = (mouseX / containerBounds.width) * 2 - 1;
		const normY = -(mouseY / containerBounds.height) * 2 + 1;	

		const normalized = new THREE.Vector2(normX, normY);
		return normalized;
	}

	private handleCanvasMouseMove = (e: any) => {

		// this.mouseXY = this.getNormalizedMouse(e.clientX, e.clientY);
		this.dispatch("mousemove", e);
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

	public onKeyUp = (callback: (e:any)=>void) => {
		this.on("keyup", callback)
	}


	public getAssetByName = (name: string, parent?: THREE.Scene | THREE.Group) : GraphicsAsset => {
		const p = parent ? parent : this.scene;
		let asset: GraphicsAsset = null;
		p.traverse(c => {
			if( c.name == name && (c instanceof THREE.Mesh || c instanceof THREE.Group)) {	
				asset = c;
			}});
		return asset;
	}

	public getObjectByName = (name: string, parent?: THREE.Scene | THREE.Group) : THREE.Object3D | undefined => {
		const p = parent ? parent : this.scene;
		let obj: THREE.Object3D | undefined = undefined;
		p.traverse(c => {
			if( c.name == name && (c instanceof THREE.Mesh || c instanceof THREE.Group || c instanceof THREE.Scene)) {	
				obj = c;
			}});
		return obj;
	}




	

	public getMeshes = (parent?: THREE.Scene | THREE.Group) => {
		const meshes: THREE.Mesh[] = [];
		parent = parent ? parent : this.scene;
		parent.traverse( c => {
			if( c instanceof THREE.Mesh ) {
				meshes.push( c );
			}
		});
		return meshes;
	}
}

