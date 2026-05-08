import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Notfallreinigung",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-notfallreinigung.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-notfallreinigung.png"
      />
      <PageTitle title="Manchmal gerät eben einfach alles aus dem Ruder" />
      <PageText>
        Sind Ihnen Ihre Probleme über den Kopf gewachsen? Waren Ihre Lebensumstände durch gesundheitliche, finanzielle oder psychische Belastungen zu massiv? Sind Sie den Herausforderungen des Alltags zurzeit nicht mehr gewachsen und leben zu Hause in einem Chaos?
      </PageText>
      <PageText>
        Wir haben schon viele Wohnungen entrümpelt und gereinigt. Haben Sie keine Scheu, uns anzusprechen. Wir arbeiten gründlich, sehr schnell und diskret.
      </PageText>
    </>
  );
};

export default Page;