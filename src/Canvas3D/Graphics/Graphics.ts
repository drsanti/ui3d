import { Engine, THREE, type EngineStats } from "../Engine/Engine";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export class Graphics {

	public scene: THREE.Scene = new THREE.Scene();
	public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
	public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
	public controls?: OrbitControls;



	constructor(private engine: Engine, canvasId: string) {

		this.setCanvas(canvasId);

		this.engine.addCallback(this.update);

		this.camera.position.set(2, 2, 2);
		this.camera.lookAt(new THREE.Vector3(0,))

		const cube = new Cube();
		this.scene.add(cube);
		this.engine.addCallback(cube.update);
	}


	public update = (stats: EngineStats) => {
		this.renderer.render(this.scene, this.camera);

		const r = 0xFF * (Math.sin(stats.frames / 20) + 1) / 2;
		const g = 0xFF * (Math.sin(stats.frames / 40) + 1) / 2;
		const b = 0xFF * (Math.sin(stats.frames / 50) + 1) / 2;

		this.renderer.setClearColor((r | g << 8 | b << 16), 0.05);
	}

	private initEvents = () => {

		const onMouseDown = (e: any) => {
			console.dir(e)
		}
		this.renderer.domElement.removeEventListener("mouseenter", onMouseDown);
		this.renderer.domElement.addEventListener("mouseenter", onMouseDown);

	}

	public setCanvas(canvasId: string) {

		const canvas = Engine.getCanvasById(canvasId);

		this.renderer.dispose();
		this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
		this.renderer.setClearAlpha(0);
		this.renderer.setClearColor(0x00000, 0);
		this.renderer.setSize(canvas.width, canvas.height);
		this.renderer.setPixelRatio(canvas.width / canvas.height);

		this.controls?.dispose();
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);

		this.camera.aspect = canvas.width / canvas.height;
		this.camera.updateProjectionMatrix();

		this.initEvents();
	}
}


class Cube extends THREE.Object3D {
	private geometry = new THREE.BoxGeometry(1, 1, 1);
	private material = new THREE.MeshBasicMaterial({ color: Math.round(Math.random() * 0xFFFFFF) });
	private box = new THREE.Mesh(this.geometry, this.material);

	private k = 10 - Math.random() * 5;

	constructor() {
		super()
		this.add(this.box);
	}
	public update = (stats: EngineStats) => {
		this.box.rotation.x += 0.1 * stats.delta * this.k;
		this.box.rotation.y += 0.1 * stats.delta * this.k;
		this.box.rotation.z += 0.1 * stats.delta * this.k;
	}
}