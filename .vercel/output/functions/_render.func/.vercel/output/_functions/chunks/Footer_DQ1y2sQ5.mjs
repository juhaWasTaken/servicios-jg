import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CgZDftJv.mjs';
import { m as mapDotPattern, B as BlancoAzul } from './mapDotPattern_BNZwFRrO.mjs';

const scalePattern = new Proxy({"src":"/_astro/scale.N_wcg8LI.png","width":57,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/scale.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full relative overflow-hidden"${addAttribute({
    backgroundColor: "#04adbf",
    // o '#00C0FF' para el azul turquesa
    backgroundImage: `url(${scalePattern.src})`,
    backgroundPosition: "top left",
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto"
  }, "style")}> <div class="max-w-7xl mx-auto flex gap-3 flex-col md:flex-row md:justify-between p-8 relative z-10"> <h2 class="text-white text-[22px] md:text-2xl lg:text-[28px] font-bold">
¿Busca soluciones de alta calidad?
</h2> <a class="bg-blueDarker px-8 py-2 text-[15px] text-white font-bold text-center sm:w-fit hover:bg-black transition-all ease-in delay-25" href="/contact">
Contáctenos
</a> </div> </section> <footer class="bg-blueDarker relative overflow-hidden"> <div class="absolute inset-0 opacity-100 z-10 flex items-center justify-center pointer-events-none"> ${renderComponent($$result, "Image", $$Image, { "src": mapDotPattern, "alt": "World Map", "class": "mx-auto max-w-2xl  h-auto object-cover z-0 opacity-10" })} </div> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 relative z-20"> <!-- Logo and Description --> <div class="space-y-4"> ${renderComponent($$result, "Image", $$Image, { "src": BlancoAzul, "alt": "Buildico Logo", "class": "h-20 w-auto" })} <p class="text-white text-sm">
JG Servicios & Proyectos Industriales ofrece soluciones integrales para la industria desde 2013. Nuestra experiencia nos permiten brindar calidad y eficiencia en cada proyecto.
</p> <div class="flex space-x-4"> <a href="#" class="flex items-center bg-[#213b65] p-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bebbbc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path> </svg> </a> </div> </div> <!-- Useful Links --> <div> <h3 class="text-white font-bold mb-2">Enlaces de interés</h3> <div class="bg-blueMain h-1 w-32 mb-4"></div> <ul class="grid grid-cols-1 sm:grid-cols-2 items-center gap-2"> <li><a href="/" class="text-[#9ca3af] hover:text-white">Inicio</a></li> <li><a href="/about" class="text-[#9ca3af] hover:text-white">Sobre Nosotros</a></li> <li><a href="/services" class="text-[#9ca3af] hover:text-white">Servicios</a></li> <li><a href="/portfolio" class="text-[#9ca3af] hover:text-white">Portafolio</a></li> <li><a href="/contact" class="text-[#9ca3af] hover:text-white">Contacto</a></li> </ul> </div> <!-- Get in Touch --> <div> <h3 class="text-white font-bold mb-2">Póngase en contacto</h3> <div class="bg-blueMain h-1 w-32 mb-4"></div> <ul class="space-y-3"> <li class="flex items-start gap-3 "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#04adbf" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5.5"></path><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path><path d="M19 18v.01"></path></svg> <span class="text-[#9ca3af]">Cerro de la bufa, Col. Aztlán, Reynosa, Tamps. </span> </li> <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#04adbf" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg> <a href="mailto:ventas@jgserviciosindustriales.com" class="text-[#9ca3af] hover:text-white">ventas@jgserviciosindustriales.com</a> </li> <li class="flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#04adbf" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5.5"></path><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path><path d="M19 18v.01"></path></svg> <span class="text-[#9ca3af]">+(123) 1234-567-8902</span> </li> </ul> </div> </div> <!-- Copyright --> <div class="border-t border-[#e1e1e1] mt-12 z-50"> <div class="max-w-7xl mx-auto px-4 py-4"> <p class="text-center text-[#9ca3af] text-xs">
Página desarrollada por
<a href="https://www.youtube.com/watch?v=hAwa7UVdRnQ&t=1094s" target="_blank" class="text-white italic">Carlos Gallaga</a> </p> </div> </div> </footer>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/Footer.astro", void 0);

export { $$Footer as $ };
