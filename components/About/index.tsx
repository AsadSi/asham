"use client";
import { motion } from "framer-motion";

const About = () => {
  const sections = [
    {
      id: "journey",
      title: "Politisk Rejse",
      icon: "🚀",
      color: "from-blue-500 to-indigo-600",
      content: (
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Jeg meldte mig ind i <span className="font-semibold text-blue-600">Frie Grønne</span> op til partiets lancering i 2020,
            drevet af et ønske om at ændre den politiske diskurs i Danmark – særligt når det gælder udlændinge, rettigheder og retfærdighed.
          </p>
          <p>
            Ved <span className="font-semibold text-blue-600">folketingsvalget</span> var jeg spidskandidat i <span className="font-semibold text-blue-600">Københavns Omegn</span>,
            hvor jeg fik <span className="font-semibold text-blue-600">987 personlige stemmer</span>. Som spidskandidat lykkedes det os at skabe den mest succesfulde kampagne for Frie Grønne i hele Danmark.
          </p>
          <p>
            Min politiske rejse har altid været båret af et stærkt værdisæt: Jeg går ikke på kompromis med retfærdighed, menneskerettigheder eller klimaet.
            Jeg tror på, at politik skal være transparent, inkluderende og løsningsorienteret – og at vi alle har et ansvar for at skabe en bedre fremtid for kommende generationer.
          </p>
          <p>
            Gennem mit arbejde i Frie Grønne har jeg fokuseret på at bygge bro mellem forskellige grupper i samfundet,
            at styrke demokratiet og at sikre, at alle stemmer bliver hørt – uanset baggrund eller oprindelse.
          </p>
        </div>
      )
    },
    {
      id: "podcast",
      title: "Podcast",
      icon: "🎙️",
      color: "from-purple-500 to-pink-600",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
            <h4 className="text-xl font-semibold mb-4 text-purple-900 flex items-center gap-3">
              <span className="text-2xl">🎙️</span>
              Gadens Parlament
            </h4>
            <p className="text-slate-600 leading-relaxed mb-4">
              Jeg er stifter og vært på podcasten <span className="font-semibold text-purple-600">Gadens Parlament</span>,
              hvor vi giver plads til både stemmer, der ofte bliver overset, og kendte profiler fra forskellige brancher.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Podcasten fungerer som en platform for åben dialog og debat om samfundsmæssige emner, hvor vi inviterer gæster
              fra alle dele af samfundet – fra politikere og aktivister til kunstnere og erhvervsfolk. Målet er at skabe
              forståelse og dialog på tværs af forskellige perspektiver og baggrunde.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "dyia",
      title: "Danish Youth in Action",
      icon: "🌍",
      color: "from-emerald-500 to-teal-600",
      content: (
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Jeg har stiftet foreningen <span className="font-semibold text-emerald-600">Danish Youth in Action (DYIA)</span>,
            som arbejder for at styrke unges kompetencer og skabe fællesskaber på tværs af kulturer og landegrænser.
          </p>
          <p>
            DYIA fungerer både som et lærings- og netværksfællesskab, hvor unge kan udvikle sig personligt og fagligt,
            og som en platform for at møde ligesindede fra hele Europa gennem vores mange EU-ungdomsrejser.
          </p>
          <p>
            Gennem DYIA arrangerer vi workshops, seminarer og internationale udvekslingsprogrammer, der giver unge
            mulighed for at lære om demokrati, menneskerettigheder og aktivt medborgerskab. Vi tror på, at unge er
            fremtidens beslutningstagere, og vi arbejder for at give dem de værktøjer og netværk, de har brug for
            at skabe positive forandringer i deres lokalsamfund og globalt.
          </p>
        </div>
      )
    },
    {
      id: "charity",
      title: "Velgørenhedsarbejde",
      icon: "🤝",
      color: "from-rose-500 to-pink-600",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            Ved siden af mit politiske og organisatoriske arbejde har jeg altid været dybt engageret i velgørenhed og sociale projekter.
            Jeg tror på, at ægte forandring kommer fra bunden, og at vi alle har et ansvar for at hjælpe dem, der har brug for det.
          </p>

          <div className="grid gap-4">
            {[
              "Afholdt klimademonstration i forbindelse med oversvømmelser i Pakistan",
              "Arrangeret Eid-fest for afviste asylansøgere på Avnstrup",
              "FC Nordsjælland samarbejde med families fra Avnstrup",
              "Fodboldturneringen Play4Pakistan for naturkatastrofeofre",
              "Ramadankalender med sponsorater og gaver",
              "Hjælp til flygtninge og asylansøgere i Danmark",
              "Støtte til lokale initiativer for social inklusion"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed">
            Disse initiativer afspejler min overbevisning om, at solidaritet og medmenneskelighed er grundlæggende værdier
            i et velfærdssamfund. Jeg arbejder for at skabe broer mellem forskellige grupper og støtte dem, der har brug for hjælp.
          </p>
        </div>
      )
    }
  ];

  const issues = [
    {
      emoji: "💚",
      title: "Et København for alle",
      description: "Jeg ønsker et København, hvor vi tager aktivt ansvar for at sikre lighed og retfærdighed i hverdagen.",
      color: "from-emerald-500 to-green-600"
    },
    {
      emoji: "🎨",
      title: "Kultur der samler os",
      description: "Kultur er fundamentet for et stærkt fællesskab. Når vi mødes omkring musik, kunst og idræt, skaber vi bro mellem mennesker.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      emoji: "🤝",
      title: "Inkluderende fællesskab",
      description: "København skal være en by, hvor vi løfter hinanden op – ikke en by, hvor vi deler os op.",
      color: "from-purple-500 to-pink-600"
    },
    {
      emoji: "🌍",
      title: "International solidaritet",
      description: "København er en global by – og vores lokale valg har også en international dimension.",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Hero Section - Clean and Professional */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-100 text-emerald-800 font-medium mb-8 text-sm">
            <span className="text-lg">👤</span>
            <span>Om Mig</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Asham Agha Nadeem
          </h1>

          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            En stemme for forandring i København. Jeg tror på, at politik skal være transparent, inkluderende og løsningsorienteret.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full">Politiker</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full">Samfundsbygger</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full">Menneskerettighedsforkæmper</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full">Aktivist</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Personal Story */}
          <div className="lg:col-span-2 space-y-12">
            {/* Political Journey */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Min Politisk Rejse</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🌱</span>
                    <h3 className="text-xl font-bold text-slate-900">2020 - Frie Grønne</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Jeg meldte mig ind i <span className="font-semibold text-emerald-600">Frie Grønne</span> op til partiets lancering i 2020, drevet af et ønske om at ændre den politiske diskurs i Danmark – særligt når det gælder udlændinge, rettigheder og retfærdighed.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎯</span>
                    <h3 className="text-xl font-bold text-slate-900">2021 - Folketingsvalget</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Ved <span className="font-semibold text-emerald-600">folketingsvalget</span> var jeg spidskandidat i <span className="font-semibold text-emerald-600">Københavns Omegn</span>, hvor jeg fik <span className="font-semibold text-emerald-600">987 personlige stemmer</span>. Som spidskandidat lykkedes det os at skabe den mest succesfulde kampagne for Frie Grønne i hele Danmark – et resultat, der viste styrken i fællesskab, kreativitet og en utrættelig indsats fra frivillige.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🏛️</span>
                    <h3 className="text-xl font-bold text-slate-900">2025 - Kommunalvalget</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Nu stiller jeg op til <span className="font-semibold text-emerald-600">kommunalvalget i København 2025</span> – med samme passion og erfaring i rygsækken, men denne gang med fokus på at skabe konkrete forandringer lokalt, hvor vi kan mærke dem i hverdagen.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-emerald-900 mb-2">Mine Værdier</h4>
                <p className="text-emerald-800">
                  Jeg går ikke på kompromis med retfærdighed, menneskerettigheder eller klimaet. Jeg tror på samarbejde, men også på at turde stå fast, når grundlæggende principper er på spil.
                </p>
              </div>
            </motion.div>

            {/* Key Issues */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-slate-900">Mine Mærkesager</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "💚",
                    title: "Et København for alle",
                    description: "Jeg ønsker et København, hvor vi tager aktivt ansvar for at sikre lighed og retfærdighed i hverdagen.",
                    fullDescription: "Alt for mange oplever diskrimination – på arbejdspladsen, i skolen eller i mødet med systemet. Det skal vi ændre. Jeg vil arbejde for, at kommunen tager et tydeligt opgør med diskrimination i alle former og sikrer reel ligestilling i byens institutioner, tilbud og politikker. København skal være en by, hvor du ikke defineres af din baggrund, men af dine drømme og muligheder."
                  },
                  {
                    icon: "🎨",
                    title: "Kultur der samler os",
                    description: "Kultur er fundamentet for et stærkt fællesskab.",
                    fullDescription: "Når vi mødes omkring musik, kunst, film eller idræt, skaber vi bro mellem mennesker med forskellige baggrunde og historier. Jeg vil arbejde for at styrke de lokale kulturinitiativer, støtte kreative ungdomsprojekter og skabe flere åbne mødesteder, hvor københavnere kan mødes på tværs af forskelle. Kultur er limen, der binder os sammen – og den skal have bedre vilkår i vores by."
                  },
                  {
                    icon: "🤝",
                    title: "Inkluderende fællesskab",
                    description: "København skal være en by, hvor vi løfter hinanden op.",
                    fullDescription: "Jeg tror på, at et stærkt lokalt fællesskab kan skabe håb, sammenhold og nye løsninger på de udfordringer, vi står overfor. Derfor vil jeg arbejde for, at fællesskab, kreativitet og medmenneskelighed får en central rolle i byens udvikling. Mit mål er et mere åbent, retfærdigt og levende København, hvor vi sammen kan skabe en by, vi alle kan være stolte af at kalde vores hjem."
                  },
                  {
                    icon: "🌍",
                    title: "International solidaritet",
                    description: "København er en global by med internationale ansvar.",
                    fullDescription: "Jeg mener, at vi har et ansvar for at stå på den rigtige side af historien, når det gælder menneskerettigheder og fred. Jeg har blandt andet engageret mig i Palæstina-spørgsmålet og kritiseret Danmarks politiske linje, fordi stilhed og passivitet aldrig må være et svar på uretfærdighed. Til Global Peace Summit har jeg holdt tale og deltaget i rundbordssamtaler om, hvordan vi sammen kan presse regeringer til at arbejde for fred og retfærdighed."
                  }
                ].map((issue, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{issue.icon}</span>
                      <h3 className="text-xl font-bold text-slate-900">{issue.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{issue.description}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{issue.fullDescription}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Initiatives */}
          <div className="space-y-8">
            {/* Podcast */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200"
            >
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🎙️</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Gadens Parlament</h3>
                <p className="text-purple-700 font-medium">Podcast</p>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                Jeg er stifter og vært på podcasten <span className="font-bold text-purple-600">Gadens Parlament</span>, hvor vi giver plads til både stemmer, der ofte bliver overset, og kendte profiler fra forskellige brancher.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-slate-600">Åben dialog og debat</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-slate-600">Alle stemmer høres</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-slate-600">Nye perspektiver</span>
                </div>
              </div>
            </motion.div>

            {/* DYIA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200"
            >
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🌍</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Danish Youth in Action</h3>
                <p className="text-emerald-700 font-medium">Ungdomsorganisation</p>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                Jeg har stiftet foreningen <span className="font-bold text-emerald-600">Danish Youth in Action (DYIA)</span>, som arbejder for at styrke unges kompetencer og skabe fællesskaber på tværs af kulturer og landegrænser.
              </p>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🇸🇰</span>
                    <span className="font-medium text-slate-900">Slovakiet</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🇮🇹</span>
                    <span className="font-medium text-slate-900">Italien</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🇹🇷</span>
                    <span className="font-medium text-slate-900">Tyrkiet</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-emerald-600 text-white p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4">Mine Kerneværdier</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Retfærdighed og lighed</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Menneskerettigheder</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Klima og bæredygtighed</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Fællesskab og solidaritet</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Charity Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-12 rounded-3xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Velgørenhedsarbejde</h2>
            <p className="text-xl text-slate-600">Omsætte ord til handling</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">
              Ved siden af mit politiske og organisatoriske arbejde har jeg altid været dybt engageret i velgørenhed og sociale projekter. For mig handler det om at omsætte ord til handling – og skabe fællesskaber, der kan gøre en reel forskel for mennesker i svære situationer.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Klimademonstration Pakistan",
                  description: "Afholdt demonstration i forbindelse med oversvømmelser for at skabe opmærksomhed og støtte",
                  icon: "🌊"
                },
                {
                  title: "Eid-fest for asylansøgere",
                  description: "Arrangeret fest på Avnstrup for at skabe glæde og fællesskab",
                  icon: "🎉"
                },
                {
                  title: "FC Nordsjælland samarbejde",
                  description: "Inviteret familier fra Avnstrup til superligakamp",
                  icon: "⚽"
                },
                {
                  title: "Play4Pakistan turnering",
                  description: "Fodboldturnering for at samle penge til naturkatastrofeofre",
                  icon: "🏆"
                },
                {
                  title: "Ramadankalender",
                  description: "Fire år med sponsorater og gaver til tilfældige mennesker",
                  icon: "📅"
                }
              ].map((initiative, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <span className="text-3xl mb-3 block">{initiative.icon}</span>
                    <h3 className="text-lg font-bold text-slate-900">{initiative.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed text-center">{initiative.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Politik i Praksis</h3>
              <p className="text-lg leading-relaxed">
                Disse initiativer viser, hvordan jeg forstår politik og engagement i praksis: det handler ikke kun om beslutninger på rådhuset, men om at skabe håb, fællesskab og konkrete oplevelser – både lokalt og globalt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
