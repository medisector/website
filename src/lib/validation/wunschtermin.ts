import { z } from "zod";

export const wunschterminSchema = z.object({
  firma: z.string().optional(),
  anrede: z.string().optional(),
  titel: z.string().optional(),
  vorname: z.string().min(1, "Vorname ist erforderlich"),
  nachname: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  telefon: z.string().min(1, 'Telefonnummer ist erforderlich'),
  versicherungsstatus: z.string().min(1, 'Versicherungsstatus ist erforderlich'),
  betreff: z.string().min(1, "Betreff ist erforderlich"),
  nachricht: z.string().min(5, "Nachricht ist zu kurz"),
  transport: z.string().optional(),
  art: z.string().optional(),
  zieladresse: z.string().optional(),
  tag: z.string().optional(),
  zeitraum: z.string().optional(),
  leistungsbeschreibung: z.string().optional(),
});

export type WunschterminFormData = z.infer<typeof wunschterminSchema>;