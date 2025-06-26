"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaHeart, FaUsers, FaLeaf, FaBalanceScale, FaHandshake } from "react-icons/fa";
import heroImage from "public/images/hero/Design-uden-navn-22.png";

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Uddannelse",
      description: "Bachelor i Innovation & Entreprenørskab",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FaUsers,
      title: "Erfaring",
      description: "Politisk aktiv siden 2020",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaHeart,
      title: "Værdier",
      description: "Retfærdighed & Principper",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: FaLeaf,
      title: "Fokus",
      description: "Klima & Menneskerettigheder",
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-24 xl:py-32 bg-gradient-to-br from-white via-gray-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
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
            <FaUsers className="text-sm" />
            <span>Lær Mig At Kende</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Om <span className="text-green-600 dark:text-green-400">Asham Nadeem</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700">
              <Image
                src={heroImage}
                alt="Asham Nadeem - Om mig"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
            </div>

            {/* Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaBalanceScale className="text-green-600 text-xl" />
                <span className="font-semibold text-gray-900 dark:text-white">Min Mission</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                "At stå op for menneskets rettigheder og bevare vores planet"
              </p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FaHeart className="text-red-500" />
                Min Baggrund
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900 dark:text-white">Jeg har altid haft interesse for politik siden lille.</span>
                  Mit navn er Asham Nadeem, jeg er en 25-årig dansker med etnisk baggrund fra Pakistan,
                  og til hverdag bor jeg sammen med min familie på Nørrebro.
                </p>
                
                <p>
                  Jeg kommer fra en politisk familie - min far var aktivist i Pakistan og kom til Danmark som politisk flygtning.
                  <span className="font-semibold text-green-700 dark:text-green-400"> Derfor har de politiske spilleregler altid været mig bekendt.</span>
                </p>
                
                <p>
                  Min uddannelsesmæssige baggrund inkluderer en bachelorgrad i innovation og entreprenørskab,
                  samt kundskaber inden for markedsføringsøkonomi.
                </p>
              </div>
            </div>

            {/* Political Journey */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-100 dark:border-green-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FaHandshake className="text-green-600" />
                Politisk Rejse
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="font-semibold text-green-800 dark:text-green-200">
                  Jeg tilsluttede mig Sikandar og Frie Grønne op til partiets lancering i 2020.
                  Min motivation var og er den ændring i den politiske diskurs om udlændinge, som vi har oplevet i Danmark.
                </p>
                
                <p>
                  På det personlige plan vil I møde et individ der går op i retfærdighed og principper.
                  Jeg er samarbejdsvillig og altid klar til at give en hjælpende hånd, men der er grundprincipper,
                  jeg ikke kan gå på kompromis med - især når det gælder menneskets rettigheder og klimaet.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className="text-white text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
