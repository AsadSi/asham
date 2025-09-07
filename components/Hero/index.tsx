"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "public/images/hero/Design-uden-navn-22.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-green-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-72 h-72 border border-slate-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-slate-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-slate-200 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Kandidat til kommunalvalget 2025
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Asham
                <span className="block text-green-600">Agha Nadeem</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-m text-slate-500 leading-relaxed max-w-lg"
            >
              Jeg brænder for at skabe en by, hvor københavner får bedre muligheder, og hvor fællesskab og lighed er i centrum. Til daglig arbejder jeg i NGO’en Turning Tables, jeg har stiftet organisationen Danish Youth in Action og står bag podcasten Gadens Parlament. Tidligere var jeg spidskandidat til folketingsvalget, hvor jeg sammen med mit hold skabte en af de mest succesfulde kampagner for Frie Grønne.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('support')}
                className="group px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Støt Min Kampagne
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-green-300 text-green-700 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300"
              >
                Læs Mere
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl transform rotate-3"></div>

              {/* Main Image */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Asham Agha Nadeem - Kandidat"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
