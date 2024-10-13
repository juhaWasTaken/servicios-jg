/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BJ52Xt7s.mjs';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C5O-YwOf.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CgZDftJv.mjs';
import { $ as $$Container } from '../chunks/Container_DLgrI0a7.mjs';
import 'clsx';
import { $ as $$Footer } from '../chunks/Footer_DQ1y2sQ5.mjs';
export { renderers } from '../renderers.mjs';

const PageHeader = new Proxy({"src":"/_astro/PageHeader.RgIaw43n.webp","width":1920,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/PageHeader.webp";
							}
							
							return target[name];
						}
					});

const About = new Proxy({"src":"/_astro/About.C4NTZYjz.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/About.png";
							}
							
							return target[name];
						}
					});

const $$Statement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "pt-[50px] md:pt-20 flex flex-col md:flex-row gap-4 items-center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative md:w-1/2 px-5 md:px-3"> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": About, "alt": "About Us", "class": "max-h-[505px] w-auto object-cover object-center" })} </div> <div class="absolute top-3  md:top-4 right-2 sm:right-4 md:right-8 lg:right-32 bg-blueMain py-4 px-12 text-white"> <h3 class="font-semibold text-center uppercase text-[17px] mt-">12 años de <br>experiencia</h3> </div> </div> <div class="md:max-w-[570px] md:w-1/2 px-5"> <p class="text-[#3a5682] uppercase font-bold text-sm mb-3">Excelencia en servicios industriales desde 2013</p> <h2 class="text-blueDarker font-bold text-[28px] md:text-3xl lg:text-[42px]  mb-5  max-w-[900px] lg:leading-tight">Una opción segura y confiable para todos tus proyectos</h2> <p class="text-[17px] pl-[15px] border-l-[3px] border-blueMain text-blueLight">Entendemos que en un mundo en constante evolución, la flexibilidad y la eficiencia son clave para el éxito.</p> <p class="text-blueLight text-[17px] mt-10  mb-6 md:mb-8 lg:mb-10">Nuestro compromiso con la excelencia y la mejora continua nos ha posicionado en el sector, ofreciendo servicios que no solo cumplen, sino que superan las expectativas de nuestros clientes.</p> <a class="px-8 py-4 text-white font-bold bg-blueMain hover:bg-black transition-all ease-in delay-25" href="/services">Nuestros Proyecto</a> </div> ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/about/Statement.astro", void 0);

const InfoSection = new Proxy({"src":"/_astro/InfoSection.DGR4DbKG.webp","width":1920,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/InfoSection.webp";
							}
							
							return target[name];
						}
					});

