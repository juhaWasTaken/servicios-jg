/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BYd6cwUg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BJ52Xt7s.mjs';
import { $ as $$HeaderPages } from '../chunks/HeaderPages_C5O-YwOf.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { $ as $$FooterPage } from '../chunks/FooterPage_y5APT9z8.mjs';
export { renderers } from '../renderers.mjs';

const contact = new Proxy({"src":"/_astro/contact.CulQi6SN.webp","width":1280,"height":1919,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/contact.webp";
							}
							
							return target[name];
						}
					});

const form = new Proxy({"src":"/_astro/form.B3epuTX0.webp","width":640,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carlo/Dev/servicios-jg/src/assets/images/form.webp";
							}
							
							return target[name];
						}
					});

const schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Asunto debe tener al menos 5 caracteres"),
  phone: z.string().length(10, "Número de teléfono debe tener 10 dígitos"),
  message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres")
});
const ContactForm = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          senderName: data.name,
          senderEmail: data.email,
          senderSubject: data.subject,
          senderPhone: data.phone,
          senderMessage: data.message
        })
      });
      if (response.ok) {
        toast.success("Mensaje enviado correctamente");
        reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Error al enviar correo");
      }
    } catch (error) {
      toast.error("Se ha producido un error al enviar el formulario");
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "flex pb-20", children: /* @__PURE__ */ jsxs("section", { className: "flex flex-col md:flex-row justify-center gap-5 items-start px-5 mt-20 overflow-hidden max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("section", { className: "md:w-1/2 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("p", { className: "uppercase text-blueMain font-bold text-sm mb-3", children: "Estamos a minutos de conocernos" }),
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-blueDarker text-[28px] lg:text-4xl mb-4", children: "Enviar un mensaje " }),
        /* @__PURE__ */ jsx("p", { className: "text-blueLight text-sm sm:text-[17px] ", children: "Mándanos un correo y empecemos a ver los detalles de tu proyectos para poder hacerlo realidad." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { children: "Nombre" }),
            /* @__PURE__ */ jsx("input", { ...register("name"), type: "text", className: "p-3 border border-[#eeeeee] w-full", placeholder: "Nombre" }),
            errors.name && /* @__PURE__ */ jsx("span", { className: "text-errorRed mt-2 text-sm", children: errors.name.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { children: "Asunto" }),
            /* @__PURE__ */ jsx("input", { ...register("subject"), type: "text", className: "p-3 border border-[#eeeeee] w-full", placeholder: "Asunto" }),
            errors.subject && /* @__PURE__ */ jsx("span", { className: "text-errorRed mt-2 text-sm", children: errors.subject.message })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { children: "Correo" }),
            /* @__PURE__ */ jsx("input", { ...register("email"), type: "email", className: "p-3 border border-[#eeeeee] w-full", placeholder: "Correo" }),
            errors.email && /* @__PURE__ */ jsx("span", { className: "text-errorRed mt-2 text-sm", children: errors.email.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { children: "Teléfono" }),
            /* @__PURE__ */ jsx("input", { ...register("phone"), type: "text", className: "p-3 border border-[#eeeeee] w-full", placeholder: "Teléfono" }),
            errors.phone && /* @__PURE__ */ jsx("span", { className: "text-errorRed mt-2 text-sm", children: errors.phone.message })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
          /* @__PURE__ */ jsx("label", { children: "Mensaje" }),
          /* @__PURE__ */ jsx("textarea", { ...register("message"), className: "p-3 border border-[#eeeeee] w-full", placeholder: "Mensaje", rows: 4 }),
          errors.message && /* @__PURE__ */ jsx("span", { className: "text-errorRed mt-2 text-sm", children: errors.message.message })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "py-4 px-7 bg-blueMain w-full sm:w-fit mt-5 text-white font-bold hover:bg-black transition-all ease-in delay-25",
            disabled: isSubmitting,
            children: isSubmitting ? "Enviando mensaje..." : "Mandar mensaje"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-full md:w-auto object-center object-cover items-stretch", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden group", children: [
      /* @__PURE__ */ jsx("img", { src: form.src, alt: "Form", className: "relative md:max-h-[547px] md:w-auto max-h-[300px] w-full bg-center object-center object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-blueDarker to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 p-5 ", children: /* @__PURE__ */ jsx("p", { className: "text-white text-xl font-bold max-w-[200px]", children: "Ofrecemos las mejores soluciones posibles" }) })
    ] }) })
  ] }) });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPages", $$HeaderPages, { "src": contact, "phrase": "A\xF1os de experiencia en el sector", "title": "\xBFTiene alg\xFAn proyecto en mente?", "text": "Env\xEDe un mensaje y empecemos a trabajar juntos. Tenemos un gran servicio al cliente y calidad en nuestro trabajo." })} ${maybeRenderHead()}<main> <!-- <Form />  --> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact/Form", "client:component-export": "ContactForm" })} </main> ${renderComponent($$result2, "FooterPage", $$FooterPage, {})} ` })}`;
}, "C:/Users/carlo/Dev/servicios-jg/src/pages/contact.astro", void 0);

const $$file = "C:/Users/carlo/Dev/servicios-jg/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
