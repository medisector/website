import { NextResponse } from "next/server";
import { SendSmtpEmail, TransactionalEmailsApi } from "@getbrevo/brevo";
import { FormData } from "@/app/kontakt/wunschtermin/page";
import { wunschterminSchema } from "@/lib/validation/wunschtermin";

export async function POST(req: Request) {
  try {

    const json = await req.json();

    const parsed = wunschterminSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Ungültige Formulardaten",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const formData = parsed.data;

    const token = process.env.BREVO_API;
    if (!token) {
      return NextResponse.json(
        { error: "BREVO_API Token nicht gefunden" },
        { status: 500 }
      );
    }


    const emailAPI = new TransactionalEmailsApi();
    (emailAPI as any).authentications.apiKey.apiKey = token;

    const emailContent = `
      <h2>Kontaktformular – Wunschtermin</h2>

      <h3>Persönliche Daten</h3>
      <p>
        <strong>Anrede:</strong> ${formData.anrede}<br/>
        <strong>Titel:</strong> ${formData.titel}<br/>
        <strong>Name:</strong> ${formData.vorname} ${formData.nachname}<br/>
        <strong>Firma:</strong> ${formData.firma}<br/>
        <strong>E-Mail:</strong> ${formData.email}<br/>
        <strong>Telefon:</strong> ${formData.telefon}<br/>
        <strong>Versicherungsstatus:</strong> ${formData.versicherungsstatus}
      </p>

      <h3>Anfrage</h3>
      <p>
        <strong>Betreff:</strong> ${formData.betreff}<br/>
        <strong>Transport:</strong> ${formData.transport}<br/>
        <strong>Art:</strong> ${formData.art}<br/>
        <strong>Zieladresse:</strong> ${formData.zieladresse}<br/>
        <strong>Datum:</strong> ${formData.tag}<br/>
        <strong>Zeitraum:</strong> ${formData.zeitraum}
      </p>

      <h3>Leistungsbeschreibung</h3>
      <p>${formData.leistungsbeschreibung}</p>

      <h3>Nachricht</h3>
      <p>${formData.nachricht}</p>
    `;

    const message = new SendSmtpEmail();
    message.subject = `Kontakt – Wunschtermin (${formData.vorname} ${formData.nachname})`;
    message.htmlContent = emailContent;
    message.sender = {
      name: process.env.BREVO_SENDER_NAME || "Website Kontaktformular",
      email: process.env.BREVO_SENDER_MAIL!,
    };
    message.to = [
      {
        email: process.env.BREVO_TO_MAIL!,
        name: "Kontakt",
      },
    ];
    message.replyTo = {
      email: formData.email,
      name: `${formData.vorname} ${formData.nachname}`,
    };

    await emailAPI.sendTransacEmail(message);

    return NextResponse.json(
      { success: true, message: "Nachricht erfolgreich gesendet" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Brevo Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Senden der Nachricht" },
      { status: 500 }
    );
  }
}