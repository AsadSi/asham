"use client";
import Image from "next/image";
import heroImage from "public/images/hero/Design-uden-navn-22.png";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const NextElectionMessage = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-green-50 dark:bg-gray-900">
      <div className="mx-auto max-w-c-1390 px-6 md:px-10 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-28">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-4xl font-extrabold text-green-800 dark:text-green-400 xl:text-5xl">
              Næste Folketingsvalg - Slut med at dukke nakken
            </h1>
            <p className="mb-6 text-lg text-green-700 dark:text-green-300 leading-relaxed max-w-lg whitespace-pre-line">
              {`Vi har været vidne til Dansk Folkeparti længe, men efter Rasmus Paludan og Nye Borgerlig kom på banen med deres fremmedhadske retorik, tændtes der en gnist i mig, der gjorde det klart for mig, at det også er mit ansvar at hive Danmark tilbage til et land, der accepterer og omfavner forskelligheder og mangfoldighed.`}
            </p>

            <button className="mb-5 px-6 py-2 bg-green-800 text-white font-semibold rounded hover:bg-green-700 transition">
              Læs mere
            </button>
          </div>

          <div className="animate_right hidden md:block md:w-1/2">
            <div className="relative 2xl:-mr-7.5 w-full h-[420px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt="Næste Folketingsvalg"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextElectionMessage;
