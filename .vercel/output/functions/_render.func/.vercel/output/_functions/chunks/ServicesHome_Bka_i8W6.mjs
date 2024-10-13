import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Container_DLgrI0a7.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { frontmatter, url } = Astro2.props;
  const { service, image1, image2, description, link } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<div class="group flex flex-col items-center gap-3 bg-white p-6  shadow-md text-center hover:bg-blueMain transition-all ease-in-out "> <img${addAttribute(image1.src, "src")} alt="Illustration"${addAttribute(64, "width")}${addAttribute(64, "height")} class="group-hover:stroke-white"> <div class=""> <h3 class=" text-lg font-semibold text-blueDarker mb group-hover:text-white mb-3 ">${service}</h3> <p class=" text-blueLight font-normal mb-[10px] group-hover:text-white">${description}</p> <a${addAttribute(link, "href")} class=" text-blueMain text-sm hover:underline font-semibold group-hover:text-white">Más información</a> </div> </div>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/services/ServiceCard.astro", void 0);

const $$Astro = createAstro();
const $$ServicesHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesHome;
  const allServices = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/services/service1.md": () => import('./service1_buWRfaOG.mjs').then(n => n._),"/src/pages/services/service2.md": () => import('./service2_5Ab9QrXV.mjs').then(n => n._),"/src/pages/services/service3.md": () => import('./service3_Dd3-fe3B.mjs').then(n => n._),"/src/pages/services/service4.md": () => import('./service4_C9Yt1Isj.mjs').then(n => n._),"/src/pages/services/service5.md": () => import('./service5_zFe0urOP.mjs').then(n => n._),"/src/pages/services/service6.md": () => import('./service6_o7pDM2JE.mjs').then(n => n._),"/src/pages/services/service7.md": () => import('./service7_Dwx11ijn.mjs').then(n => n._),"/src/pages/services/service8.md": () => import('./service8_CPd8Ux_Q.mjs').then(n => n._)}), () => "@/pages/services/*.md");
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#f1f4f9] w-full py-12 md:py-20"> ${renderComponent($$result, "Container", $$Container, { "class": "flex flex-col gap-8 px-3" }, { "default": ($$result2) => renderTemplate` <div class="text-center flex flex-col items-center"> <p class="uppercase text-sm text-blueLight font-bold mb-4">Con la mejor calidad posible</p> <h2 class="text-[1.75rem] md:text-3xl lg:text-[2.625rem] text-blueDarker font-bold mb-4">Nuestros servicios</h2> <p class="text-[1.063rem] text-pretty md:max-w-[460px] text-blueDarker">Contamos con una gran variedad de servicios con la mejor calidad posible. Nuestros años en la industria nos respaldan.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${allServices.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "frontmatter": service.frontmatter, "url": service.url })}`)} </div> ` })} </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/ServicesHome.astro", void 0);

export { $$ServicesHome as $ };
