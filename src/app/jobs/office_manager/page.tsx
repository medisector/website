import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import Hero from "@/components/Hero";
import InlineLink from "@/components/UI/InlineLink";

export const metadata: Metadata = {
    title: "Jobs - Office Managerin",
};

const JobsOfficeManager = () => {
    return (
        <>
            <PageNavigation navId="jobs" />
            <Hero
                images={[
                    {
                        src: "/images/bilder/destop/medisector-jobs-karriere.png",
                        srcMobile: "/images/bilder/mobil/medisector-mobil-jobs-karriere.png",
                        alt: "Jobs und Karriere",
                    },
                ]}
                classNames="border-black border-[0.8pt]"
            />

            <PageTitle title={"Office Managerin | m/w/d"} />

            <PageText>
                <b>Standort:</b> Euskirchen<br />
                <b>Arbeitszeit:</b> Teilzeit oder Vollzeit (nach Absprache)<br />
                <b>Eintritt:</b> ab 01. März oder ab 01. April 2026<br />
                <b>Enge Zusammenarbeit mit den Geschäftsführerinnen</b>
            </PageText>

            <PageText>
                MediSector ist ein inhabergeführtes Dienstleistungsunternehmen mit Sitz in Euskirchen, das in mehreren Service- und Organisationsbereichen tätig ist. Wir arbeiten eng mit öffentlichen Stellen, Partnern und Privatkunden zusammen und legen großen Wert auf Verlässlichkeit, Struktur und professionelle Abläufe.
            </PageText>

            <PageText>
                Aktuell befinden wir uns in einer Wachstums- und Expansionsphase. Um diese Entwicklung erfolgreich weiterzuführen, bauen wir unsere internen Strukturen gezielt aus und suchen eine erfahrene Office Managerin, die den Büroalltag organisiert und die Geschäftsführerinnen aktiv unterstützt.
            </PageText>

            <PageText>
                Bei uns erwartet Sie kein starres Konzernumfeld, sondern ein persönliches, wertschätzendes Arbeitsumfeld mit kurzen Entscheidungswegen, in dem Mitdenken, Eigenverantwortung und Engagement ausdrücklich erwünscht sind.
            </PageText>

            <div className="relative pb-2 text-base leading-relaxed text-black/80 hyphens-auto">
                <span className="block pt-3 pb-2 leading-6 font-bold">
                    Ihre Aufgaben
                    <br />
                </span>
                <ul className="list-disc pl-5">
                    <li>Eigenständige Organisation und Koordination des gesamten Büroalltags</li>
                    <li>Professionelle Steuerung der Telefon- und E-Mail-Kommunikation</li>
                    <li>Terminplanung, -koordination und -vorbereitung für die Geschäftsführerinnen</li>
                    <li>Enge Zusammenarbeit mit den Geschäftsführerinnen bei organisatorischen und administrativen Themen</li>
                    <li>Vor- und Nachbereitung von Meetings und Terminen</li>
                    <li>Koordination interner und externer Ansprechpartner</li>
                    <li>Organisation und Buchung von Werbemaßnahmen (z.B. Online- und Printanzeigen)</li>
                    <li>Nachverfolgung von Aufgaben, Fristen und Wiedervorlagen</li>
                    <li>Strukturierung von Abläufen sowie Optimierung interner Prozesse</li>
                    <li>Allgemeine Büroorganisation und administrative Tätigkeiten</li>
                </ul>
            </div>

            <div className="relative pb-2 text-base leading-relaxed text-black/80 hyphens-auto">
                <span className="block pt-3 pb-2 leading-6 font-bold">
                    Ihr Profil
                    <br />
                </span>
                <ul className="list-disc pl-5">
                    <li>Abgeschlossene kaufmännische Ausbildung oder mehrjährige Berufserfahrung im Office Management, in der Assistenz der Geschäftsführung oder in einer vergleichbaren Position</li>
                    <li>Sehr gute Deutschkenntnisse in Wort und Schrift</li>
                    <li>Souveränes, freundliches und professionelles Auftreten</li>
                    <li>Hohe Organisationsfähigkeit und strukturierte Arbeitsweise</li>
                    <li>Selbstständigkeit, Verantwortungsbewusstsein und Zuverlässigkeit</li>
                    <li>Sicherer Umgang mit MS Office / Google Workspace und digitalen Tools</li>
                    <li>Erfahrung im Termin- und Projektmanagement</li>
                    <li>Diskretion, Loyalität und Vertrauenswürdigkeit</li>
                    <li>Belastbarkeit und Überblick auch in arbeitsintensiven Phasen</li>
                </ul>
            </div>

            <div className="relative pb-2 text-base leading-relaxed text-black/80 hyphens-auto">
                <span className="block pt-3 pb-2 leading-6 font-bold">
                    Wir bieten
                    <br />
                </span>
                <ul className="list-disc pl-5">
                    <li>Eine verantwortungsvolle Position mit direkter Anbindung an die Geschäftsführerinnen</li>
                    <li>Aktive Mitgestaltung in einer Expansionsphase</li>
                    <li>Eigenständiges Arbeiten mit Gestaltungsspielraum</li>
                    <li>Langfristige Perspektive und Entwicklungsmöglichkeiten</li>
                    <li>Flexible Arbeitszeiten (Teilzeit oder Vollzeit)</li>
                    <li>Faire, leistungsgerechte Vergütung</li>
                    <li>Kurze Entscheidungswege und ein wertschätzendes Arbeitsumfeld</li>
                </ul>
            </div>

            <div className="relative pb-2 text-base leading-relaxed text-black/80 hyphens-auto">
                <span className="block pt-3 pb-2 leading-6 font-bold">
                    Ihre Bewerbung
                    <br />
                </span>
                Bitte senden Sie Ihre Bewerbung mit kurzem Lebenslauf per E-Mail an:<br />
                <InlineLink text="Ana.fruehauf@medi-sector.de" path="mailto:Ana.fruehauf@medi-sector.de" />
            </div>

            <PageText>
                <b>Wir freuen uns auf Sie!</b>
            </PageText>

        </>
    );
};

export default JobsOfficeManager;
