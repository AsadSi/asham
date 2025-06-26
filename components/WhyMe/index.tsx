"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHandRock, FaHeart, FaUsers, FaBalanceScale, FaFlag, FaQuoteLeft } from "react-icons/fa";
import heroImage from "public/images/hero/Design-uden-navn-22.png";

const WhyMe = () => {
  const motivations = [
    {
      icon: FaHeart,
      title: "Mangfoldighed",
      description: "Danmark skal omfavne forskelligheder som en styrke",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: FaBalanceScale,
      title: "Retfærdighed",
      description: "Kamp mod etnisk profilering og diskrimination",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FaUsers,
      title: "Fællesskab",
      description: "Stemme for dem der bliver tiet ihjel",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaFlag,
      title: "Forandring",
      description: "Et mere accepterende Danmark for alle",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-24 xl:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full text-green-700 dark:text-green-300 font-medium mb-6">
            <FaHandRock className="text-sm" />
            <span>Min Mission</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Derfor Stiller Jeg <span className="text-green-600 dark:text-green-400">Op</span>
          </h1>

          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Min rejse fra personlig oplevelse til politisk engagement -
            <span className="font-semibold text-green-700 dark:text-green-400"> en kamp for retfærdighed og mangfoldighed</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl opacity-20" />
              <div className="relative z-10">
                <p className="text-xl font-medium leading-relaxed mb-4">
                  "Nok er nok – det er slut med at dukke nakken. Nu tager jeg kampen op for et mere accepterende Danmark."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-lg">AN</span>
                  </div>
                  <div>
                    <p className="font-semibold">Asham Nadeem</p>
                    <p className="text-sm opacity-90">Kandidat, Frie Grønne</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Sections */}
            <div className="space-y-6">
              {[
                {
                  title: "Gnisten Tændes",
                  content: "Vi har været vidne til Dansk Folkeparti længe, men efter Rasmus Paludan og Nye Borgerlig kom på banen med deres fremmedhadske retorik, tændtes der en gnist i mig. Det blev klart for mig, at det også er mit ansvar at hive Danmark tilbage til et land, der accepterer og omfavner forskelligheder."
                },
                {
                  title: "Følelsen af Fremmedhed",
                  content: "Forestil jer at være født og opvokset i sit eget land men stadig gå rundt med følelsen af at være en alien. Den følelse havde jeg som ung, og det er ikke noget, jeg ønsker at de yngre generationer skal opleve. Tværtimod skal de se mangfoldighed som en berigelse."
                },
                {
                  title: "Vendepunktet",
                  content: "Mit politiske engagement tog en ny drejning efter en oplevelse foran den israelske ambassade. Jeg blev ulovligt tilbageholdt af politiet - en klar sag om etnisk profilering. Denne uretfærdige behandling og de efterfølgende hadebeskeder gjorde det klart: Nu er det nok."
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{section.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual & Motivations Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700">
              <Image
                src={heroImage}
                alt="Asham Nadeem - Derfor stiller jeg op"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-lg mb-2">Stemmen for de Tavse</p>
                <p className="text-sm opacity-90">Folketingskandidat 2025</p>
              </div>
            </div>

            {/* Motivations Grid */}
            <div className="grid grid-cols-2 gap-4">
              {motivations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className="text-white text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Bliv En Del af Forandringen</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sammen kan vi skabe et Danmark, hvor alle føler sig hjemme og værdsat.
                Din støtte gør en forskel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Støt Kampagnen
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Læs Mere
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
