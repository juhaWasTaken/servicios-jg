/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from '../chunks/astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$Layout } from '../chunks/Layout_BJ52Xt7s.mjs';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C5O-YwOf.mjs';
import { $ as $$ServicesHome } from '../chunks/ServicesHome_Bka_i8W6.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CgZDftJv.mjs';
import { p as planoSection, a as planos, c as check } from '../chunks/planoSection_Cz3JSWtO.mjs';
import { $ as $$Footer } from '../chunks/Footer_DQ1y2sQ5.mjs';
import { $ as $$Clients } from '../chunks/Clients_CQU1WQop.mjs';
export { renderers } from '../renderers.mjs';

const services = new Proxy({"src":"/_astro/services.ztkR_bya.webp","width":1920,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/services.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$ChooseUsServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChooseUsServices;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex"> <div class="hidden md:block md:w-1/2 relative overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute w-full h-full object-cover bg-left object-left", "src": planoSection, "alt": "Planos" })} </div> <div class="w-full md:w-1/2 relative"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-[590px] object-cover", "src": planos, "alt": "Planos" })} <div class="absolute inset-0 bg-[#081f47] bg-opacity-80 "> <div class="p-8 text-white h-full flex flex-col justify-center "> <h2 class="text-sm text-blueMain font-bold mb-4 uppercase">¿Por qué elegirnos?</h2> <h1 class="text-3xl md:text-4xl font-bold mb-4 max-w-[520px]">Razones para elegirnos para tu próximo proyecto</h1> <p class="mb-6 max-w-[520px]">Soluciones industriales integrales con experiencia y compromiso</p> <ul class="space-y-2"> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Amplia experiencia en la industria maquiladora
</li> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Servicios diversificados y soluciones a medida
</li> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Compromiso con la calidad y la innovación
</li> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Respuesta rápida y eficiente a las necesidades del cliente
</li> </ul> <a href="/contact" class="mt-4 md:mt-8 bg-blueMain text-white px-6 py-2 font-bold w-fit hover:bg-black transition-all ease-in delay-25">Contáctenos</a> </div> </div> </div> </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/services/ChooseUsServices.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPages", $$HeaderPages, { "src": services, "phrase": "Years of experience in the industry", "title": "Do you have a project in mind?", "text": "Let's send a message and start working together. We have a great customer service and quality in our work." })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ServicesHome", $$ServicesHome, {})} ${renderComponent($$result2, "ChooseUs", $$ChooseUsServices, {})} ${renderComponent($$result2, "Clients", $$Clients, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/carlo/Dev/servicios-jg/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
