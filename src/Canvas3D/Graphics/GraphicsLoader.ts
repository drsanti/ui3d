

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

export type ModelLoadedCallback = (data: ModelData) => void;
export type ModelLoadingCallback = (info: ModelDownloadInfo) => void;

export class GraphicsLoader {
    

    
    static loadGLTF = (gltfPath: string, loadedCallback?: ModelLoadedCallback, loadingCallback?: ModelLoadingCallback): Promise<ModelData> => {

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
                    loadedCallback?.(modelData);
                    resolve(modelData);

                },(xhr) => {
                    bytes = xhr.total;
                    const info: ModelDownloadInfo = {
                        path: gltfPath, percent: (xhr.loaded / xhr.total) * 100, 
                        loaded: xhr.loaded, total: xhr.total
                    };
                    loadingCallback?.(info);
                }, (error) => {
                    const msg = `Error loading GLTF model - ${error}`;
                    reject(msg);
                    console.error();
                }
            );
        });
    }


} 