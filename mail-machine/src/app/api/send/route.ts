import { Resend } from "resend";
import { EmailTemplate } from "@/components/mail-template";
import { NextResponse } from "next/server";

const resend = new Resend('re_FGnFJ74b_4kc5va4TnP2a7i1dwTebffmL');

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to:['mpabloeze@gmail.com'],
            subject: 'Hola desde jujuy barroco',
            react: EmailTemplate({firstName:'Pablo'}),
            text: ''
        })
        console.log(data);
        return NextResponse.json({message: 'Email enviado'},{
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: 'Error'}, {
            status:404
        })       
    }
}