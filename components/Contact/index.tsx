"use client";
import { motion } from "framer-motion";

const Contact = () => {
  const handleCall = () => {
    window.location.href = "tel:+4512121212";
  };

  const handleEmail = () => {
    window.location.href = "mailto:kontakt@asham.dk";
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-100 text-emerald-800 font-medium mb-8">
            <span className="text-lg">💬</span>
            <span>Kontakt Mig</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Lad Os <span className="text-emerald-600">Snakke</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Har du spørgsmål, ideer eller vil du bare sige hej? Jeg er altid klar til at lytte og hjælpe.
            <span className="text-emerald-700 font-medium"> Lad os skabe forandring sammen!</span>
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-16 translate-x-16 group-hover:bg-emerald-100 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📞</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Ring Til Mig</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Har du brug for at tale med mig direkte? Ring når som helst - jeg besvarer gerne dine spørgsmål.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl mb-6">
                    <p className="text-lg font-mono font-bold text-slate-900">+45 12 12 12 12</p>
                    <p className="text-sm text-slate-500 mt-1">Tilgængelig mandag-fredag</p>
                  </div>

                  <button
                    onClick={handleCall}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <span className="text-lg">📞</span>
                    Ring Nu
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16 group-hover:bg-blue-100 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✉️</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Send En Email</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Foretrækker du at skrive? Send mig en email, og jeg svarer så hurtigt som muligt.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl mb-6">
                    <p className="text-lg font-mono font-bold text-slate-900">kontakt@asham.dk</p>
                    <p className="text-sm text-slate-500 mt-1">Svar indenfor 24 timer</p>
                  </div>

                  <button
                    onClick={handleEmail}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <span className="text-lg">✉️</span>
                    Send Email
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-3xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Andre Måder at Kontakte Mig</h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Udover direkte kontakt kan du også følge mig på sociale medier eller deltage i mine arrangementer.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl mb-2 block">📱</span>
                <p className="font-semibold">Sociale Medier</p>
                <p className="text-sm text-emerald-200">Følg mine opdateringer</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl mb-2 block">🏛️</span>
                <p className="font-semibold">Arrangementer</p>
                <p className="text-sm text-emerald-200">Deltag i mine events</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl mb-2 block">📧</span>
                <p className="font-semibold">Nyhedsbrev</p>
                <p className="text-sm text-emerald-200">Hold dig opdateret</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
