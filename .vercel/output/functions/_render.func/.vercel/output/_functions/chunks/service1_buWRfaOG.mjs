/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$ServiceLayout } from './ServiceLayout_BM4k1_zA.mjs';

const html = "<p>We have tried and you finding hell, i may just sacrifie clusless and just trust you will be fine, and when im back in chicago i feel it, goodbye goodbye, you take the man out the city not the city out of the man</p>";

				const frontmatter = {"layout":"../../layouts/ServiceLayout.astro","service":"Instalaciones Eléctricas","description":"Diseño e implementación de sistemas eléctricos de alta y baja tensión para industrias, cumpliendo con normas mexicanas y NEC","image1":{"src":"/service1/concretePump.svg","alt":"test"},"image2":{"src":"/service1/services.webp","alt":"test"},"link":"/services/service1"};
				const file = "C:/Users/carlo/Dev/servicios-jg/src/pages/services/service1.md";
				const url = "/services/service1";
				function rawContent() {
					return "\r\nWe have tried and you finding hell, i may just sacrifie clusless and just trust you will be fine, and when im back in chicago i feel it, goodbye goodbye, you take the man out the city not the city out of the man";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$ServiceLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
