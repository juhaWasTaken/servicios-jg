import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CgZDftJv.mjs';
import { p as planoSection, a as planos, c as check, l as logo3 } from './planoSection_Cz3JSWtO.mjs';

const $$ChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex pb-12 md:pb-20"> <div class="hidden md:block md:w-1/2 relative overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute w-full h-full object-cover bg-left object-left", "src": planoSection, "alt": "Planos" })} </div> <div class="w-full md:w-1/2 relative"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-[590px] object-cover", "src": planos, "alt": "Planos" })} <div class="absolute inset-0 bg-[#081f47] bg-opacity-80 "> <div class="p-8 text-white h-full flex flex-col justify-center "> <h2 class="text-sm text-blueMain font-bold mb-4 uppercase">¿Por qué elegirnos?</h2> <h1 class="text-3xl md:text-4xl font-bold mb-4 max-w-[520px]">Razones para elegirnos para tu próximo proyecto</h1> <p class="mb-6 max-w-[520px]">Soluciones industriales integrales con experiencia y compromiso</p> <ul class="space-y-2"> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Amplia experiencia en la industria maquiladora
</li> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Servicios diversificados y soluciones a medida
</li> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Compromiso con la calidad y la innovación
</li> <li class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": check, "alt": "Check", "class": "mr-3" })}
Respuesta rápida y eficiente a las necesidades del cliente
</li> </ul> <a href="/about" class="mt-4 md:mt-8 bg-blueMain text-white px-6 py-2 font-bold w-fit hover:bg-black transition-all ease-in delay-25">Más de nosotros</a> </div> </div> </div> </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/ChooseUs.astro", void 0);

const construction1 = new Proxy({"src":"/_astro/construction1.DFUhxHAA.webp","width":1280,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/construction1.webp";
							}
							
							return target[name];
						}
					});

const construction2 = new Proxy({"src":"/_astro/construction2.Bkw5LBcD.webp","width":1280,"height":1920,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/construction2.webp";
							}
							
							return target[name];
						}
					});

const construction3 = new Proxy({"src":"/_astro/construction3.BP2eutW5.webp","width":1920,"height":2880,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/construction3.webp";
							}
							
							return target[name];
						}
					});

const construction4 = new Proxy({"src":"/_astro/construction4.DCivRHsi.webp","width":1280,"height":1925,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/construction4.webp";
							}
							
							return target[name];
						}
					});

const logo1 = new Proxy({"src":"/_astro/logo1.DyKR3bYr.webp","width":600,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/logo1.webp";
							}
							
							return target[name];
						}
					});

const logo2 = new Proxy({"src":"/_astro/logo2.DzLbRn4e.jpg","width":416,"height":350,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/logo2.jpg";
							}
							
							return target[name];
						}
					});

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Ruben Dias",
      role: "Marketer",
      image: logo1,
      quote: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things."
    },
    {
      name: "Lionel Messi",
      role: "Engineer",
      image: logo2,
      quote: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things."
    },
    {
      name: "Erling Haaland",
      role: "Technician",
      image: logo3,
      quote: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things."
    },
    {
      name: "Lionel Messi",
      role: "Engineer",
      image: logo2,
      quote: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="gradietnCustom max-w-full"> <section class="max-w-7xl mx-auto pb-12 md:pb-20 "> <div class="flex flex-col items-center px-4 pb-4"> <p class="uppercase text-blueDarker font-bold text-sm mb-5">Testimonios de clientes</p> <h2 class="text-[1.75rem] md:text-3xl lg:text-[2.625rem] text-blueDarker font-bold text-balance text-center">Opiniones de nuestros clientes</h2> <p class="text-[1.063rem] text-blueDarker text-center mt-5 md:max-w-[520px]">Gracias a tantos años en la industria hemos podido realizar numerosos proyectos los cuales nos han permitido tener gran relación con nuestros clientes.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 px-4"> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white  shadow-md p-6 flex flex-col items-center text-center"> ${renderComponent($$result, "Image", $$Image, { "src": testimonial.image, "alt": testimonial.name, "class": "w-24 h-24 rounded-full mb-4" })} <h3 class="text-xl font-bold text-blueDarker">${testimonial.name}</h3> <p class="text-sm text-gray-600 mb-4">${testimonial.role}</p> <p class="text-gray-700 mb-4">${testimonial.quote}</p> <div class="flex"> ${[...Array(4)].map(() => renderTemplate`<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path> </svg>`)} <svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path> </svg> </div> </div>`)} </div> </section> </div>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/Carousel.astro", void 0);

export { $$ChooseUs as $, construction2 as a, construction3 as b, construction1 as c, construction4 as d, $$Carousel as e };
