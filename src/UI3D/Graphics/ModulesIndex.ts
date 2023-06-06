import * as THREE from "three";

import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFLoader} from "./Loaders/GLTFLoader";

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OrbitControls } from './Controls/OrbitControls';


export {THREE, OrbitControls, GLTFLoader, type GLTF};