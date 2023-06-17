import type { Api } from 'reveal.js';
import { writable } from 'svelte/store';

export const revealStore = writable<Api>();