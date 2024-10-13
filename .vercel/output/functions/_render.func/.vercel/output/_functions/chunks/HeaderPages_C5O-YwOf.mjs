import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CgZDftJv.mjs';

const $$Astro = createAstro();
const $$HeaderPages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderPages;
  const { class: className, src, phrase, title, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[380px] md:h-[350px] w-full overflow-hidden p-3"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": "Page Header", "class": "absolute inset-0 w-full h-full object-cover object-center", "loading": "eager" })} <div class="absolute inset-0 bg-[#092553] opacity-60"></div> <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-[800px] mx-auto "> <p class="text-[#dddddd] font-bold uppercase text-sm mb-3">${phrase}</p> <h2 class="text-white font-bold text-[28px] md:text-3xl lg:text-[42px] mb-3 md:mb-5 text-balance lg:leading-tight">${title}</h2> <p class="text-[#dddddd] font-bold text-sm sm:text-[17px] text-pretty">${text}</p> </div> </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/HeaderPages.astro", void 0);

export { $$HeaderPages as $ };
