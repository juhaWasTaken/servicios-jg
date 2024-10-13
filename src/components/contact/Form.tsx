import { z } from 'zod';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import form from '@/assets/images/form.webp';

const schema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    subject: z.string().min(5, "Asunto debe tener al menos 5 caracteres"),
    phone: z.string().length(10, "Número de teléfono debe tener 10 dígitos"),
    message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres"),
});

type FormFields = z.infer<typeof schema>;

export const ContactForm = () => {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm<FormFields>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const response = await fetch('/api/sendEmail.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderName: data.name,
                    senderEmail: data.email,
                    senderSubject: data.subject,
                    senderPhone: data.phone,
                    senderMessage: data.message,
                }),
            });

            if (response.ok) {
                toast.success('Mensaje enviado correctamente');
                reset();
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Error al enviar correo');
            }

        } catch (error) {
            toast.error('Se ha producido un error al enviar el formulario');
            console.error(error);
        }
    }


    return (
        <section className="flex pb-20">
            <section className="flex flex-col md:flex-row justify-center gap-5 items-start px-5 mt-20 overflow-hidden max-w-7xl mx-auto">
                <section className="md:w-1/2 ">
                    <div className="mb-5">
                        <p className="uppercase text-blueMain font-bold text-sm mb-3">Estamos a minutos de conocernos</p>
                        <h2 className="font-bold text-blueDarker text-[28px] lg:text-4xl mb-4">Enviar un mensaje </h2>
                        <p className="text-blueLight text-sm sm:text-[17px] ">Mándanos un correo y empecemos a ver los detalles de tu proyectos para poder hacerlo realidad.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 w-full">
                            <div className="flex flex-col">
                                <label>Nombre</label>
                                <input {...register('name')} type="text" className="p-3 border border-[#eeeeee] w-full" placeholder="Nombre" />
                                {errors.name && <span className="text-errorRed mt-2 text-sm">{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-col">
                                <label>Asunto</label>
                                <input {...register('subject')} type="text" className="p-3 border border-[#eeeeee] w-full" placeholder="Asunto" />
                                {errors.subject && <span className="text-errorRed mt-2 text-sm">{errors.subject.message}</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 w-full">
                            <div className="flex flex-col">
                                <label>Correo</label>
                                <input {...register('email')} type="email" className="p-3 border border-[#eeeeee] w-full" placeholder="Correo" />
                                {errors.email && <span className="text-errorRed mt-2 text-sm">{errors.email.message}</span>}
                            </div>
                            <div className="flex flex-col">
                                <label>Teléfono</label>
                                <input {...register('phone')} type="text" className="p-3 border border-[#eeeeee] w-full" placeholder="Teléfono" />
                                {errors.phone && <span className="text-errorRed mt-2 text-sm">{errors.phone.message}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label>Mensaje</label>
                            <textarea {...register('message')} className="p-3 border border-[#eeeeee] w-full" placeholder="Mensaje" rows={4} />
                            {errors.message && <span className="text-errorRed mt-2 text-sm">{errors.message.message}</span>}
                        </div>
                        <button type='submit' className="py-4 px-7 bg-blueMain w-full sm:w-fit mt-5 text-white font-bold hover:bg-black transition-all ease-in delay-25">Enviar Mensaje</button>
                    </form>
                </section>
                <section className="w-full md:w-auto object-center object-cover items-stretch">
                    <div className="relative overflow-hidden group">
                    <img src={form.src} alt="Form" className="relative md:max-h-[547px] md:w-auto max-h-[300px] w-full bg-center object-center object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blueDarker to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-5 ">
                            <p className="text-white text-xl font-bold max-w-[200px]">Ofrecemos las mejores soluciones posibles</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>

    )
}

