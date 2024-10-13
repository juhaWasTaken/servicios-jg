import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, e as renderSlot } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CgZDftJv.mjs';
import { $ as $$Layout } from './Layout_BJ52Xt7s.mjs';
import { $ as $$Container } from './Container_DLgrI0a7.mjs';
import { $ as $$FooterPage } from './FooterPage_y5APT9z8.mjs';

const $$Astro = createAstro();
const $$ServiceLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceLayout;
  const { frontmatter } = Astro2.props;
  const { service, description, image1, image2 } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": service }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[380px] md:h-[350px] w-full overflow-hidden p-3"> ${renderComponent($$result2, "Image", $$Image, { "src": image2.src, "alt": "Page Header", "class": "absolute inset-0 w-full h-full object-cover object-center", "loading": "eager", "width": 100, "height": 100 })} <div class="absolute inset-0 bg-[#092553] opacity-60"></div> <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-[800px] mx-auto "> <h2 class="text-white font-bold text-[28px] md:text-3xl lg:text-[42px] mb-5 text-balance">${service}</h2> </div> </section> <main class="px-4"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": image2.src, "alt": "Page Header", "class": "w-full h-[450px] md:max-h-[450px] object-cover object-center pt-20 pb-10", "loading": "eager", "width": 100, "height": 100 })} <section class="flex flex-col md:flex-row gap-6 mb-12"> <section class="md:w-[70%]"> <h2 class="text-2xl font-bold text-blueDarker mb-5">Descripción del servicio</h2> <p class="text-blueLight text-base md:text-[17px]"> ${renderSlot($$result3, $$slots["default"])} </p> </section> <aside class="md:w-[30%] bg-[#f1f4f9] p-10"> <h2 class="font-bold text-blueDarker text-[20px] border-b-[2px] border-dashed border-[#0c2d6250] pb-3 mb-4">Detalles del servicio</h2> <ul class="space-y-4"> <li class="flex flex-col font-base text-blueDarker text-lg"> <span class="font-semibold text-blueDarker text-lg">Ubicación</span>
Ejemplo de ubicación
</li> <li class="flex flex-col font-base text-blueDarker text-lg"> <span class="font-semibold text-blueDarker text-lg">Ubicación</span>
Ejemplo de ubicación
</li> <li class="flex flex-col font-base text-blueDarker text-lg"> <span class="font-semibold text-blueDarker text-lg">Ubicación</span>
Ejemplo de ubicación
</li> <li class="flex flex-col font-base text-blueDarker text-lg"> <span class="font-semibold text-blueDarker text-lg">Ubicación</span>
Ejemplo de ubicación
</li> </ul> </aside> </section> ` })} </main> ${renderComponent($$result2, "FooterPage", $$FooterPage, {})} ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/layouts/ServiceLayout.astro", void 0);

export { $$ServiceLayout as $ };
