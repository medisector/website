import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Unterstützende Begleitung",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-unterstuetzung-begleitung.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-unterstuetzende-begleitung.png"
      />
      <PageTitle title="Weil Energie nicht grenzenlos ist" />
      <PageText>
        Weil man manchmal jemanden an seiner Seite braucht, sind wir, unabhängig von Ihrem Alter,
        in schwierigen Lebensphasen für Sie da. Mit unserem Angebot ‘Unterstützende Begleitung‘
        helfen wir Ihnen zum Beispiel dann, wenn Sie oder eines Ihrer Familienmitglieder erkrankt sind.
        Oder sind Sie durch einen Unfall in Ihrer Bewegung eingeschränkt? Auch wenn Sie durch Ihre
        Schwangerschaft dem Alltag zurzeit nicht gewachsen sind, sind wir für Sie da. Wir lassen
        Sie nicht alleine! Unsere Haushaltshilfe unterstützt Sie zunächst für 1 bis 4 Wochen. Bei Bedarf erfolgt eine Verlängerung.
      </PageText>
    </>
  );
};

export default Page;