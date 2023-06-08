import { writable } from 'svelte/store';
import type { Engine } from '../ui3d/Engine';
export const engineStore = writable<Engine>();