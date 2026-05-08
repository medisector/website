import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Chemofahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-chemofahrten.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-chemofahrten.png"
      />
      <PageTitle title="Hin- und Rückfahrten zur Chemotherapie" />
      <PageText>
        Wir sind Ihr zuverlässiger Partner für Ihre Bestrahlung oder Chemotherapie und fahren Sie
        pünktlich zu allen Terminen.
        Unabhängig davon, ob Sie auf der Suche nach einer vorübergehenden Beförderungslösung oder einem
        langfristigen Partner sind, bieten wir Ihnen kompetentes und qualifiziertes Personal.
        Wir stellen sicher, dass Sie Ihre Chemotherapie-Termine pünktlich einhalten und auch nach dem Termin sicher
        und schnell wieder nach Hause kommen.
      </PageText>
    </>
  );
};

export default Page;