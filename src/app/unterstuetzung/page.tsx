import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Unterstützung im Alltag",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-unterstuetzung-im-alltag.png" // TODO: Missing image
        srcMobile="/images/bilder/mobil/medisector-mobil-unterstuetzung-im-alltag.png"
      />
      <PageTitle title="Damit das Lächeln bleibt" />
      <PageText>
        Mit zunehmendem Alter erfordert das Leben immer mehr Unterstützung bei alltäglichen Aufgaben. Diese Unterstützung möchten wir Ihnen gerne anbieten. Mit unserer privaten Pflegeberatung nach §37 Abs. 3 erfassen wir Ihren Pflegebedarf und stellen für Sie den Antrag bei
        Ihrer Pflegekasse. Ab Pflegegrad 1 übernimmt die Pflegekasse monatlich einen Entlastungsbeitrag.<br />
        Zu unseren Tätigkeiten gehören die vielfältigen Hilfen im Pflegealltag, die Haushaltsreinigung, die Erledigung von Einkaufsfahrten, die Begleitung zur Arztpraxis sowie zu Behörden oder zu individuellen Terminen. Der Bedeutung von Spaziergängen, Bewegungsübungen und Gedächtnistraining kommen wir verantwortungsvoll nach und bieten Ihnen auch gemeinsame Tätigkeiten wie Kochen, Backen, Malen und Basteln an.
      </PageText>
    </>
  );
};

export default Page;