import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Beratungsstelle gem. § 37 Abs. 3",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="ueber_uns" />
      <SimpleHero
        alt="Beratungsstelle"
        src="/images/bilder/destop/medisector-beratungsstelle.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-beratungsstelle.png"
      />
      <PageTitle title="Gemeinsam Wege finden" />
      <PageText>
        Eine körperliche oder psychische Erkrankung oder eine eingeschränkte Leistungsfähigkeit
        im Alter, erfordern neben der gesundheitlichen Unterstützung auch Hilfe bei der Bewältigung
        sozialer Anforderungen. Wir sind mit unserer Erfahrung an Ihrer Seite.
      </PageText>
      <PageText leadingText="Beratung und Pflegefachliche Kompetenz">
        Wir bieten qualifizierte Beratung für Pflegebedürftige und deren Angehörige, um die bestmögliche Versorgung sicherzustellen.
      </PageText>
      <PageText leadingText="Unsere Beratungsstelle ist anerkannt für pflegefachliche Kompetenz gemäß § 37 Abs. 7 SGB XI. Zusätzlich sind wir als Betreuungskraft gemäß §§ 43b und 53b SGB XI anerkannt.">
        Unsere Arbeit wurde durch das Ministerium für Arbeit, Gesundheit und Soziales des Landes
        Nordrhein-Westfalen (PfAD.uia NRW) anerkannt.
      </PageText>
      <PageText>
        Wer die Pflege und Betreuung durch Angehörige oder Freunde im eigenen Haus selbst organisiert und dafür Pflegegeld bezieht, ist verpflichtet nach §37 Abs. 3 SGB XI (Pflegeversicherung) regelmäßig einen Beratungsbesuch, oder auch Qualitätssicherungsbesuch genannt,
        von einem dafür zugelassendem Unternehmen wahrzunehmen. Der Beratungsbesuch in der
        eigenen Häuslichkeit dient der Sicherstellung der Qualität der häuslichen Pflege und der regelmäßigen Hilfestellung und praktischen pflegefachlichen Unterstützung der häuslichen
        Pflegenden. Wird der Beratungstermin nicht regelmäßig wahrgenommen, hat die Pflegekasse das Recht das Pflegegeld zu kürzen oder zu streichen.
      </PageText>
      <PageTable
        headers={["Pflegegrad", "Beratungseinsatz"]}
        rows={[
          ["Pflegegrad 1", "Nicht verpflichtend"],
          ["Pflegegrad 2", "1 x pro Halbjahr"],
          ["Pflegegrad 3", "1 x pro Halbjahr"],
          ["Pflegegrad 4", "1 x pro Vierteljahr"],
          ["Pflegegrad 5", "1 x pro Vierteljahr"],
        ]}
      />
      <PageText>
        MediSector als zugelassener Dienstleister bietet Ihnen diese Beratungsbesuche an.
        Bei Fragen kontaktieren Sie uns gerne. Wir sind für Sie da und beraten Sie unverbindlich,
        auch per Video-Call!
      </PageText>
    </>
  );
};

export default Page;