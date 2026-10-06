"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
    status: "idle" | "success" | "error";
    message: string;
    fields?: { name: string; email: string; message: string };
};

export async function sendMessage(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const honeypot = formData.get("website");
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
        return { status: "success", message: "Thanks! Your message was sent." };
    }

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string"

    ) {
        return { status: "error", message: "Something went wrong. Please try again." };
    }
    const fields = { name, email, message };

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
        return { status: "error", message: "Please fill in all fields.", fields };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        return { status: "error", message: "Please enter a valid email address.", fields };
    }
    if (cleanName.length > 100 || cleanMessage.length > 5000) {
        return { status: "error", message: "Your message is too long.", fields };
    }

    const to = process.env.CONTACT_TO;
    if (!to) {
        console.error("CONTACT_TO is not set");
        return { status: "error", message: "Something went wrong. Please try again.", fields };
    }

    const { error } = await resend.emails.send({
        from: "Marinos <onboarding@resend.dev>",
        to,
        replyTo: cleanEmail,
        subject: `New message from ${cleanName.replace(/[\r\n]+/g, " ")}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
    });

    if (error) {
        console.error("Email failed:", error);
        return {
            status: "error",
            message: "We couldn't send your message. Please try again later.", fields,
        };
    }

    return { status: "success", message: "Thanks! Your message was sent." };
}