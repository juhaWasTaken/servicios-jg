/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$Layout } from '../chunks/Layout_BJ52Xt7s.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JG Servicios & Proyectos Industriales" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center text-center h-screen gap-5 px-5"> <h1 class="text-blueDarker font-semibold text-[28px] md:text-3xl lg:text-[46px]">Page not found</h1> <p class="max-w-[520px] text-[17px] text-blueLight text-pretty">Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page or
<a href="/contact" class="text-blueMain font-bold">Contact Us </a>
for more information
</p> <a class="bg-blueMain px-8 py-4 text-white font-bold hover:bg-black transition-all ease-in delay-100" href="/">
Go back home
</a> </div> ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/pages/404.astro", void 0);

const $$file = "C:/Users/carlo/Dev/servicios-jg/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$404,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
