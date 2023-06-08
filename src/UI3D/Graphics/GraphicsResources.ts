
import {THREE, OrbitControls, GLTFLoader, type GLTF} from "./ModulesIndex";

import { GraphicsLoader, type CubeTextureDownloaderCallbacks, type ModelLoaderCallbacks as ModelLoaderCallbacks } from "./GraphicsLoader";


const RESOURCES = [
    { 
        type: "env", name: "park" 
    },
    { 
        type: "env", name: "bridge" 
    },
    { 
        type: "env", name: "snow" 
    },
    {
        type: "gltf", name: "cube1.glb"
    },
    // { 
    //     type: "texture", name: ""
    // }
];



export type EnvMapType = THREE.Texture;

export interface Resources {
	loaded: boolean;
	envMaps: EnvMapType[]
	glTFs: GLTF[]
}


export class GraphicsAssets {


    static envMaps: EnvMapType[] = [];
	static glTFs: GLTF[] = [];
	static resources: Resources;

    static resourceList = RESOURCES;

	static inprogress = false;


   

	/**
	 * This function must be called by onDestroy function to clear all static variables.
	 * If the static variables are not cleared, the logic in the init function is not correct,
	 * and the browser may be bot refreshed.
	 */
	static dispose = () => {

		if(this.resources) {

			this.resources.loaded = false;
			this.inprogress = false;

			this.resources.envMaps.forEach(map => {
				map.dispose();
			});

			this.resources.glTFs.forEach(glTF => {
				glTF.scenes.forEach(s => {
					s.traverse( (c: THREE.Object3D) => {
						if(c instanceof THREE.Mesh) {
							c.geometry.dispose();
						}
						if(c instanceof THREE.Material) {
							c.dispose();
							console.log(`dispose material ${c.uuid}`);
						}
					});
				});	
			});

			this.resources.envMaps = [];
			this.resources.glTFs = [];  
		}
	}

	static waitResource = async(callerId?: string) => {
		return new Promise<void>((resolve) => {
			let cnt = 0;
			const t = setInterval(() => {
				console.log(`${callerId} waiting...${++cnt}`);
				if(this.resources.loaded === true) {
					clearInterval(t);
					console.log(`%c${callerId} resolving...`, 'color: lime');
					resolve();
				}
			}, 100);
		});
	}

	static downloadResources = async (callerId?: string, cubeTextureCallbackOptions?: CubeTextureDownloaderCallbacks, modelCallbackOptions?: ModelLoaderCallbacks): Promise<Resources> => {

		this.resources = {envMaps: this.envMaps, glTFs: this.glTFs, loaded: false};

		console.log(`%c${callerId} is try to download`, `color: cyan`);

		/**
		 * Another instance is loading, wait for the shared resources.
		 */
		if( this.inprogress === true ) {
			console.log(`%creject, the previous caller is in progress...`, `color: yellow`);
			await this.waitResource(callerId);
		}

		
		/**
		 * The resources are loaded, perform the resolve.
		 */
		if(this.resources.loaded === true) {
			return new Promise<Resources>((resolve) => {
				resolve(this.resources);
			});
		}

		
		// console.log(`%ccaller id @${callerId} is downloading...`, `color: lime`);

		this.inprogress = true;

		return new Promise( (resolve, reject) => {

			let cnt = 0;

			const countAndResolve = () => {
				cnt += 1;
				if (cnt >= this.resourceList.length) {
					this.resources.envMaps = this.envMaps;
					this.resources.loaded = true;
					this.inprogress = false;
					resolve(this.resources);
				}	
			}

			this.resourceList.forEach( async (res) => {


				// if(res.type === "env") {
				// 	const cubeTexture = await GraphicsLoader.loadDefaultCubeEnvTexture(res.name, {
				// 		onProgress: (url, loaded, total, tag) => {
				// 			console.log(url, loaded, total, tag);
				// 		}
				// 	});
				// 	this.envMaps.push(cubeTexture);
				// 	countAndResolve();
				// }
				

				if(res.type === "env") {
					//>> console.log(`downloading ${res.type}.${res.name}`);
					GraphicsLoader.loadDefaultCubeEnvTexture(res.name, cubeTextureCallbackOptions)
					.then((cubeTexture) => {
						this.envMaps.push(cubeTexture);
						//>> console.log(`${res.name} is downloaded.`);
						countAndResolve();
					}).catch( () => reject(`error downloading ${res.type}.${res.name}`));
				}

				else if(res.type === "gltf") {

					//>> console.log(`downloading ${res.type}.${res.name}`);

					GraphicsLoader.loadGLTF(res.name, modelCallbackOptions)
					.then((data) => {
						const glTf = data.glTF;
						this.glTFs.push(glTf);
						//>> console.log(`${res.name} is downloaded.`);

						console.log(`%c${res.name} contains ${glTf.scenes.length} scenes:`, `color: lime`)
						glTf.scenes.forEach(scene => {
							console.log(`%c  + ${scene.name}`, `color: cyan`);	
						});

						countAndResolve();	
					}).catch( () => reject(`error downloading ${res.type}.${res.name}`));

				}
			});
		});
	}
}