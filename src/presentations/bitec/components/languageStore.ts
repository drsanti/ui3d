import { writable } from 'svelte/store';

export const langStore = writable<'EN' | 'TH'>("EN");