import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 2000;
const MAX_SUBJECT_LENGTH = 200;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` }, { status: 400 });
    }

    if (subject.length > MAX_SUBJECT_LENGTH) {
      return NextResponse.json({ error: `Subject must be under ${MAX_SUBJECT_LENGTH} characters.` }, { status: 400 });
    }

    /**
     * TODO: Add your email sending logic here.
     *
     * Recommended: Resend (https://resend.com)
     *   npm install resend
     *
     *   import { Resend } from "resend";
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({
     *     from: "contact@morsecodeworld.org",
     *     to: "your@email.com",
     *     subject: `[Contact] ${subject}`,
     *     text: `From: ${name} <${email}>\n\n${message}`,
     *   });
     *
     * Alternatives: SendGrid, Nodemailer + SMTP, AWS SES
     */

    console.info("[contact]", {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      messageLength: message.trim().length,
      ts: new Date().toISOString()
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "An unexpected error occurred. Please try again." }, { status: 500 });
  }
}
