import Link from "next/link";

import { Metadata } from "next";
import PageNavigation from "@/components/PageNavigation";

export const metadata: Metadata = {
  title: "Error Page | Free Next.js Page for Startup and SaaS",
  description: "This is Error Page for Startup Nextjs Page",
  // other metadata
};

const ErrorPage = () => {
  return (
    <>
      <PageNavigation navId="home" descriptionMenu={true} />
      <section className="relative z-10 pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <div className="text-logo mx-auto mb-4 text-center text-8xl font-bold">
                  404
                </div>
                <h3 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                  Die Seite konnte nicht gefunden werden
                </h3>
                <p className="text-body-color mb-10 text-base leading-relaxed sm:text-lg sm:leading-relaxed">
                  Die Seite die du suchst, existiert nicht, wurde verschoben
                  oder gelöscht.
                </p>
                <Link
                  href="/"
                  className="bg-primary shadow-signUp hover:text-primary rounded-md px-8 py-3 text-base font-bold text-white duration-300 hover:bg-white md:px-9 lg:px-8 xl:px-9"
                >
                  Zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] hidden sm:block"></div>
      </section>
    </>
  );
};

export default ErrorPage;
