import PageNavigation from "@/components/PageNavigation";
import { Metadata } from "next";
import PageTitle from "@/components/UI/PageTitle";
import PageText from "@/components/UI/PageText";
import VideoPlayer from "@/components/UI/VideoPlayer";

export const metadata: Metadata = {
    title: "Mit Herz",
};

const MitHerz = () => {
    return (
        <>
            <PageNavigation navId="mit_herz" />
            <div className="-mx-6 mb-4 border-b-3 border-white lg:mx-0 lg:mb-8 lg:mt-12 lg:border-none">
                <VideoPlayer
                    src="/videos/imagefilm.mp4"
                    poster="/images/bilder/destop/medisector-kontakt.png"
                    posterMobile="/images/bilder/mobil/medisector-mobil-kontakt.png"
                />
            </div>

            <PageTitle title="Nehmen Sie sich einen Augenblick Zeit und lernen Sie uns und unser Leistungsspektrum kennen" />
            <PageText>
                Es gibt Momente im Leben, in denen man sich einfach jemanden an seiner Seite wünscht.
                Jemanden, der versteht, unterstützt und da ist ohne zu fragen. Genau das sind wir.
                Erfahren Sie hier, was uns ausmacht und was uns antreibt, denn für uns zählt jeder Mensch.
            </PageText>
        </>
    );
};

export default MitHerz;
