import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import Hero from "@/components/Hero";
import InlineLink from "@/components/UI/InlineLink";

export const metadata: Metadata = {
    title: "Jobs - Fahrer",
};

const JobsFahrer = () => {
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

            <PageTitle title={"Wir suchen Fahrer*innen für den Taxi- und Mietwagenverkehr | m/w/d"} />

            <PageText leadingText="Sie sind zuverlässig, freundlich und besitzen einen Personenbeförderungsschein?">
                Dann werden Sie Teil unseres Teams!
            </PageText>

            <PageText leadingText="Wir bieten ab sofort:">
                Stellen auf Minijob- oder Teilzeitbasis
            </PageText>

            <PageText leadingText="Voraussetzungen:">
                Führerschein Klasse B + gültiger P-Schein
            </PageText>

            <PageText leadingText="Einsatzgebiet:">
                Euskirchen und Umgebung
            </PageText>

            <PageText leadingText="Zusätzlich suchen wir Fahrer*innen für regelmäßige Fahrten | m/w/d">
                Montag bis Freitag | Früh: 6:00 – 8:45 Uhr | Nachmittag: 15:00 – 17:45 Uhr
                <br />
                Es erwartet Sie eine übertarifliche Bezahlung!
                <br />
                Ideal für Frührentner*innen, Eltern, Studierende oder Nebenjob-Suchende.
            </PageText>

            <PageText>
                Wir bieten ein freundliches und wertschätzendes Arbeitsumfeld.
            </PageText>

            <PageText leadingText="Haben Sie Interesse?">
                <b>Dann wenden Sie sich einfach telefonisch an Herrn Grigori Slinkov:</b>
                <br />
                <b>Telefon: 02251 - 779 40 60</b> oder senden Sie ihre Bewerbung an:
                <br />
                <InlineLink text="Grigori.Slinkov@medi-sector.de" path="mailto:Grigori.Slinkov@medi-sector.de" />
            </PageText>

            <PageText>
                <b>Wir freuen uns auf Sie!</b>
            </PageText>
        </>
    );
};

export default JobsFahrer;
