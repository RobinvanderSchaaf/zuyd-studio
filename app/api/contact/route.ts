import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    analytics: true,
});

export async function POST(req: NextRequest) {
    try {

        //Rate limiting IP
        const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
        const { success } = await ratelimit.limit(ip);

        if (!success) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { name, email, message, honeypot } = body;

        //Honeypot check
        if (honeypot) {
            return NextResponse.json({ success: true });
        }

        //basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        if (!email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email address." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL!,
            to: process.env.CONTACT_TO_EMAIL!,
            subject: `New contact from ${name} - Zuyd Studio `,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #111111;">New Contact Form Submission</h2>
                <hr style="border: none; border-top: 1px solid #E0DDD8;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="background: #F4F0EB; padding: 16px; border-radius: 8px;">${message}</p>
                <hr style="border: none; border-top: 1px solid #E0DDD8;" />
                <p style="color: #888880; font-size: 12px;">Sent from zuydstudio.nl contact form</p>
                </div>            
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}