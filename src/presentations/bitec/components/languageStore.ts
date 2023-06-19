import { writable } from 'svelte/store';

export const langStore = writable<'EN' | 'TH'>("EN");
export const syncStore = writable<boolean>(true);
export const speakerStore = writable<boolean>(false);