import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_COiKcocn.mjs';
import { manifest } from './manifest_B8-EqgEt.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/portfolio.astro.mjs');
const _page6 = () => import('./pages/services/service1.astro.mjs');
const _page7 = () => import('./pages/services/service2.astro.mjs');
const _page8 = () => import('./pages/services/service3.astro.mjs');
const _page9 = () => import('./pages/services/service4.astro.mjs');
const _page10 = () => import('./pages/services/service5.astro.mjs');
const _page11 = () => import('./pages/services/service6.astro.mjs');
const _page12 = () => import('./pages/services/service7.astro.mjs');
const _page13 = () => import('./pages/services/service8.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/sendEmail.json.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/portfolio.astro", _page5],
    ["src/pages/services/service1.md", _page6],
    ["src/pages/services/service2.md", _page7],
    ["src/pages/services/service3.md", _page8],
    ["src/pages/services/service4.md", _page9],
    ["src/pages/services/service5.md", _page10],
    ["src/pages/services/service6.md", _page11],
    ["src/pages/services/service7.md", _page12],
    ["src/pages/services/service8.md", _page13],
    ["src/pages/services/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ebe86eaf-ea55-4933-85b7-9b82ce5f35be",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
