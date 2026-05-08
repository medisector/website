import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Fahrten zur Tagespflege",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-fahrten-zur-tagespflege.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-fahrten-zur-tagespflege.png"
      />
      <PageTitle title="Fahrten zur Tagespflege" />
      <PageText>
        Der regelmäßige Besuch einer Tagespflegeeinrichtung unterstützt den Erhalt von Selbstständigkeit, sozialen Kontakten und einer klaren Tagesstruktur. Gleichzeitig bedeutet er eine
        spürbare Entlastung für pflegende Angehörige. Damit diese wertvolle Betreuung zuverlässig
        in Anspruch genommen werden kann, übernehmen wir die sichere und termingerechte Beförderung zur Tagespflege und zurück in die häusliche Umgebung.
      </PageText>
      <PageText>
        Unsere Fahrten erfolgen individuell abgestimmt auf den jeweiligen Gesundheitszustand. Je
        nach Bedarf transportieren wir Sie im Rollstuhl, im Tragestuhl oder in liegender Position. Unsere geschulten Mitarbeiter begleiten Sie dabei mit Fachkompetenz, Ruhe und Einfühlungsvermögen.
      </PageText>
      <PageText>
        Eine lückenlose Planung ohne Wartezeiten ist für uns selbstverständlich. Wir rechnen mit allen gesetzlichen und privaten Krankenkassen ab und unterstützen Sie gerne bei Fragen zur
        Kostenübernahme. MediSector – verlässliche Mobilität für eine stabile Alltagsstruktur.
      </PageText>
    </>
  );
};

export default Page;