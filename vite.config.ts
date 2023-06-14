import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit(),
	],
	resolve: {
		alias: {
			$pngIcons: mode === 'production' ? './static/icons' : '../icons'
		}
	}
}));
