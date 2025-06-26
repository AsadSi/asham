"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import heroImage from "public/images/hero/Design-uden-navn-22.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-c-1390 px-6 md:px-10 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-28">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full text-green-700 dark:text-green-300 font-medium mb-6"
            >
              <FaMapMarkerAlt className="text-sm" />
              <span>Nørrebro, København</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white xl:text-6xl leading-tight"
            >
              <span className="text-green-600 dark:text-green-400">Asham</span> Nadeem
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-700 dark:text-blue-300 font-medium text-sm mb-4">
                <FaCalendarAlt className="text-xs" />
                <span>25 år • Dansk-Pakistansk</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              Mit navn er Asham Nadeem, jeg er en 25-årig dansker med etnisk baggrund der stammer fra Pakistan.
              Til hverdag bor jeg sammen med min familie på Nørrebro, hvor jeg kæmper for
              <span className="font-semibold text-green-700 dark:text-green-400"> positive forandringer i lokalsamfundet</span>.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>Støt Min Kampagne</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 transition-all duration-300 hover:border-green-300 dark:hover:border-green-500">
                  <span>Læs Mere</span>
                </button>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Følg Kampagnen
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-600", bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20" },
                  { icon: FaInstagram, href: "https://instagram.com", color: "hover:text-pink-600", bg: "hover:bg-pink-50 dark:hover:bg-pink-900/20" },
                  { icon: FaTwitter, href: "https://twitter.com", color: "hover:text-blue-400", bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20" },
                  { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:text-blue-700", bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={`Follow on ${social.icon.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} ${social.bg} transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700">
                <Image
                  src={heroImage}
                  alt="Asham Nadeem - Kandidat"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="rounded-3xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">25</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">År</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Erfaring</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Nørrebro</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">København</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
