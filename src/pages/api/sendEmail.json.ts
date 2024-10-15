
export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend";
import newMessage from "@/emails/new-message";

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({
    params, request }) => {

    try {
        const formData = await request.json()
        const { senderName, senderEmail, senderSubject, senderPhone, senderMessage } = formData
        if (!senderName || !senderEmail || !senderSubject || !senderMessage) {
            return Response.json({ error: 'All field are required' }, { status: 400 })
        }
        const {data, error} = await resend.emails.send({
            from: 'Your Company <onboarding@resend.dev>',
            to: 'carlos.gallagav@gmail.com',
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
        })

        if (error) {
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }

}