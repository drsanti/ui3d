// import * as THREE from "three";
// import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader";



import { THREE, OrbitControls, GLTFLoader, type GLTF } from "./ModulesIndex";

export interface ModelInfo {
	path: string;
	size: number;
	sceneNames: string[];
}

export interface ModelData {
	glTF: GLTF;
	info: ModelInfo;
}

export interface ModelDownloadInfo {
	path: string;
	percent: number;
	loaded: number;
	total: number
}

export type ModelLoadingCallback = (info: ModelDownloadInfo) => void;
export type ModelLoadedCallback = (data: ModelData) => void;
export type ModelErrorCallback = (error: string) => void;

export interface ModelLoaderCallbacks {
	onProgress?: ModelLoadingCallback
	onLoaded?: ModelLoadedCallback
	onError?: ModelErrorCallback
}




export interface TextureInfo {
	path: string;
	size: number;
	sceneNames: string[];
}



export interface TextureData {
	texture: THREE.Texture;
	info: TextureInfo;
}

export interface TextureDownloadInfo {
	path: string;
	percent: number;
	loaded: number;
	total: number
}
// export type TextureLoadingCallback = (info: TextureDownloadInfo) => void;
// export type TextureLoadedCallback = (data: TextureData) => void;
// export type TextureErrorCallback = (error: string) => void;

// export interface TextureLoaderCallback {
//     loading: TextureLoadingCallback
//     loaded: TextureLoadedCallback
//     error: TextureErrorCallback
// }


export interface CubeTextureDownloadInfo {
	url: string, loaded: number, total: number, tag: string
}

export interface CubeTextureDownloaderCallbacks {
	onStart?: (info?: string) => void;
	onProgress?: (info: CubeTextureDownloadInfo) => void;
	onDownloaded?: (cubeText: THREE.CubeTexture) => void;
	onError?: (error: string, url?: string) => void;
}

export class GraphicsLoader {

	static loadGLTF = (gltfPath: string, callbackOptions?: ModelLoaderCallbacks): Promise<ModelData> => {

		return new Promise((resolve, reject) => {

			// const clog = (s1: string, s2: string) => console.log(`process %c${s1} %c${s2}`, `color: yellow`, `color: lime`)
			let bytes = 0;

			new GLTFLoader().load(gltfPath, (glTF: GLTF) => {

				glTF.scene.traverse((c: THREE.Object3D) => {
					if (c instanceof THREE.Mesh) {
						c.castShadow = true;
						c.receiveShadow = true;
					}
				});

				const names: string[] = [];
				glTF.scenes.forEach(s => {
					names.push(s.name);
				});

				const info = { path: gltfPath, size: bytes, sceneNames: names }
				const modelData: ModelData = { glTF, info }
				callbackOptions?.onLoaded?.(modelData);
				resolve(modelData);

			}, (xhr: any) => {
				bytes = xhr.total;
				const info: ModelDownloadInfo = {
					path: gltfPath, percent: (xhr.loaded / xhr.total) * 100,
					loaded: xhr.loaded, total: xhr.total
				};
				callbackOptions?.onProgress?.(info);
			}, (error: any) => {
				const msg = `Error loading GLTF model - ${error}`;
				callbackOptions?.onError?.(msg);
				reject(msg);
				console.error();
			}
			);
		});
	}


	static async loadCubeEnvTexture(path: string, names: string[], callbackOptions?: CubeTextureDownloaderCallbacks): Promise<THREE.CubeTexture> {

		//>> Helper function
		const getTag = (url: string) => {
			return url.includes('park') ? 'park' : url.includes('bridge') ? 'bridge' : url.includes('snow') ? 'snow' : 'unknown';
		}

		return new Promise((resolve, reject) => {

			new THREE.CubeTextureLoader(new THREE.LoadingManager(

				() => {
					callbackOptions?.onStart?.(`start downloading ${names.length} files from "${path}"`);
				},

				(url: string, loaded: number, total: number) => {
					/**
					 * loaded: number of files loaded
					 * total: number of files to be downloaded
					 */
					//console.log(`%c${loaded}/${total} - ${url}`, `color: ${url.includes('park') ? '#8f8' : url.includes('bridge') ? '#88f': '#ff8'}`)
					const tag = getTag(url);
					const info: CubeTextureDownloadInfo = { url, loaded, total, tag }
					callbackOptions?.onProgress?.(info);
				},

				(url: string) => {
					const errMsg = `Error loading ${url}`
					console.error(errMsg);
					reject(errMsg);
					callbackOptions?.onError?.(errMsg, url);
				})

			).setPath(path).load(names, (cubeText: THREE.CubeTexture) => {
				resolve(cubeText);
				callbackOptions?.onDownloaded?.(cubeText);
				cubeText.dispose();
			}, (xhr: any) => {
				xhr
				console.log(xhr.loaded)
			})
		})
	}

	static async loadDefaultCubeEnvTexture(dir: string, callbackOptions?: CubeTextureDownloaderCallbacks): Promise<THREE.CubeTexture> {
		// dir: "show", "bridge", "park", etc.
		const names = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"]
		return this.loadCubeEnvTexture(`textures/cube/${dir}/`, names, callbackOptions);
	}

	static async loadTexture(url: string): Promise<THREE.Texture> {
		//! TODO: Add download manager and callbacks to track downloading states and progress.
		return new Promise((resolve, reject) => {
			reject
			new THREE.TextureLoader().load(url, (texture: THREE.Texture) => {
				resolve(texture);
			});
		});
	}
}

