/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BJ52Xt7s.mjs';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C5O-YwOf.mjs';
import { $ as $$Clients } from '../chunks/Clients_CQU1WQop.mjs';
import { c as construction1, a as construction2, b as construction3, d as construction4, $ as $$ChooseUs, e as $$Carousel } from '../chunks/Carousel_BYbLj5gZ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CgZDftJv.mjs';
import { $ as $$Container } from '../chunks/Container_DLgrI0a7.mjs';
import { $ as $$Footer } from '../chunks/Footer_DQ1y2sQ5.mjs';
export { renderers } from '../renderers.mjs';

const portfolio = new Proxy({"src":"/_astro/portfolio.DcY9Kqxm.webp","width":1280,"height":854,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/portfolio.webp";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const works = [
    {
      name: "Football field construction",
      tag: "Construction",
      img: construction1
    },
    {
      name: "Mounting of metal structures",
      tag: "Industrial",
      img: construction2
    },
    {
      name: "Construction warehouse",
      tag: "Construction",
      img: construction3
    },
    {
      name: "Repair of industrial machinery",
      tag: "Industrial",
      img: construction4
    },
    {
      name: "Football field construction",
      tag: "Construction",
      img: construction4
    },
    {
      name: "Mounting of metal structures",
      tag: "Industrial",
      img: construction3
    },
    {
      name: "Construction warehouse",
      tag: "Construction",
      img: construction2
    },
    {
      name: "Repair of industrial machinery",
      tag: "Industrial",
      img: construction1
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "pb-12 md:pb-20 px-3" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10"> <div> <p class="uppercase text-blueDarker font-bold text-sm mb-4">Construction Projects!</p> <h2 class="text-[1.75rem] md:text-3xl lg:text-[2.625rem] text-blueDarker font-bold text-balance ">Construction and manage places infrastructures!</h2> </div> <div class="flex flex-col md:items-end w-fit justify-start gap-4"> <p class="text-[1.063rem] text-blueDarker md:text-end ">Construction is a general term meaning the art and industrial science of old french construction.</p> <a class="px-8 py-4 bg-blueMain font-bold text-white w-full sm:w-fit text-center hover:bg-black transition-all ease-in delay-25" href="/contact">Contact Us</a> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"> ${works.map((work) => renderTemplate`<div class="relative overflow-hidden group"> ${renderComponent($$result2, "Image", $$Image, { "src": work.img, "alt": work.name, "class": "w-full h-[355px] object-cover transition-transform duration-300 group-hover:scale-110" })} <div class="absolute inset-0 bg-gradient-to-t from-blueDarker to-transparent"> <div class="absolute bottom-0 left-0 p-5 w-full"> <span class="inline-block px-3 py-1 bg-blueMain text-white text-sm font-semibold mb-2"> ${work.tag} </span> <h3 class="text-white text-xl font-bold">${work.name}</h3> </div> </div> </div>`)} </div> ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/portfolio/Projects.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestro Portafolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPages", $$HeaderPages, { "src": portfolio, "phrase": "Years of experience in the industry", "title": "Projects made with excellent quality and preparation!", "text": "Take a look at all the work we have done over the years. With the best quality and customer service" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Clients", $$Clients, {})} ${renderComponent($$result2, "ChooseUs", $$ChooseUs, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Carousel", $$Carousel, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/carlo/Dev/servicios-jg/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
