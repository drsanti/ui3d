import { writable } from 'svelte/store';
import type { Engine } from '../UI3D/Engine';
export const engineStore = writable<Engine>();