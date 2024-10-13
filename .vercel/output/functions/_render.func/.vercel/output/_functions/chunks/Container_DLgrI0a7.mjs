import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as createAstro } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`max-w-7xl mx-auto ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/carlo/Dev/servicios-jg/src/components/Container.astro", void 0);

export { $$Container as $ };
