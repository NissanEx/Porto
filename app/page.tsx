"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';

// Paksa komponen ini hanya di-render di browser (client-side)
const NodeGraph = dynamic(() => import("@/components/NodeGraph"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[700px] flex items-center justify-center bg-[#f4f4f4]">
      <p className="text-sm font-bold tracking-widest uppercase text-gray-400 animate-pulse">
        Loading Mind Map...
      </p>
    </div>
  ),
});import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { 
  Layers, 
  Search, 
  MessageCircle, 
  Globe, 
  Send, 
  Mail, 
  ArrowUp,
  Pencil, 
  X, 
  Check, 
  Maximize2, 
  Scaling 
} from "lucide-react";

// Variabel Animasi
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <main className="w-full bg-[#f4f4f4] text-[#111] overflow-x-hidden">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6">
        
        <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-8 z-50">
          <div className="text-sm tracking-[0.4em] font-bold uppercase">
            Portfo<span className="text-gray-400">lio</span>
          </div>
          <div className="flex items-center gap-4 text-xs tracking-[0.2em] font-medium cursor-pointer hover:text-gray-500 transition-colors">
            <span>FILTER</span>
            <Search size={16} strokeWidth={1.5} />
          </div>
        </header>

        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* FOTO PROFIL DIPERBESAR */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl grayscale">
            <Image
              src="/sandy.png" 
              alt="Sandy Wiraabdy"
              fill
              className="object-cover object-top"
            />
          </div>

          <p className="text-sm md:text-base text-gray-600 font-medium mb-6">
            Sandy Wiraabdy
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#222] leading-[1.2] md:leading-[1.1] flex flex-col items-center">
            <span className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
              Full-stack 
              <Layers className="w-8 h-8 md:w-12 md:h-12 text-[#222] stroke-[1.5]" />
              marketing
            </span>
            <span className="mt-2">
              & creative director
            </span>
          </h1>
        </motion.div>

        <a href="#about" className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer group z-30">
          <span className="text-[10px] tracking-[0.3em] font-medium uppercase text-gray-400 group-hover:text-gray-800 transition-colors">
            Scroll Down
          </span>
          <div className="w-[1px] h-8 bg-gray-300 group-hover:bg-gray-800 transition-colors"></div>
        </a>
      </section>


      {/* ================= SECTION 2: ABOUT ================= */}
      <section id="about" className="w-full py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div 
            className="relative w-full max-w-md mx-auto md:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div className="absolute top-0 left-0 w-4/5 h-[90%] bg-[#222] -translate-x-4 -translate-y-4 md:-translate-x-6 md:-translate-y-6 z-0"></div>
            
            <div className="absolute -top-2 right-4 flex gap-1 z-20">
              <div className="w-3 h-3 rounded-full bg-[#facc15]"></div>
              <div className="w-3 h-3 rounded-full bg-[#facc15] translate-y-4"></div>
            </div>

            <div className="relative z-10 aspect-[4/5] w-full bg-gray-300 overflow-hidden">
              <Image
                src="/sandy.png" 
                alt="About Photo"
                fill
                className="object-cover grayscale contrast-110"
              />
            </div>

            <div className="absolute -bottom-8 -right-4 w-32 h-32 z-0" 
                 style={{ backgroundImage: 'radial-gradient(circle, #bbb 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}>
            </div>
          </motion.div>

          <motion.div 
            className="relative z-10 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-8 bg-gray-400"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-gray-500">who am i</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black uppercase text-[#222] tracking-tighter flex items-end mb-4 leading-none">
              HELLO<span className="text-[#facc15] ml-1">.</span>
            </h2>

            <div className="mb-8 text-gray-400 opacity-80">
              <svg width="120" height="15" viewBox="0 0 120 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7.5 L 7.5 0 L 15 7.5 L 22.5 0 L 30 7.5 L 37.5 0 L 45 7.5 L 52.5 0 L 60 7.5 L 67.5 0 L 75 7.5 L 82.5 0 L 90 7.5 L 97.5 0 L 105 7.5 L 112.5 0 L 120 7.5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            <div className="space-y-6 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                I am a UI developer. It is a long time fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
              </p>
              <p>
                It is a fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
              </p>
            </div>

            {/* ICON SOSMED: MONOKROM & TANPA BINGKAI */}
            <div className="flex gap-6 mt-10">
               {[
                { icon: <MessageCircle size={24} strokeWidth={1.5} /> },
                { icon: <Globe size={24} strokeWidth={1.5} /> },
                { icon: <Send size={24} strokeWidth={1.5} /> },
                { icon: <Mail size={24} strokeWidth={1.5} /> },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-gray-500 hover:text-black cursor-pointer hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        <div className="w-full flex justify-center pb-24 bg-[#f4f4f4] mt-16">
          <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-black transition-colors">
            <ArrowUp size={16} />
            Back to Top
          </a>
        </div>
      </section>


      {/* ================= SECTION 3: ARTICLE / PLANNING ================= */}
      <section className="w-full py-32 px-6 md:px-12 flex justify-center">
        <motion.div 
          className="max-w-3xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Practices for product building
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#222] mb-8 leading-tight tracking-tight">
            Planning for unplanned work
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>There are two types of work. Planned work and unplanned work.</p>
            <p>
              Planned work are tasks and activities that have been organized and scheduled in advance. This type of work typically happens in projects that tie into roadmaps and larger company goals. Because the work has been planned before, you know what you're trying to do, who's going to work on it, and when they will get started.
            </p>
            <p>
              Unplanned work, on the other hand, are issues and emergencies that appear suddenly and seemingly randomly in the form of a bug report, an important feature request, or an outage. Unplanned work happens unexpectedly, but it's not unexpected. You know that there will be bug reports, you just don't know when, where, and in what shape they will come up. The only thing that is certain is that they will appear.
            </p>
          </div>

          <motion.div 
            className="mt-20 mb-12 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg 
              viewBox="0 0 600 500" 
              className="w-full max-w-2xl h-auto text-gray-500"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="diagonalHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#d1d5db" strokeWidth="1" />
                </pattern>
                <clipPath id="leftCircleClip">
                  <circle cx="230" cy="220" r="130" />
                </clipPath>
              </defs>

              <circle cx="230" cy="220" r="130" stroke="#d1d5db" strokeWidth="1.5" />
              <text x="180" y="225" className="text-xs fill-gray-400">Reality</text>

              <circle cx="370" cy="220" r="130" stroke="#d1d5db" strokeWidth="1.5" />
              <text x="410" y="225" className="text-xs fill-gray-400">Issue tracker</text>

              <circle cx="370" cy="220" r="130" fill="url(#diagonalHatch)" clipPath="url(#leftCircleClip)" />

              <text x="50" y="90" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">Unplanned</text>
              <text x="50" y="105" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">issues</text>
              <path d="M 110 120 Q 150 160 170 190" stroke="#9ca3af" strokeWidth="1" fill="none" />
              <polygon points="168,185 173,192 165,195" fill="#9ca3af" />

              <text x="450" y="90" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">Inaccurate</text>
              <text x="450" y="105" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">and outdated</text>
              <text x="450" y="120" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">information</text>
              <path d="M 490 140 Q 450 160 430 190" stroke="#9ca3af" strokeWidth="1" fill="none" />
              <polygon points="432,185 427,192 435,195" fill="#9ca3af" />

              <text x="310" y="470" textAnchor="middle" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">Actionable Items</text>
              <path d="M 310 450 Q 315 390 310 330" stroke="#9ca3af" strokeWidth="1" fill="none" />
              <polygon points="308,335 312,328 316,335" fill="#9ca3af" />
            </svg>
          </motion.div>
        </motion.div>
      </section>


      {/* ================= SECTION 4: WORKFLOW ================= */}
      <section className="w-full py-32 px-6 md:px-12 flex justify-center">
        <motion.div 
          className="max-w-7xl w-full relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
            
            {/* --- KOLOM 1 --- */}
            <motion.div variants={fadeInUp} className="flex flex-col w-full">
              <p className="text-sm font-medium text-gray-800 mb-4">Note with content</p>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative group h-full flex flex-col">
                <p className="text-[11px] text-gray-400 mb-3">Last updated by <span className="text-black font-medium">Nick</span> on Nov 1</p>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                  <Pencil size={16} />
                </button>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed flex-grow">
                  <p>The EV charging station project is nearing its operational phase. This initiative aligns with broader environmental goals and aims to provide residents and visitors with reliable access to EV charging services.</p>
                  <p>As the project progresses, key infrastructure elements are being finalized to ensure that the station meets both local and national standards for safety and efficiency.</p>
                  <p>Amon Smith, the Operational Manager for the Austin station, is overseeing the preparations for the launch.</p>
                </div>
              </div>
            </motion.div>

            {/* --- KOLOM 2 --- */}
            <motion.div variants={fadeInUp} className="flex flex-col w-full relative">
              <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-gray-300">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-gray-300 rotate-45"></div>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-4">Note editing...</p>
              <div className="bg-white border-2 border-gray-400 rounded-xl p-5 shadow-md relative h-full flex flex-col">
                <p className="text-[11px] text-gray-400 mb-3">Last updated by <span className="text-black font-medium">Nick</span> on Nov 1</p>
                <div className="space-y-3 text-xs text-gray-600 leading-relaxed flex-grow">
                  <p>The EV charging station project is nearing its operational phase. This initiative aligns with broader environmental goals and aims to provide residents and visitors with reliable access to EV charging services.</p>
                  <p>As the project progresses, key infrastructure elements are being finalized to ensure that the station meets both local and national standards for safety and efficiency.</p>
                  <p>Amon Smith, the Operational Manager for the Austin station, is overseeing the preparations for the launch.</p>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <button className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-white bg-[#111] rounded-md hover:bg-gray-800 transition-colors">Update note</button>
                </div>
              </div>
              <div className="mt-4 bg-white border border-gray-100 shadow-lg rounded-lg p-3 flex items-start gap-3 w-full">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <X size={12} className="text-red-500" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-bold text-gray-800">Failed to update note</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">There was an error updating note. Please try again.</p>
                </div>
                <button className="text-gray-400 hover:text-black mt-1 shrink-0"><X size={14} /></button>
              </div>
            </motion.div>

            {/* --- KOLOM 3 --- */}
            <motion.div variants={fadeInUp} className="flex flex-col w-full relative">
              <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-gray-300">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-gray-300 rotate-45"></div>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-4">Note updated</p>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative h-full flex flex-col">
                <p className="text-[11px] text-gray-400 mb-3">Last updated by <span className="text-black font-medium">Nick</span> on Nov 12</p>
                <div className="space-y-4 text-xs text-gray-600 leading-relaxed flex-grow">
                  <p className="font-medium text-black">Austin Station A1 has been launched.</p>
                  <p>Operational Manager:<br />Amon Smith, <span className="text-black font-medium">+1 123-456-7890</span></p>
                </div>
              </div>
              <div className="mt-4 bg-white border border-gray-100 shadow-lg rounded-lg p-3 flex items-start gap-3 w-full">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-green-600" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs font-bold text-gray-800">Note updated</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Note was updated successfully.</p>
                </div>
                <button className="text-gray-400 hover:text-black mt-1 shrink-0"><X size={14} /></button>
              </div>
            </motion.div>
          </div>

          <div className="absolute -bottom-16 right-0 flex gap-4 text-gray-800">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <Maximize2 size={20} className="transform rotate-45" />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <Scaling size={20} />
            </div>
          </div>
        </motion.div>
      </section>


      {/* ================= SECTION 5: MIND MAP ================= */}
      <section className="w-full relative">
        <motion.div 
          className="w-full text-center pt-20 pb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Interactive Portfolio
          </p>
          <h2 className="text-3xl font-bold mt-2">Mind Map</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <NodeGraph />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>

    </main> 
  );
}