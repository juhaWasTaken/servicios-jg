import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, b as createAstro, g as renderHead, e as renderSlot } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
/* empty css                            */
import { $ as $$Image } from './_astro_assets_CgZDftJv.mjs';
import { Toaster } from 'react-hot-toast';

const NegroAzul = new Proxy({"src":"/_astro/NegroAzul.Cua-Mrtm.webp","width":4167,"height":4167,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/public/NegroAzul.webp";
							}
							
							return target[name];
						}
					});

const Menu = new Proxy({"src":"/_astro/Menu.DhWI_lAJ.svg","width":150,"height":150,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/icons/Menu.svg";
							}
							
							return target[name];
						}
					});

const Close = new Proxy({"src":"/_astro/Close.BAUWzknd.svg","width":150,"height":150,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/icons/Close.svg";
							}
							
							return target[name];
						}
					});

const mail = new Proxy({"src":"/_astro/mail.DNrnNSFd.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/icons/mail.svg";
							}
							
							return target[name];
						}
					});

const phone = new Proxy({"src":"/_astro/phone.CCUKgKeo.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/icons/phone.svg";
							}
							
							return target[name];
						}
					});

const map = new Proxy({"src":"/_astro/map.4vjP2_HP.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/icons/map.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<section class="shadowNavbar sticky top-0 left-0 right-0 z-50 bg-white"> <nav class=" max-w-7xl mx-auto flex items-center justify-between bg-white py-1 pr-3 w-full"> <div class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": NegroAzul, "alt": "Logo", "width": "80", "height": "80", "loading": "eager" })} <h1 class="font-sans font-bold uppercase text-lg md:text-xl lg:text-2xl hidden sm:flex sm:flex-col">JG Servicios
<span class="font-sans font-normal text-xs md:text-sm lg:text-md">& Proyectos Industriales</span> </h1> </div> <ul class="md:flex md:gap-5 hidden text-center items-center"> <li><a${addAttribute(`${currentPath === "" ? "text-[#04adbf]" : ""} font-bold text-base hover:text-[#04adbf]`, "class")} href="/">Inicio</a></li> <li><a${addAttribute(`${currentPath === "about" ? "text-[#04adbf]" : ""} font-bold text-base hover:text-[#04adbf]`, "class")} href="/about">Sobre Nosotros</a></li> <li><a${addAttribute(`${currentPath === "services" ? "text-[#04adbf]" : ""} font-bold text-base hover:text-[#04adbf]`, "class")} href="/services">Servicios</a></li> <li><a${addAttribute(`${currentPath === "portfolio" ? "text-[#04adbf]" : ""} font-bold text-base hover:text-[#04adbf]`, "class")} href="/portfolio">Portafolio</a></li> <li><a class="font-bold text-base text-white bg-[#04adbf] px-5 py-3 hover:bg-black transition-all ease-in delay-25" href="/contact">Contacto</a></li> </ul> <button id="menuButton" class="md:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": Menu, "alt": "Menu Icon", "width": "36", "height": "36", "loading": "eager", "class": "md:hidden", "quality": "max" })} </button> </nav> <div id="mobileMenu" class="fixed top-0 right-0 w-full h-full bg-white transform translate-x-full transition-transform duration-300 ease-in-out z-50"> <div class="px-5 pb-5 pt-10 flex justify-between items-center"> <h2 class="text-xl font-semibold">Menu</h2> <button id="closeButton"> ${renderComponent($$result, "Image", $$Image, { "src": Close, "alt": "Close Icon", "width": "32", "height": "32", "loading": "eager", "quality": "max" })} </button> </div> <ul class="flex flex-col items-start p-5"> <li${addAttribute(`${currentPath === "" ? "text-[#04adbf]" : ""} border-b border-[#EEEEEE] py-[10px] w-full hover:text-[#04adbf]`, "class")}><a class="font-medium text-base" href="/">Inicio</a></li> <li${addAttribute(`${currentPath === "about" ? "text-[#04adbf]" : ""} border-b border-[#EEEEEE] py-[10px] w-full hover:text-[#04adbf]`, "class")}><a class="font-medium text-base" href="/about">Sobre Nosotros</a></li> <li${addAttribute(`${currentPath === "services" ? "text-[#04adbf]" : ""} border-b border-[#EEEEEE] py-[10px] w-full hover:text-[#04adbf]`, "class")}><a class="font-medium text-base" href="/services">Servicios</a></li> <li${addAttribute(`${currentPath === "portfolio" ? "text-[#04adbf]" : ""} border-b border-[#EEEEEE] py-[10px] w-full hover:text-[#04adbf]`, "class")}><a class="font-medium text-base" href="/portfolio">Portafolio</a></li> <li${addAttribute(`${currentPath === "contact" ? "text-[#04adbf]" : ""} border-b border-[#EEEEEE] py-[10px] w-full hover:text-[#04adbf]`, "class")}><a class="font-medium text-base" href="/contact">Contacto</a></li> </ul> <div class="p-5"> <div class="flex flex-col gap-3"> <div class="flex items-start gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": map, "alt": "Address Icon", "width": "20", "height": "20", "loading": "eager", "class": "mt-1" })} <div class="flex flex-col"> <h3 class="font-medium text-lg">Location</h3> <p class="font-normal text-base">31 New Street, NY, USA</p> </div> </div> <div class="flex items-start gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": mail, "alt": "Email Icon", "width": "20", "height": "20", "loading": "eager", "class": "mt-1" })} <div class="flex flex-col"> <h3 class="font-medium text-lg">Email Us</h3> <p class="font-normal text-base">info@konstruk.com</p> </div> </div> <div class="flex items-start gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": phone, "alt": "Phone Icon", "width": "20", "height": "20", "loading": "eager", "class": "mt-1" })} <div class="flex flex-col"> <h3 class="font-medium text-lg">Call Us</h3> <p class="font-normal text-base">(+1) 7854-333-222</p> </div> </div> </div> </div> </div> </section> `;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicons/NegroAzul.png" media="(prefers-color-scheme: no-preference)" type="image/png"><link rel="icon" href="/favicons/BlancoAzul.png" media="(prefers-color-scheme: dark)" type="image/png"><link rel="icon" href="/favicons/NegroAzul.png" media="(prefers-color-scheme: light)" type="image/png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex flex-col flex-1"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Toaster", Toaster, { "position": "bottom-right", "reverseOrder": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "react-hot-toast", "client:component-export": "Toaster" })} </main> </body></html>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
