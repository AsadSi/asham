"use client";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <section id="support" className="py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-100 text-emerald-700 font-medium mb-8">
            <span className="text-lg">💚</span>
            <span>Støt Kampagnen</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Din Støtte <span className="text-emerald-600">Gør En Forskel</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Din økonomiske støtte er afgørende for at fortsætte mit arbejde og sprede mit budskab i lokalsamfundet.
            Hver en krone gør en forskel!
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-slate-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Donation Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MobilePay Donation</h3>
                    <p className="text-emerald-100">Hurtig og sikker betaling</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* MobilePay Number */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-sm font-medium text-slate-600 mb-3">MobilePay Nummer</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-bold text-slate-900 tracking-wider">
                      31 41 11
                    </span>
                    <button
                      onClick={() => navigator.clipboard.writeText('314111')}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-xl transition-colors font-medium"
                    >
                      Kopier
                    </button>
                  </div>
                </div>

                {/* Important Note */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-600 text-lg">⚠️</span>
                    <div>
                      <p className="font-semibold text-amber-900 mb-1">Vigtigt at huske:</p>
                      <p className="text-amber-800 text-sm">
                        Skriv <span className="font-bold">"Asham"</span> i kommentarfeltet for at sikre din donation når frem.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 text-lg">Sådan donerer du:</h4>
                  <div className="space-y-3">
                    {[
                      "Åbn din MobilePay app",
                      "Tryk på 'Send' eller 'Betal'",
                      "Indtast nummeret: 31 41 11",
                      "Indtast dit ønskede beløb",
                      "Skriv 'Asham' i beskedfeltet",
                      "Bekræft din donation"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 rounded-2xl text-center">
                    <p className="text-lg font-semibold mb-2">
                      🙏 Tak for din uvurderlige støtte!
                    </p>
                    <p className="text-sm text-emerald-100">
                      Sammen kan vi skabe forandring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Why Support */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Hvorfor støtte?</h3>
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
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Support */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-4 text-lg">Andre måder at støtte:</h4>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Del kampagnen på sociale medier</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Fortæl dine venner og familie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Deltag i kampagne-events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Meld dig som frivillig</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;