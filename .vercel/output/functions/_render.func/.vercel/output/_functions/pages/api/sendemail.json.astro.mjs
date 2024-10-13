import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Preview, Tailwind, Body, Container, Section, Heading, Text, Button, Hr } from '@react-email/components';
import 'react';
export { renderers } from '../../renderers.mjs';

process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
const newMessage = ({
  senderName,
  senderEmail,
  senderMessage,
  senderPhone,
  senderSubject
}) => {
  const previewText = `${senderName} te envió un mensaje`;
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: previewText }),
    /* @__PURE__ */ jsx(Tailwind, { children: /* @__PURE__ */ jsx(Body, { className: "bg-white my-auto mx-auto font-sans px-2", children: /* @__PURE__ */ jsxs(Container, { className: "border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]", children: [
      /* @__PURE__ */ jsx(Section, { className: "mt-[32px]", children: /* @__PURE__ */ jsxs(Heading, { className: "text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0", children: [
        /* @__PURE__ */ jsx("strong", { children: senderName }),
        " te ha enviado un mensaje"
      ] }) }),
      /* @__PURE__ */ jsx(Text, { className: "text-black text-[14px] leading-[24px]", children: "Hola JG Servicios Industriales," }),
      /* @__PURE__ */ jsxs(Text, { className: "text-black text-[14px] leading-[24px]", children: [
        /* @__PURE__ */ jsx("strong", { children: senderName }),
        " (",
        senderEmail,
        ") te ha enviado un mensaje sobre este tema: ",
        /* @__PURE__ */ jsx("strong", { children: senderSubject }),
        ":"
      ] }),
      /* @__PURE__ */ jsx(Text, { className: "text-black text-[14px] leading-[24px]", children: senderMessage }),
      /* @__PURE__ */ jsx(Section, { className: "text-center mt-[32px] mb-[32px]", children: /* @__PURE__ */ jsxs(
        Button,
        {
          className: "bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3",
          href: `mailto:${senderEmail}`,
          children: [
            "Comunícate con ",
            senderName
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Text, { className: "text-black text-[14px] leading-[24px] text-center", children: "o manda un mensaje a través de su número de teléfono:" }),
      /* @__PURE__ */ jsx(Text, { className: "text-[#0000EE] text-[14px] leading-[24px] text-center", children: senderPhone }),
      /* @__PURE__ */ jsx(Hr, { className: "border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" }),
      /* @__PURE__ */ jsxs(Text, { className: "text-[#666666] text-[12px] leading-[24px] mt-[32px]", children: [
        "Este mensaje iba dirigido a JG Servicios Industriales.Si no esperabas este mensaje, puede ignorar este mensaje.",
        /* @__PURE__ */ jsx("strong", { children: "Este correo electrónico es un mensaje automático, no respondas" }),
        "."
      ] })
    ] }) }) })
  ] });
};

const resend = new Resend("re_KXLPAobK_KeC435MS3s8DMo6mgy4cBPSC");
const POST = async ({
  params,
  request
}) => {
  try {
    const formData = await request.json();
    const { senderName, senderEmail, senderSubject, senderPhone, senderMessage } = formData;
    if (!senderName || !senderEmail || !senderSubject || !senderMessage) {
      return Response.json({ error: "All field are required" }, { status: 400 });
    }
    const { data, error } = await resend.emails.send({
      from: "Your Company <onboarding@resend.dev>",
      to: "carlos.gallagav@gmail.com",
      subject: senderSubject,
      replyTo: senderEmail,
      react: newMessage({
        senderName,
        senderEmail,
        senderSubject,
        senderMessage,
        senderPhone
      })
      // text: `Name: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\n\nMessage:\n${senderMessage}`,
    });
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