const $$Information = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative my-[50px] md:my-20"> ${renderComponent($$result, "Image", $$Image, { "src": InfoSection, "alt": "Information Section", "class": "relative h-[380px] bg-center md:max-h-[230px] w-full object-cover md:object-top", "loading": "eager" })} <div class="absolute inset-0 bg-[#092553] opacity-60 z-10"></div> <!-- <Container class="flex flex-col md:flex-row justify-between gap-8 absolute z-20 px-3 inset-0"> --> ${renderComponent($$result, "Container", $$Container, { "class": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-between md:items-center md:gap-8 absolute z-20 px-3 inset-0" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center gap-4 mx-auto"> <h2 class="text-white font-medium text-[50px]">38</h2> <p class="text-white font-medium text-[15px] max-w-[105px] uppercase">Equipos de trabajo</p> </div> <div class="flex items-center gap-4 mx-auto"> <h2 class="text-white font-medium text-[50px]">27</h2> <p class="text-white font-medium text-[15px] max-w-[105px] uppercase">Servicios especializados</p> </div> <div class="flex items-center gap-4 mx-auto"> <h2 class="text-white font-medium text-[50px]">12</h2> <p class="text-white font-medium text-[15px] max-w-[105px] uppercase">Años de experiencia</p> </div> <div class="flex items-center gap-4 mx-auto"> <h2 class="text-white font-medium text-[50px]">23</h2> <p class="text-white font-medium text-[15px] max-w-[105px] uppercase">Proyectos realizados</p> </div> ` })} </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/about/Information.astro", void 0);

const $$ChevronIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-down transition-transform duration-300 group-open:rotate-180"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6 9l6 6l6 -6"></path> </svg> </div>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/about/ChevronIcon.astro", void 0);

const $$Questions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "mb-20" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center flex flex-col items-center mb-8 px-5"> <h2 class="font-bold text-blueDarker text-[1.75rem] md:text-3xl lg:text-[2.625rem] mb-5">Preguntas frecuentes</h2> <p class="text-[#181818] text-[1.063rem] w-full sm:max-w-[420px]">Estas son algunas preguntas frecuentes de nuestros clientes para conocernos mejor</p> </div> <section class="grid grid-cols-1 md:grid-cols-2 md:items-center"> <div class="mb-4 md:mb-0"> <details class="group px-[10px]" name="questions"> <summary class="list-none p-5 border border-[#eeeeee] text-base cursor-pointer font-semibold text-blueLight flex justify-between items-center"> <span>¿Cuál es la misión de la empresa?</span> ${renderComponent($$result2, "ChevronIcon", $$ChevronIcon, {})} </summary> <p class="border border-opacity-50 border-[#eeeeee] py-[7px] px-[15px] md:py-[15px] md:px-5 text-base md:text-[17px] text-blueLight transition-max-height duration-300 overflow-hidden max-h-0 group-open:max-h-40">Nuestra misión es crear soluciones prontas para las necesidades industriales, brindando la mejor calidad, respuesta, cooperación, ética profesional e innovación del mercado.</p> </details> <details class="group px-[10px]" name="questions"> <summary class="list-none p-5 border border-[#eeeeee] text-base cursor-pointer font-semibold text-blueLight flex justify-between items-center"> <span>¿Cuáles son los valores fundamentales de la empresa?</span> ${renderComponent($$result2, "ChevronIcon", $$ChevronIcon, {})} </summary> <p class="border border-opacity-50 border-[#eeeeee] py-[7px] px-[15px] md:py-[15px] md:px-5 text-base md:text-[17px] text-blueLight transition-max-height duration-300 overflow-hidden max-h-0 group-open:max-h-40">Nuestros valores incluyen cooperación, innovación, seguridad, confianza, ética profesional, competitividad y apertura al cambio.</p> </details> <details class="group px-[10px]" name="questions"> <summary class="list-none p-5 border border-[#eeeeee] text-base cursor-pointer font-semibold text-blueLight flex justify-between items-center"> <span>¿Cuál es la visión de la empresa para el futuro?</span> ${renderComponent($$result2, "ChevronIcon", $$ChevronIcon, {})} </summary> <p class="border border-opacity-50 border-[#eeeeee] py-[7px] px-[15px] md:py-[15px] md:px-5 text-base md:text-[17px] text-blueLight transition-max-height duration-300 overflow-hidden max-h-0 group-open:max-h-40">Nuestra visión es consolidarnos como una empresa líder en servicios de mantenimiento industrial a través de la confianza, innovación y adaptación para lograr la total satisfacción de nuestros clientes.</p> </details> </div> <div> <details class="group px-[10px]" name="questions"> <summary class="list-none p-5 border border-[#eeeeee] text-base cursor-pointer font-semibold text-blueLight flex justify-between items-center"> <span>¿Qué tipos de servicios ofrece la empresa?</span> ${renderComponent($$result2, "ChevronIcon", $$ChevronIcon, {})} </summary> <p class="border border-opacity-50 border-[#eeeeee] py-[7px] px-[15px] md:py-[15px] md:px-5 text-base md:text-[17px] text-blueLight transition-max-height duration-300 overflow-hidden max-h-0 group-open:max-h-40">Ofrecemos una amplia gama de servicios, incluyendo instalaciones eléctricas y mecánicas, mantenimiento preventivo y correctivo, fabricación de estructuras metálicas, maquinados, soldadura, y sistemas de gases especiales, entre otros.</p> </details> <details class="group px-[10px]" name="questions"> <summary class="list-none p-5 border border-[#eeeeee] text-base cursor-pointer font-semibold text-blueLight flex justify-between items-center"> <span>¿Cómo garantiza la empresa la calidad de sus servicios?</span> ${renderComponent($$result2, "ChevronIcon", $$ChevronIcon, {})} </summary> <p class="border border-opacity-50 border-[#eeeeee] py-[7px] px-[15px] md:py-[15px] md:px-5 text-base md:text-[17px] text-blueLight transition-max-height duration-300 overflow-hidden max-h-0 group-open:max-h-40">Contamos con un equipo especializado, utilizamos tecnología de punta y nos mantenemos actualizados con las últimas innovaciones del sector. Además, nuestra política de mejora continua nos permite ofrecer siempre la más alta calidad en nuestros servicios.</p> </details> <details class="group px-[10px]" name="questions"> <summary class="list-none p-5 border border-[#eeeeee] text-base cursor-pointer font-semibold text-blueLight flex justify-between items-center"> <span>¿Qué ventajas ofrece la empresa frente a sus competidores?</span> ${renderComponent($$result2, "ChevronIcon", $$ChevronIcon, {})} </summary> <p class="border border-opacity-50 border-[#eeeeee] py-[7px] px-[15px] md:py-[15px] md:px-5 text-base md:text-[17px] text-blueLight transition-max-height duration-300 overflow-hidden max-h-0 group-open:max-h-40">Nuestra principal ventaja es la diversificación de servicios, lo que nos permite ofrecer soluciones integrales y costos más competitivos. Además, nuestra experiencia de más de una década en la industria maquiladora nos da un profundo entendimiento de las necesidades específicas de nuestros clientes.</p> </details> </div> </section> ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/about/Questions.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Nosotros" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPages", $$HeaderPages, { "src": PageHeader, "phrase": "Empresa experta en soluciones industriales", "title": "Soluciones de alta calidad para la industria", "text": "Innovaci\xF3n, experiencia y compromiso son los valores que nos definen como empresa. Estamos capacitados para ofrecer soluciones de alta calidad ." })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Statement", $$Statement, {})} ${renderComponent($$result2, "Information", $$Information, {})} ${renderComponent($$result2, "Questions", $$Questions, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/pages/about.astro", void 0);

const $$file = "C:/Users/carlo/Dev/servicios-jg/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
