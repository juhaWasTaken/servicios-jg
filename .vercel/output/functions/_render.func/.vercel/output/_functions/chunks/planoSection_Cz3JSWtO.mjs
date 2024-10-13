const logo3 = new Proxy({"src":"/_astro/logo3.D9VyPNyo.jpg","width":600,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/logo3.jpg";
							}
							
							return target[name];
						}
					});

const check = new Proxy({"src":"/_astro/check.BVp5NBkn.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/icons/check.svg";
							}
							
							return target[name];
						}
					});

const planos = new Proxy({"src":"/_astro/planos.Djiro8jd.webp","width":1536,"height":768,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/planos.webp";
							}
							
							return target[name];
						}
					});

const planoSection = new Proxy({"src":"/_astro/planoSection.D9xSafbQ.webp","width":1920,"height":1200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/planoSection.webp";
							}
							
							return target[name];
						}
					});

export { planos as a, check as c, logo3 as l, planoSection as p };
