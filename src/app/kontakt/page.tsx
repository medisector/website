import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import Link from "next/link";
import Hero from "@/components/Hero";
import PageImage from "@/components/UI/PageImage";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Wir sind für Sie da - Kontaktieren Sie uns",
};

const Kontakt = () => {
    return (
        <>
            <PageNavigation navId="kontakt" />
            <SimpleHero
              alt="Meinungen"
              src="/images/bilder/destop/medisector-kontakt.png"
              srcMobile="/images/bilder/mobil/medisector-mobil-kontakt.png"
            />

            <PageTitle title="Was dürfen wir für Sie tun?" />

            <PageText>
                Schreiben Sie uns gerne einfach eine E-Mail an{" "}
                <a href="mailto:info@medi-sector.de" className="font-bold underline">
                    info@medi-sector.de
                </a>{" "}
                oder nutzen Sie unser{" "}
                <Link href="/kontakt/wunschtermin" className="font-bold underline">
                    Kontaktformular
                </Link>
                .
            </PageText>

            <PageText leadingText="Haben Sie bereits einen detaillierten Leistungswunsch z.B. zu einer Krankenfahrt?">
                Dann kontaktieren Sie uns gerne mit Ihrem{" "}
                <Link href="/kontakt/wunschtermin" className="font-bold underline">
                    Wunschtermin
                </Link>
                . Wir reagieren umgehend mit einer
                zuverlässigen Buchung für Sie. Bei evtl. zeitlichen Überschneidungen vereinbaren wir einen
                alternativen Termin mit Ihnen.
            </PageText>

            <PageText leadingText="Warten Sie schon länger auf einen Arzt- oder Facharzttermin?">
                Auch hier stehen wir an Ihrer Seite und kümmern uns um einen zeitnahen Termin für Sie.
            </PageText>

            <PageText>
                Bei Fragen oder sehr kurzfristigen Terminen rufen Sie uns einfach an
                <br />
                <b>Telefon: 02251 / 779 40 60</b>
            </PageText>

            <PageText leadingText="Ihre Ana Maria Frühauf, Geschäftsführerin">
                Medizinische Fachangestellte (MFA), Rettungssanitäterin, Betreuungskraft
            </PageText>

            <PageText leadingText="Ihre Sidney Frühauf, B.A. Management, Geschäftsführerin">
                Datenschutzbeauftragte, Ausbildungsstelle nach IHK Kauffrau/-mann im
                Gesundheitswesen
            </PageText>
        </>
    );
};

export default Kontakt;
