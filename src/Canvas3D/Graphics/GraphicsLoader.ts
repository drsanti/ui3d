

import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFLoader } from "./Graphics";
import * as THREE from "three";

export interface ModelInfo {
    path: string;
    size: number;
    sceneNames: string[];
} 

export interface ModelData {
    gltf: GLTF;
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
    loading: ModelLoadingCallback
    loaded: ModelLoadedCallback
    error: ModelErrorCallback
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
        const clog = (s1: string, s2: string) => console.log(`%c${s1} %c${s2}`, `color: yellow`, `color: lime`)
        let bytes = 0;
        return new Promise( (resolve, reject) => {

            new GLTFLoader().load(gltfPath, (gltf) => {

                    gltf.scene.traverse( (c) => {
                        if(c instanceof THREE.Mesh) {
                            c.castShadow = true;
                            c.receiveShadow = true;
                            clog(c.name, c.type)
                        }
                    });
                    
                    const names: string[] = [];
                    gltf.scenes.forEach(s => {
                        names.push(s.name);
                    });

                    const info = {path: gltfPath, size: bytes, sceneNames: names}
                    const modelData: ModelData = {gltf, info}
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