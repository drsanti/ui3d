

import type { GLTF } from "../@types/three/examples/jsm/loaders/GLTFLoader";
import { GLTFLoader} from "../three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

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

export interface ModelLoaderCallback {
    loading?: ModelLoadingCallback
    loaded?: ModelLoadedCallback
    error?: ModelErrorCallback
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
export type TextureLoadingCallback = (info: TextureDownloadInfo) => void;
export type TextureLoadedCallback = (data: TextureData) => void;
export type TextureErrorCallback = (error: string) => void;

export interface TextureLoaderCallback {
    loading: TextureLoadingCallback
    loaded: TextureLoadedCallback
    error: TextureErrorCallback
}




export class GraphicsLoader {

    static loadGLTF = (gltfPath: string, callbackOptions?: ModelLoaderCallback): Promise<ModelData> => {
       
        return new Promise( (resolve, reject) => {

            // const clog = (s1: string, s2: string) => console.log(`process %c${s1} %c${s2}`, `color: yellow`, `color: lime`)
            let bytes = 0;

            new GLTFLoader().load(gltfPath, (glTF) => {

                    glTF.scene.traverse( (c: THREE.Object3D) => {
                        if(c instanceof THREE.Mesh) {
                            c.castShadow = true;
                            c.receiveShadow = true;
                        }
                    });
                    
                    const names: string[] = [];
                    glTF.scenes.forEach(s => {
                        names.push(s.name);
                    });

                    const info = {path: gltfPath, size: bytes, sceneNames: names}
                    const modelData: ModelData = {glTF, info}
                    callbackOptions?.loaded?.(modelData);
                    resolve(modelData);

                },(xhr) => {
                    bytes = xhr.total;
                    const info: ModelDownloadInfo = {
                        path: gltfPath, percent: (xhr.loaded / xhr.total) * 100, 
                        loaded: xhr.loaded, total: xhr.total
                    };
                    callbackOptions?.loading?.(info);
                }, (error) => {
                    const msg = `Error loading GLTF model - ${error}`;
                    callbackOptions?.error?.(msg);
                    reject(msg);
                    console.error();
                }
            );
        });
    }


    static async loadCubeEnvTexture(path: string, names: string[]): Promise<THREE.CubeTexture> {
        // path: textures/cube/park or textures/cube/bridge or etc.
		return new Promise((resolve, reject) => {

			new THREE.CubeTextureLoader(new THREE.LoadingManager(
				() => {
                    //
				},
				(url, loaded, total) => {
					url; loaded; total;

                    // const ss = url.split('/');
                    // const pc = 100*loaded/total;
                    // console.log(`texture ${loaded}/${total} ${ss[ss.length-1]} ${pc.toFixed(2)}%`);
                    console.log(`%c${loaded}/${total} - ${url}`, `color: 
                        ${
                            url.includes('park') ? '#8f8' : url.includes('bridge') ? '#88f': '#ff8'}`)
				},
				(url) => {
					const errMsg = `Error loading ${url}`
					console.error(errMsg)
					reject(errMsg)
				})
			).setPath(path).load(names, (cubeText) => {
				resolve(cubeText)
				cubeText.dispose();
			}, (xhr) => {
				xhr
                console.log(xhr.loaded)
			})
		})
	}

    static async loadDefaultCubeEnvTexture(dir: string): Promise<THREE.CubeTexture> {
        // dir: "show", "bridge", "park", etc.
		const names = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"]
		return this.loadCubeEnvTexture(`textures/cube/${dir}/`, names);
	}

    static async loadTexture(url: string): Promise<THREE.Texture> {
        return new Promise((resolve, reject) => {
            reject    
            new THREE.TextureLoader().load(url, (texture)=>{
                resolve(texture);
            });
        });
	}
} 