import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageText from "@/components/UI/PageText";
import PageTitle from "@/components/UI/PageTitle";
import PageImage from "@/components/UI/PageImage";
import PageTable from "@/components/UI/PageTable";
import SimpleHero from "@/components/UI/SimpleHero";

export const metadata: Metadata = {
  title: "Begleitung zum Arzt",
};

const Page = () => {
  return (
    <>
      <PageNavigation navId="unterstuetzung" />
      <SimpleHero
        alt="Unterstützung"
        src="/images/bilder/destop/medisector-begleitung-zum-arzt.png"
        srcMobile="/images/bilder/mobil/medisector-mobil-begleitung-zum-arzt.png"
      />
      <PageTitle title="Es ist nicht nur die Fahrt zu Ihrer Praxis" />
      <PageText>
        Haben Sie lange auf Ihren Arzttermin warten müssen? Beim nächsten Mal sprechen Sie uns
        einfach an. Wir können Sie bei der Vereinbarung eines zeitnahen Termins unterstützen. Wir
        fahren Sie pünktlich zur Praxis und begleiten Sie auf Wunsch während des gesamten Arztbesuchs. Ein Behandlungs-Protokoll, das als Nachweis für die Inanspruchnahme von Leistungen oder als Dokumentation der Begleitung dient, werden wir für Sie führen. Dies kann auch
        für Angehörige oder Pflegepersonal hilfreich sein. Ihr Rezept bringen wir Ihnen gerne nach
        Hause.
      </PageText>
      <PageText>
        Ab Pflegegrad 1 übernimmt Ihre Pflegekasse einen monatlichen Entlastungsbeitrag, den Sie
        für (nicht medizinisch) begleitete Arztbesuche einsetzen können. Wir helfen Ihnen bei der Beantragung.
      </PageText>
      <PageText className="font-bold">
        Wir nehmen uns sehr gerne Zeit für Sie.
      </PageText>
    </>
  );
};

export default Page;