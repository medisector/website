import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import Hero from "@/components/Hero";


export const metadata: Metadata = {
    title: "Jobs",
};

const Jobs = () => {
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

            <PageTitle title={"Wir brauchen Verstärkung"} />
            <PageText>
                Unser Team freut sich auf Ihre Bewerbung!
                <br />
                Wir sind ein junges und dynamisches Unternehmen im Rheinland mit
                Firmensitz in Euskirchen. Wir führen qualifizierte Krankentransfere im
                In-/ und Ausland durch, bieten Unterstützung im Alltag und begleiten
                Menschen in schwierigen Lebenssituationen. Unsere Mitarbeiter liegen uns
                besonders am Herzen. Möchten Sie uns kennenlernen oder haben Sie Fragen?
                Dann senden Sie uns einfach eine E-Mail oder rufen Sie uns an.
            </PageText>

            <PageText>
                <b>MediSector Ana Maria Frühauf und Sidney Frühauf</b><br />
                Office Park Euskirchen<br />
                Thomas-Eßer-Straße 86<br />
                53879 Euskirchen
            </PageText>
        </>
    );
};

export default Jobs;
