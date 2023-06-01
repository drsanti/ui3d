import { Engine, THREE, type EngineStats } from "../Engine/Engine";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { GraphicsEventBus } from "./GraphicsEventBus";
import { GraphicsLoader, type ModelData, type ModelLoadedCallback, type ModelLoaderCallback, type ModelLoadingCallback } from "./GraphicsLoader";
import { GraphicsCanvas } from "./GraphicsCanvas";



export {GLTFLoader, GraphicsEventBus}

type GraphicsAsset = THREE.Group | THREE.Mesh | null;


export class Graphics extends GraphicsEventBus {

	public scene: THREE.Scene = new THREE.Scene();
	public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
	public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
	public controls?: OrbitControls;


	private isRunning = true;
	private frameCnt = 0;


	protected graphicsCanvas?: GraphicsCanvas;


	static loadGLTF = async(gltfPath: string, callbackOptions?: ModelLoaderCallback) => {
		return await GraphicsLoader.loadGLTF(gltfPath, callbackOptions);	
	}

	public useScene = (gltf: GLTF, sceneIndex?: number): THREE.Group => {
		
		sceneIndex = sceneIndex ? sceneIndex : 0
		sceneIndex = sceneIndex >= gltf.scenes.length ? gltf.scenes.length - 1 : sceneIndex;
		sceneIndex = sceneIndex < 0 ? gltf.scenes.length - 1 : sceneIndex;
		const scene = gltf.scenes[sceneIndex];
		this.scene.add(scene);
		return scene;
	}



	constructor(private engine: Engine, canvasId: string) {

		super();

		/**
		 * Create all graphics elements, scene, camera, renderer, etc.
		 */
		this.createGraphics(canvasId);


		/**
		 * Register the update function to the engine loop.
		 */
		this.engine.addCallback(this.update);

		/**
		 * Default properties of the camera
		 */
		this.camera.position.set(3, 3, 2);
		this.camera.lookAt(new THREE.Vector3(0,))


		/**
		 * Directional light
		 */
		const light = new THREE.DirectionalLight(0xFFFFFF, 2);
		light.position.set(2,5,2);
		this.scene.add(light);

		this.scene.add(new THREE.AmbientLight(0xFFFFFF, 1));
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
		stats
		if(this.isRunning === false && this.frameCnt > 0) {
			return;
		}

		this.frameCnt += 1;

		this.controls?.update();
		this.renderer.render(this.scene, this.camera);
	}



	/**
	 * Create new canvas, renderer, and controls. The previous components are disposed.
	 */
	public createGraphics(containerId: string) {

		/**
		 * Remove all events from the renderer.comElement.
		 */
		this.graphicsCanvas?.dispose();

		this.graphicsCanvas = new GraphicsCanvas(this, containerId);
		const canvas = this.graphicsCanvas.getCanvas();

		/**
		 * Dispose current renderer and create a new one.
		 */
		this.renderer.dispose();


		/**
		 * Create a new renderer
		 */
		this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
		this.renderer.setClearAlpha(0);
		this.renderer.setClearColor(0x00000, 0);
		this.renderer.setSize(canvas.width, canvas.height);
		this.renderer.setPixelRatio(canvas.width / canvas.height);
		

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


	public getObjectByName = (name: string, parent?: THREE.Scene | THREE.Group) : THREE.Object3D | undefined => {
		const p = parent ? parent : this.scene;
		let obj: THREE.Object3D | undefined = undefined;
		p.traverse(c => {
			// console.log(c.type, c.name);
			if( c.name == name && (c instanceof THREE.Mesh || c instanceof THREE.Group || c instanceof THREE.Scene)) {	
				obj = c;
			}
		});
		// console.log(obj)			
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

	public getCamera = () => this.camera;
	public getRenderer  = () => this.renderer;
	public getScene = () => this.scene;	
	public getCanvas = () => this.renderer.domElement;
	public getGraphicsCanvas = () => this.graphicsCanvas as GraphicsCanvas;



	public setBackground = (background: THREE.CubeTexture | THREE.Texture | THREE.Color | null) => {
		this.scene.background = background;
	};
	public clearBackground = () => {
		this.scene.background = null;	
	}
	public setBackgroundBlurriness = (value: number) => {
		this.scene.backgroundBlurriness = value;
	}
	public setBackgroundIntensity = (value: number) => {
		this.scene.backgroundIntensity = value;
	}

	public setEnvironment = (environment: THREE.CubeTexture | null) => {
		this.scene.environment = environment;
	};
	public clearEnvironment = () => {
		this.scene.environment = null;
	};





	private _envMaps: EnvironmentMap[] = [];
	

	setSceneType = (type: EnvironmentType) => {

		return new Promise( (resolve) => {

			const update = (cubeTexture: THREE.CubeTexture) => {
				this.setBackground(cubeTexture);
				this.setEnvironment(cubeTexture);
				resolve(cubeTexture);
			}

			if(this._envMaps.filter(e => e.type === type).length == 0) {
				GraphicsLoader.loadDefaultCubeEnvTexture(type).then( (cubeTexture) => {
					update(cubeTexture);
					this._envMaps.push({type: type, texture: cubeTexture});
				});
			}
			else {
				const cubeTexture = this._envMaps.filter(e=>e.type === type)[0].texture
				update(cubeTexture);				
			}

		});	
	}
}


export type EnvironmentType = "park" | "bridge" | "snow";

interface EnvironmentMap {
	type: EnvironmentType;
	texture: THREE.CubeTexture;
}
