import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Verlegefahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-verlegefahrten.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-verlegefahrten.png"
      />
      <PageTitle title="Verlegefahrten mit MediSector" />
      <PageText>
        Ein Krankenhauswechsel muss und kann nicht immer vom Rettungsdienst übernommen werden. Bei einem Wechsel der Einrichtung bieten wir mit unserem medizinischen Fachpersonal
        einen idealen Service, der individuell zum Patienten und seinem Gesundheitszustand passt.
        Zusätzlich bieten wir Krankenhäusern, Seniorenheimen und Krankenkassen auch Unterstützung bei der Planung von Kranken- und Verlegefahrten an.
      </PageText>
      <PageText>
        Mit unserer Erfahrung und unserem Team sind wir ein perfekter Partner für jedes Krankenhaus, jedes Seniorenheim und alle gesetzlichen und privaten Krankenversicherungen.
      </PageText>
    </>
  );
};

export default Page;