/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$Layout } from '../chunks/Layout_BJ52Xt7s.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_CgZDftJv.mjs';
import { $ as $$Container } from '../chunks/Container_DLgrI0a7.mjs';
import { $ as $$ServicesHome } from '../chunks/ServicesHome_Bka_i8W6.mjs';
import { c as construction1, a as construction2, b as construction3, d as construction4, $ as $$ChooseUs, e as $$Carousel } from '../chunks/Carousel_BYbLj5gZ.mjs';
import { $ as $$Footer } from '../chunks/Footer_DQ1y2sQ5.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[650px] bg-cover bg-center bgImg"> <div class="absolute inset-0 bg-black opacity-50"></div> <section class="relative flex flex-col justify-center max-w-7xl mx-auto h-full gap-5 pl-6 pr-3"> <p class="text-[#e1e1e1] text-sm">Haciendo sus proyectos realidad</p> <h1 class="text-3xl md:text-5xl text-white font-bold max-w-[514px] text-balance">Comprometidos con la máxima calidad y <span class="text-[#04adbf]">resultados!</span></h1> <p class="text-sm md:text-[17px] text-white max-w-[400px] ">Ofrecemos soluciones integrales para la industria desde 2013. Nuestra amplia experiencia y diversidad de servicios nos permiten brindar calidad y eficiencia en cada proyecto.</p> <a class="bg-[#04adbf] px-6 py-3 text-white  text-center font-semibold w-full sm:w-fit hover:bg-black transition-all ease-in delay-25" href="/services">Mire nuestros servicios</a> </section> </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/Header.astro", void 0);

const moreAbout = new Proxy({"src":"/_astro/moreAbout.CtjlWFeS.png","width":407,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/moreAbout.png";
							}
							
							return target[name];
						}
					});

const $$MoreAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "py-20 px-5 flex flex-col md:flex-row md:justify-between md:items-center md:gap-5" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-5 "> <p class="uppercase text-blueLight text-sm font-bold">Con una gran atención al cliente</p> <h2 class="font-bold text-blueDarker text-[1.75rem] md:text-3xl lg:text-[2.625rem] max-w-[570px] lg:leading-tight">Soluciones industriales de alta calidad</h2> <p class="text-[#181818] text-[1.063rem] w-full md:max-w-[570px]">En JG Servicios & Proyectos, entendemos las necesidades cambiantes de la industria. Nuestro equipo de ingenieros expertos ofrece una gama completa de servicios, desde instalaciones eléctricas y mecánicas hasta fabricación de estructuras y mantenimiento industrial. </p> <a class="bg-blueMain text-white font-bold px-6 py-3 text-[1.063rem] text-center sm:w-fit hover:bg-black transition-all ease-in delay-25 cursor-pointer" href="/about">Más sobre nosotros</a> </div> <div class="relative mx-auto md:mx-0 mt-5 md:mt-0 lg:mr-5"> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": moreAbout, "alt": "Illustration", "quality": 100, "loading": "eager", "class": "", "width": 408, "height": 500 })} </div> <div class="absolute top-0 left-0 md:right-0 bg-blueMain text-white p-3 md:p-4 lg:p-6 mt-6 md:mt-12 max-w-[285px]"> <h3 class="font-bold text-sm md:text-base lg:text-lg mb-2 text-wrap">Estrategia de productos <br>y servicios</h3> <p class="text-[1.063rem] text-xs md:text-sm lg:text-base">Con más de una década de experiencia, estamos preparados para enfrentar los desafíos del futuro industrial.</p> </div> </div> ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/MoreAbout.astro", void 0);

const $$ProjectsHome = createComponent(($$result, $$props, $$slots) => {
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
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "py-12 md:py-20 px-3" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10"> <div> <p class="uppercase text-blueDarker font-bold text-sm mb-4">Proyectos de construcción</p> <h2 class="text-[1.75rem] md:text-3xl lg:text-[2.625rem] text-blueDarker font-bold text-balance lg:leading-tight">Construir y gestionar infraestructuras de lugares</h2> </div> <div class="flex flex-col md:items-end w-fit justify-start gap-4"> <p class="text-[1.063rem] text-blueDarker md:text-end ">Construction is a general term meaning the art and industrial science of old french construction.</p> <a class="px-8 py-4 bg-blueMain font-bold text-white w-full sm:w-fit text-center hover:bg-black transition-all ease-in delay-25" href="/portfolio">Todos los proyectos</a> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"> ${works.map((work) => renderTemplate`<div class="relative overflow-hidden group"> ${renderComponent($$result2, "Image", $$Image, { "src": work.img, "alt": work.name, "class": "w-full h-[355px] object-cover transition-transform duration-300 group-hover:scale-110" })} <div class="absolute inset-0 bg-gradient-to-t from-blueDarker to-transparent"> <div class="absolute bottom-0 left-0 p-5 w-full"> <span class="inline-block px-3 py-1 bg-blueMain text-white text-sm font-semibold mb-2"> ${work.tag} </span> <h3 class="text-white text-xl font-bold">${work.name}</h3> </div> </div> </div>`)} </div> ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/ProjectsHome.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JG Servicios & Proyectos Industriales" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "MoreAbout", $$MoreAbout, {})} ${renderComponent($$result2, "ServicesHome", $$ServicesHome, {})} ${renderComponent($$result2, "ProjectsHome", $$ProjectsHome, {})} ${renderComponent($$result2, "ChooseUs", $$ChooseUs, {})} ${renderComponent($$result2, "Carousel", $$Carousel, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/pages/index.astro", void 0);

const $$file = "C:/Users/carlo/Dev/servicios-jg/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
