import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Wunschfahrt",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ehrenamt" />
      <SimpleHero
        alt="Ehrenamt"
        src="/images/bilder/destop/medisector-wunschfahrt.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-wunschfahrt.png"
      />
      <PageTitle title="Noch einmal an Ihrem Lieblingsort sein" />
      <PageText>
        Wir möchten schwerstkranken Menschen in ihrer letzten Lebensphase gerne einen besonderen Wunsch erfüllen. Wir fahren Sie an den Ort Ihrer schönsten Erinnerung. Atmen Sie
        noch einmal die frische Seeluft ein oder genießen Sie noch einmal den Blick auf ein geliebtes
        Bergpanorama. Wohin Sie auch möchten, es ist unser Ziel, es für Sie wahr werden zu lassen.
      </PageText>
      <PageText>
        Wir fahren Sie entsprechend Ihres Gesundheitszustands und begleiten Sie mit Fürsorge und
        Fachkompetenz. Wichtig dabei ist, dass Sie transportfähig sind.
      </PageText>
      <PageText>
        Wir freuen uns auf Ihre Anfrage!
      </PageText>
      <PageText>
        Ihr MediSector-Team mit Herz
      </PageText>
    </>
  );
};

export default Page;