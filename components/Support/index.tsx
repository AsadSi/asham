"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaMobileAlt, FaCheckCircle, FaHandsHelping, FaUsers } from "react-icons/fa";
import heroImage from "public/images/hero/Design-uden-navn-22.png";

const Support = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 xl:py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full text-green-700 dark:text-green-300 font-medium mb-6">
            <FaHeart className="text-red-500" />
            <span>Støt Kampagnen</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Støt Min <span className="text-green-600 dark:text-green-400">Kampagne</span>
          </h1>

          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Din økonomiske støtte er afgørende for at fortsætte mit arbejde og sprede mit budskab i lokalsamfundet.
            <span className="font-semibold text-green-700 dark:text-green-400"> Hver en krone gør en forskel!</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* MobilePay Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-10 border border-green-100 dark:border-gray-700 transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <FaMobileAlt className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    MobilePay Donation
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">Hurtig og sikker betaling</p>
                </div>
              </div>

              {/* MobilePay Number */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 mb-6">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">MobilePay Nummer</p>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-bold text-green-700 dark:text-green-300 tracking-wider">
                    31 41 11
                  </span>
                  <button
                    onClick={() => navigator.clipboard.writeText('314111')}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Kopier
                  </button>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Vigtigt at huske:</p>
                    <p className="text-amber-700 dark:text-amber-300">
                      Skriv <span className="font-bold">"Asham"</span> i kommentarfeltet for at sikre din donation når frem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Sådan donerer du:</h3>
                {[
                  "Åbn din MobilePay app",
                  "Tryk på 'Send' eller 'Betal'",
                  "Indtast nummeret: 31 41 11",
                  "Indtast dit ønskede beløb",
                  "Skriv 'Asham' i beskedfeltet",
                  "Bekræft din donation"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{step}</p>
                  </div>
                ))}
              </div>

              {/* Thank You Message */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-center">
                <p className="text-white font-semibold text-lg">
                  🙏 Tak for din uvurderlige støtte!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Support Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Why Support Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <FaHandsHelping className="text-3xl text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hvorfor støtte?</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    icon: "🎯",
                    title: "Målrettet Kampagne",
                    desc: "Din støtte hjælper med at nå flere vælgere gennem målrettede kampagner"
                  },
                  {
                    icon: "📢",
                    title: "Stærkere Stemme",
                    desc: "Sammen kan vi skabe større forandring i lokalsamfundet"
                  },
                  {
                    icon: "🤝",
                    title: "Fællesskab",
                    desc: "Bliv en del af bevægelsen for positive forandringer"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center">
                <FaUsers className="text-3xl mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Støtter</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white text-center">
                <FaHeart className="text-3xl mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Transparent</div>
              </div>
            </div>

            {/* Alternative Support */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Andre måder at støtte:</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>• Del kampagnen på sociale medier</p>
                <p>• Fortæl dine venner og familie</p>
                <p>• Deltag i kampagne-events</p>
                <p>• Meld dig som frivillig</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Image - Subtle */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src={heroImage}
          alt="Campaign background"
          fill
          style={{ objectFit: "cover" }}
          className="filter grayscale blur-sm"
        />
      </div>
    </section>
  );
};

export default Support;