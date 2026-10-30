"use client";
import { useState } from "react"; 
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
import { motion, Variants, AnimatePresence } from "framer-motion"; 
import { 
  Layers, 
  Search, 
  MessageCircle, 
  Globe, 
  Send, 
  Mail, 
   ArrowUpRight,
  Pencil, 
  X, 
  Check, 
  Maximize2, 
  Scaling,     // <-- TAMBAHKAN KOMA DI SINI
  Lightbulb,   // Untuk Discovery
  PenTool,     // Untuk Design
  Code2,       // Untuk Develop
  Rocket,      // Untuk Deliver
  CheckCircle2 // Untuk Komitmen
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
const PROJECTS = [
  {
    id: "p1",
    title: "Intellectual\nRigour",
    description: "We believe in the power of deep thinking and insightful judgement. We apply our expertise and knowledge to solve complex issues with a long-term vision.",
    icon: "circle-thick",
  },
  {
    id: "p2",
    title: "Courageous\nCreativity",
    description: "We believe that transformation takes courage to make ideas a reality. We are the doers, the bold leaders, disruptors and innovators doing things differently.",
    icon: "sun",
  },
  {
    id: "p3",
    title: "Catalytic\nCollaboration",
    description: "We believe in connecting diverse thinkers to create breakthrough ideas. Real systemic change can only be achieved by joining forces and forging new paths together.",
    icon: "cluster",
  },
  {
    id: "p4",
    title: "Relentless\nTenacity",
    description: "We believe in the dedicated and determined pursuit of a goal. We combine the perseverance, resilience and grit to get us there.",
    icon: "dots",
  },
  {
    id: "p5",
    title: "Thoughtful\nTransformation",
    description: "We believe our impact must be significant and measurable, directly tied to outcomes. We manifest our leadership through our exemplary, ethical behaviours and business.",
    icon: "circle-open",
  },
];
export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
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

      {/* ================= SECTION 4: WORK PROCESS & COMMITMENT ================= */}
      <section className="w-full py-32 px-6 md:px-12 flex justify-center bg-[#f4f4f4] relative overflow-hidden">
        <motion.div 
          className="max-w-7xl w-full relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-2">How I Work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111]">My Commitment & Process</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Membangun produk digital bukan hanya soal menulis kode, tapi tentang memahami masalah dan memberikan solusi terbaik. Berikut adalah komitmen saya di setiap tahapnya.
            </p>
          </motion.div>

          {/* Grid 4 Langkah */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Garis Putus-putus Penghubung (Hanya Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] border-t-2 border-dashed border-gray-200 -z-10"></div>

            {/* --- LANGKAH 1: DISCOVERY --- */}
            <motion.div variants={fadeInUp} className="relative group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4f4f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#111] group-hover:text-white transition-all duration-300">
                <Lightbulb size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-gray-400 mb-2 block">PHASE 01</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Mendengarkan ide, memahami visi, dan menganalisis kebutuhan bisnis Anda sebelum menyentuh baris kode pertama.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle2 size={14} className="text-green-500" /> Riset & Analisis
              </div>
            </motion.div>

            {/* --- LANGKAH 2: DESIGN --- */}
            <motion.div variants={fadeInUp} className="relative group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4f4f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#111] group-hover:text-white transition-all duration-300">
                <PenTool size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-gray-400 mb-2 block">PHASE 02</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Merancang antarmuka (UI) yang estetis dan pengalaman pengguna (UX) yang intuitif, memastikan navigasi yang mulus.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle2 size={14} className="text-green-500" /> UI/UX Prototyping
              </div>
            </motion.div>

            {/* --- LANGKAH 3: DEVELOP --- */}
            <motion.div variants={fadeInUp} className="relative group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4f4f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#111] group-hover:text-white transition-all duration-300">
                <Code2 size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-gray-400 mb-2 block">PHASE 03</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Develop</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Mengubah desain menjadi kode yang bersih, cepat, responsif, dan mudah dikelola menggunakan teknologi modern.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle2 size={14} className="text-green-500" /> Clean Code & Fast
              </div>
            </motion.div>

            {/* --- LANGKAH 4: DELIVER --- */}
            <motion.div variants={fadeInUp} className="relative group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4f4f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#111] group-hover:text-white transition-all duration-300">
                <Rocket size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-gray-400 mb-2 block">PHASE 04</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deliver</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Melakukan pengujian akhir, proses rilis (deploy) ke server, dan memastikan semuanya berjalan sempurna.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle2 size={14} className="text-green-500" /> Launch & Support
              </div>
            </motion.div>

          </div>

          {/* Ornamen UI di Pojok Kanan Bawah */}
          <div className="absolute -bottom-12 right-0 flex gap-4 text-gray-400">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:text-black transition-colors">
              <Maximize2 size={18} className="transform rotate-45" />
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:text-black transition-colors">
              <Scaling size={18} />
            </div>
          </div>
        </motion.div>
      </section>
      {/* ================= SECTION 5: EDITORIAL COLUMNS ================= */}
      <section id="works" className="w-full py-32 px-6 md:px-12 bg-[#f4f4f4] flex justify-center">
        <div className="max-w-7xl w-full">
          
          {/* Grid 5 Kolom dengan Garis Pemisah */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-b border-gray-300 divide-y md:divide-y-0 lg:divide-x divide-gray-300">
            
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex flex-col pt-10 pb-12 px-6 lg:px-8 hover:bg-gray-50/50 transition-colors cursor-pointer"
              >
                
                {/* Area Ikon (SVG Kustom) */}
                <div className="h-32 mb-8 flex items-start">
                  {project.icon === "circle-thick" && (
                    <div className="relative w-16 h-16 rounded-full border-[6px] border-black"></div>
                  )}
                  
                  {project.icon === "sun" && (
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-[6px] border-black"></div>
                      {/* Garis bawah */}
                      <div className="absolute bottom-0 flex flex-col gap-1 w-12">
                        <div className="h-[2px] bg-black w-full"></div>
                        <div className="h-[2px] bg-black w-full"></div>
                        <div className="h-[2px] bg-black w-3/4 mx-auto"></div>
                      </div>
                    </div>
                  )}
                  
                  {project.icon === "cluster" && (
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border-[2px] border-black absolute"></div>
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-3 h-3 rounded-full border-[1.5px] border-black absolute"
                          style={{ transform: `rotate(${i * 45}deg) translateY(-20px)` }}
                        />
                      ))}
                    </div>
                  )}

                  {project.icon === "dots" && (
                    <div className="relative w-16 h-16 flex flex-col items-start justify-start gap-2">
                      <div className="flex gap-2"><div className="w-3 h-3 rounded-full border border-black"></div><div className="w-3 h-3 rounded-full border border-black"></div></div>
                      <div className="flex gap-2 ml-4"><div className="w-3 h-3 rounded-full border border-black"></div><div className="w-3 h-3 rounded-full border border-black"></div></div>
                      <div className="flex gap-2 ml-1"><div className="w-3 h-3 rounded-full border border-black"></div><div className="w-3 h-3 rounded-full border border-black"></div></div>
                    </div>
                  )}

                  {project.icon === "circle-open" && (
                    <div className="relative w-16 h-16 rounded-full border-[6px] border-black flex items-center justify-center">
                       <div className="w-3 h-3 rounded-full bg-[#f4f4f4] absolute -bottom-2 -right-2 border-2 border-black"></div>
                    </div>
                  )}
                </div>

                {/* Judul */}
                <h3 className="text-2xl font-semibold text-[#111] leading-tight mb-4 whitespace-pre-line group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                {/* Deskripsi */}
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL DETAIL PROJECT (FLOATING EDITORIAL) ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f4f4f4] w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-300 flex flex-col md:flex-row rounded-none"
            >
              
              {/* --- KOLOM KIRI: KONTEN TEKS --- */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
                <div>
                  {/* Kategori */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                    {selectedProject.category}
                  </p>
                  
                  {/* Judul Besar */}
                  <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-[1.1] mb-8 uppercase tracking-tighter">
                    {selectedProject.title}
                  </h2>

                  {/* Deskripsi */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-12 max-w-md">
                    {selectedProject.description}
                  </p>

                  {/* Metadata (Garis & Teks) */}
                  <div className="grid grid-cols-2 gap-8 border-t border-gray-300 pt-6 mb-12">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">Launch Year</p>
                      <p className="text-2xl font-light text-[#111]">{selectedProject.year}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Code</p>
                      <p className="text-2xl font-light text-[#111]">{selectedProject.code}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Tombol */}
                <div className="border-t border-gray-300 pt-6">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-gray-300 text-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#111] text-white py-3 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>

              {/* --- KOLOM KANAN: VISUAL / GAMBAR --- */}
              <div className="w-full md:w-1/2 bg-white border-l border-gray-300 relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 overflow-hidden">
                {/* Ornamen Blueprint/Teknis (Pengganti Gambar) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Garis Teknis Tengah */}
                <div className="relative z-10 flex flex-col items-center">
                   <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/80">
                      <path d="M100 10 L100 290" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                      <path d="M40 50 L160 50" stroke="currentColor" strokeWidth="1"/>
                      <path d="M50 100 L150 100" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="100" cy="150" r="40" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="100" cy="150" r="10" fill="currentColor"/>
                      <path d="M60 200 L140 200" stroke="currentColor" strokeWidth="1"/>
                      <path d="M80 250 L120 250" stroke="currentColor" strokeWidth="1"/>
                      <text x="110" y="55" fill="currentColor" fontSize="8" fontFamily="monospace">SYS.01</text>
                      <text x="110" y="105" fill="currentColor" fontSize="8" fontFamily="monospace">CORE</text>
                      <text x="110" y="205" fill="currentColor" fontSize="8" fontFamily="monospace">DATA</text>
                   </svg>
                </div>
                
                {/* Overlay Teks Vertikal */}
                <div className="absolute bottom-8 right-8 z-10">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>
                    Design & Development
                  </p>
                </div>
              </div>

              {/* Tombol Close (Pojok Kanan Atas) */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-[#f4f4f4] md:bg-transparent border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors z-50 rounded-none"
              >
                <X size={20} className="text-gray-600" />
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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