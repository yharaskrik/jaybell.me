/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';

import { Nitro } from 'nitropack';

const devBindingsModule = async (nitro: Nitro) => {
    if (nitro.options.dev) {
        nitro.options.plugins.push('./src/dev-bindings.ts');
    }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    publicDir: 'src/public',
    build: {
        target: ['es2020'],
        commonjsOptions: { transformMixedEsModules: true },
    },
    resolve: {
        mainFields: ['module'],
    },
    ssr: {
        noExternal: ['@tsparticles/angular'],
    },
    plugins: [
        analog({
            nitro: {
                preset: 'cloudflare-pages',
                modules: [devBindingsModule],
                externals: { inline: ['zone.js/node', 'tslib'] },
            },
            prerender: {
                routes: ['/'],
                sitemap: {
                    host: 'https://jaybell.me',
                },
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/test.ts'],
        include: ['**/*.spec.ts'],
        reporters: ['default'],
    },
    define: {
        'import.meta.vitest': mode !== 'production',
    },
}));
