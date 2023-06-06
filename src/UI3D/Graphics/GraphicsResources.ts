import * as THREE from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { GraphicsLoader, type ModelLoaderCallback } from "./GraphicsLoader";


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




export interface Resources {
	loaded: boolean;
	envMaps: THREE.CubeTexture[]
	glTFs: GLTF[]
}


export class GraphicsAssets {


    static envMaps: THREE.CubeTexture[] = [];
	static glTFs: GLTF[] = [];
	static resources: Resources;

    static resourceList = RESOURCES;

	static inprogress = false;


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
					s.traverse(c => {
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

	static downloadResources = async (callerId?: string, callbackOptions?: ModelLoaderCallback): Promise<Resources> => {

		this.resources = {envMaps: this.envMaps, glTFs: this.glTFs, loaded: false};

		console.log(`%c${callerId} is try to download`, `color: cyan`);


		if( this.inprogress === true ) {
			console.log(`%creject, the previous caller is in progress...`, `color: yellow`);
			await this.waitResource(callerId);
		}

		
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

			this.resourceList.forEach(res => {
				
				if(res.type === "env") {
					//>> console.log(`downloading ${res.type}.${res.name}`);
					GraphicsLoader.loadDefaultCubeEnvTexture(res.name).then((cubeTexture) => {
						this.envMaps.push(cubeTexture);
						//>> console.log(`${res.name} is downloaded.`);
						countAndResolve();
					}).catch( () => reject(`error downloading ${res.type}.${res.name}`));
				}
				else if(res.type === "gltf") {

					//>> console.log(`downloading ${res.type}.${res.name}`);

					GraphicsLoader.loadGLTF(res.name, callbackOptions)
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