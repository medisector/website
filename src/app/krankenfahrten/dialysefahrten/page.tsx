import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Dialysefahrten",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="krankenfahrten" />
      <SimpleHero
        alt="Krankentransfer"
        src="/images/bilder/destop/medisector-dialysefahrten.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-dialysefahrten.png"
      />
      <PageTitle title="Regelmäßige Fahrten zur Dialysebehandlung" />
      <PageText>
        Tagtäglich fahren wir viele Patienten zur Dialyse - wir sind Ihr zuverlässiger Partner. Unabhängig, ob Sie auf der Suche nach einer vorübergehenden Beförderungslösung sind, oder einen langfristigen Partner für Ihre Dialysefahrten möchten. Wir kümmern uns um Sie. Wir bieten Ihnen eine kompetente und qualifizierte Patientenbeförderung an.
        Wir stellen sicher, dass Sie Ihre Dialysetermine pünktlich einhalten. Ebenso sorgen wir dafür,
        dass Sie nach der Dialyse ohne Wartezeit wieder rasch nach Hause kommen.
      </PageText>
    </>
  );
};

export default Page;