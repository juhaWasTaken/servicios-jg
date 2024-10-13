const BlancoAzul = new Proxy({"src":"/_astro/BlancoAzul.JOCWEgPB.png","width":4167,"height":4167,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/BlancoAzul.png";
							}
							
							return target[name];
						}
					});

const mapDotPattern = new Proxy({"src":"/_astro/mapDotPattern.BXcPqZpl.png","width":3944,"height":2030,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/mapDotPattern.png";
							}
							
							return target[name];
						}
					});

export { BlancoAzul as B, mapDotPattern as m };
