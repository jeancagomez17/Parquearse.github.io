import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DLqjWw84.mjs';
import { manifest } from './manifest_rBdK9Kiq.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contactenos.astro.mjs');
const _page2 = () => import('./pages/mas/_name_.astro.mjs');
const _page3 = () => import('./pages/nosotros.astro.mjs');
const _page4 = () => import('./pages/novedades.astro.mjs');
const _page5 = () => import('./pages/politicas.astro.mjs');
const _page6 = () => import('./pages/sedes.astro.mjs');
const _page7 = () => import('./pages/servicios.astro.mjs');
const _page8 = () => import('./pages/soluciones.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.6_@types+node@22.8.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contactenos.astro", _page1],
    ["src/pages/mas/[name].astro", _page2],
    ["src/pages/nosotros.astro", _page3],
    ["src/pages/novedades.astro", _page4],
    ["src/pages/politicas.astro", _page5],
    ["src/pages/sedes.astro", _page6],
    ["src/pages/servicios.astro", _page7],
    ["src/pages/soluciones.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b7f675cf-f2cf-4468-a1cf-f31aeffe088f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
