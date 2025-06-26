"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPlay, FaHeart, FaComment, FaShare, FaExternalLinkAlt } from "react-icons/fa";

// Mock content data - replace with actual content
const contentData = [
  {
    id: 1,
    type: "image",
    title: "Kampagne Event på Nørrebro",
    description: "Fantastisk opbakning fra lokalsamfundet",
    image: "/images/blog/blog-01.png",
    likes: 124,
    comments: 18,
    date: "2 dage siden"
  },
  {
    id: 2,
    type: "video",
    title: "Min Vision for København",
    description: "Se mit seneste interview om fremtidsplanerne",
    image: "/images/blog/blog-02.png",
    likes: 89,
    comments: 12,
    date: "5 dage siden"
  },
  {
    id: 3,
    type: "image",
    title: "Møde med Lokale Erhvervsdrivende",
    description: "Vigtige samtaler om fremtidens muligheder",
    image: "/images/blog/blog-03.png",
    likes: 156,
    comments: 24,
    date: "1 uge siden"
  },
  {
    id: 4,
    type: "image",
    title: "Ungdomsdebat på Nørrebro",
    description: "Engagerende diskussion med de unge stemmer",
    image: "/images/blog/blog-04.png",
    likes: 203,
    comments: 31,
    date: "1 uge siden"
  },
  {
    id: 5,
    type: "video",
    title: "Bæredygtig Transport",
    description: "Mine forslag til grønnere transport i byen",
    image: "/images/blog/blog-05.png",
    likes: 178,
    comments: 19,
    date: "2 uger siden"
  },
  {
    id: 6,
    type: "image",
    title: "Familiedag i Parken",
    description: "Hyggeligt samvær med familier fra området",
    image: "/images/hero/Design-uden-navn-22.png",
    likes: 267,
    comments: 42,
    date: "2 uger siden"
  }
];

const Integration = () => {
  return (
    <section id="content" className="relative py-20 md:py-24 xl:py-32 bg-gradient-to-br from-white via-gray-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <FaInstagram className="text-sm" />
            <span>Kampagne Content</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
            Følg Med I <span className="text-green-600 dark:text-green-400">Kampagnen</span>
          </h2>

          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Se de seneste opdateringer, events og historier fra min kampagne.
            <span className="font-semibold text-green-700 dark:text-green-400"> Bliv en del af rejsen mod forandring!</span>
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    item.type === "video" ? "bg-red-500" : "bg-green-500"
                  }`}>
                    {item.type === "video" ? "Video" : "Foto"}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaHeart className="text-red-500" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaComment className="text-blue-500" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                  
                  <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/30 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <FaShare className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Følg Kampagnen På Sociale Medier
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Få de seneste opdateringer og bliv en del af fællesskabet
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  icon: FaInstagram,
                  name: "Instagram",
                  href: "https://instagram.com/asham_nadeem",
                  color: "from-pink-500 to-purple-600",
                  followers: "2.1K"
                },
                {
                  icon: FaInstagram,
                  name: "Facebook",
                  href: "https://facebook.com/asham.nadeem",
                  color: "from-blue-500 to-blue-700",
                  followers: "1.8K"
                },
                {
                  icon: FaInstagram,
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/asham-nadeem",
                  color: "from-blue-600 to-blue-800",
                  followers: "950"
                }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 bg-gradient-to-r ${social.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <social.icon className="text-xl" />
                  <div className="text-left">
                    <div className="text-sm font-medium">{social.name}</div>
                    <div className="text-xs opacity-90">{social.followers} følgere</div>
                  </div>
                  <FaExternalLinkAlt className="text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Få Kampagne-Opdateringer Direkte
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Tilmeld dig mit nyhedsbrev og få de vigtigste opdateringer fra kampagnen direkte i din indbakke
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din email adresse"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Tilmeld
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;