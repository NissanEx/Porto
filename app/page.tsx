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
  MessageCircle, 
  Globe, 
  Send, 
  Mail, 
  X, 
  Check,
 ArrowUpRight,
  Scaling,
  // Section 4 (versi lama)
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  // Section 5 (PROJECTS)
  BookOpen,
  Library,
  Gamepad2,
  Landmark,
  GitBranch,
  ExternalLink,
  BarChart3,
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
    title: "Leeyah\nAI",
    description: "An academic journal search engine paired with a research notebook. Built with Next.js, Supabase, and TipTap.",
    icon: BookOpen,
    repo: "https://github.com/NissanEx/leeyah-ai", // GANTI
  },
  {
    id: "p2",
    title: "Komiknet\nComic Reader",
    description: "A comic reading website powered by the MangaDex API, built with Next.js and deployed on Cloudflare.",
    icon: Library,
    repo: "https://github.com/NissanEx/komiknet", // GANTI
  },
  {
    id: "p3",
    title: "HindieGame\n2D RPG",
    description: "A 2D RPG made in Godot 4.5 with school life, quests, and an algebra quiz mechanic.",
    icon: Gamepad2,
    repo: "https://github.com/NissanEx/HindieGame", // GANTI
  },
  {
    id: "p4",
    title: "Public Sentiment\nAnalysis",
    description: "A sentiment analysis of social media conversations about government programs and performance. Data is scraped from Facebook, Instagram, TikTok, and X, then classified as positive, neutral, or negative.",
    icon: BarChart3,
    repo: "https://github.com/NissanEx/analisa-kinerja-prabowo",
  },
  {
    id: "p5",
    title: "ExSan\nVillage Platform",
    description: "A web system for the Kalumbatan village government, built to make village administration more accessible.",
    icon: Landmark,
    repo: "https://github.com/NissanEx/exsan", // GANTI
  },
];
const WORK_PROCESS = [
  {
    id: "w1",
    phase: "PHASE 01",
    title: "Discovery",
    description: "Mendengarkan ide, memahami visi, dan menganalisis kebutuhan bisnis Anda sebelum menyentuh baris kode pertama.",
    checklist: "Riset & Analisis",
    iconType: "bulb"
  },
  {
    id: "w2",
    phase: "PHASE 02",
    title: "Design",
    description: "Merancang antarmuka (UI) yang estetis dan pengalaman pengguna (UX) yang intuitif, memastikan navigasi yang mulus.",
    checklist: "UI/UX Prototyping",
    iconType: "pen"
  },
  {
    id: "w3",
    phase: "PHASE 03",
    title: "Develop",
    description: "Mengubah desain menjadi kode yang bersih, cepat, responsif, dan mudah dikelola menggunakan teknologi modern.",
    checklist: "Clean Code & Fast",
    iconType: "code"
  },
  {
    id: "w4",
    phase: "PHASE 04",
    title: "Deliver",
    description: "Melakukan pengujian akhir, proses rilis (deploy) ke server, dan memastikan semuanya berjalan sempurna.",
    checklist: "Launch & Support",
    iconType: "rocket"
  }
];
export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    
    <main className="w-full bg-[#f4f4f4] text-[#111] overflow-x-hidden">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6">
        
        <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-8 z-50">
          <div className="text-sm tracking-[0.4em] font-bold uppercase">
            Portfo<span className="text-gray-400">lio</span>
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
    I am a UI developer and a proud descendant of the Bajo people, the sea nomads whose lives have always been tied to the ocean. Growing up with that heritage taught me to read currents, adapt to change, and keep moving forward, and I carry that mindset into every interface I build.
  </p>
  <p>
    By day I am a Mahasigma, a computer science student who turns late nights, strong coffee, and stubborn curiosity into real projects. I care about clean layouts, honest design, and building things that actually work for the people who use them.
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
            Notes from a Mahasigma
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#222] mb-8 leading-tight tracking-tight">
            Planning for the unplanned
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              My ancestors, the Bajo people, lived on the sea. They knew there are two kinds of days: the voyage you planned, and the weather you didn't.
            </p>
            <p>
              Planned work is the voyage. It's the assignment with a deadline, the project with a roadmap, the feature I've sketched out in advance. I know where I'm headed, what I need, and when I'm setting off.
            </p>
            <p>
              Unplanned work is the weather. It shows up as a sudden bug, a last-minute revision, or a server that goes down the night before a deadline. It's never really a surprise, because I know the waves will come. I just don't know when, or how big. The only certainty is that they will arrive.
            </p>
            <p>
              As a student and UI developer, I've learned the Bajo way: don't fight the sea, learn to read it, and leave room in the plan for it.
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
              <text x="180" y="225" className="text-xs fill-gray-400">The sea</text>

              <circle cx="370" cy="220" r="130" stroke="#d1d5db" strokeWidth="1.5" />
              <text x="410" y="225" className="text-xs fill-gray-400">My task list</text>

              <circle cx="370" cy="220" r="130" fill="url(#diagonalHatch)" clipPath="url(#leftCircleClip)" />

              <text x="50" y="90" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">Sudden</text>
              <text x="50" y="105" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">waves</text>
              <path d="M 110 120 Q 150 160 170 190" stroke="#9ca3af" strokeWidth="1" fill="none" />
              <polygon points="168,185 173,192 165,195" fill="#9ca3af" />

              <text x="450" y="90" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">Outdated</text>
              <text x="450" y="105" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">charts and</text>
              <text x="450" y="120" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">old notes</text>
              <path d="M 490 140 Q 450 160 430 190" stroke="#9ca3af" strokeWidth="1" fill="none" />
              <polygon points="432,185 427,192 435,195" fill="#9ca3af" />

              <text x="310" y="470" textAnchor="middle" className="text-[10px] font-medium fill-gray-500 uppercase tracking-wide">Next steps</text>
              <path d="M 310 450 Q 315 390 310 330" stroke="#9ca3af" strokeWidth="1" fill="none" />
              <polygon points="308,335 312,328 316,335" fill="#9ca3af" />
            </svg>
          </motion.div>
        </motion.div>
      </section>


      {/* ================= SECTION 4: WORK PROCESS & COMMITMENT (STACKED CARDS) ================= */}
          {/* ================= SECTION 4: WORK PROCESS & COMMITMENT (STACKED CARDS) ================= */}
      <section className="w-full py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-[#f4f4f4] relative overflow-hidden min-h-[800px]">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 z-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-2">How I Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111]">My Commitment & Process</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base mb-6">
            Membangun produk digital bukan hanya soal menulis kode, tapi tentang memahami masalah dan memberikan solusi terbaik.
          </p>
          
          {/* Tombol Toggle */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest text-gray-600 hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            {isExpanded ? "Stack Cards" : "Expand Process"}
            <ArrowUpRight size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>

        {/* Container Animasi Kartu */}
        <div 
          className={`relative w-full max-w-7xl flex items-center justify-center transition-all duration-700 ease-in-out ${isExpanded ? 'h-auto mt-12' : 'h-[400px] md:h-[450px]'}`}
          onClick={() => !isExpanded && setIsExpanded(true)} // Klik area kosong untuk expand
        >
          
          {/* PERBAIKAN: Menggunakan Grid 1x1 (place-items-center) saat belum di-expand */}
          <div className={`w-full transition-all duration-500 ${isExpanded ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative' : 'grid grid-cols-1 place-items-center absolute inset-0'}`}>
            
            {WORK_PROCESS.map((item, index) => {
              // Kalkulasi posisi tumpukan ala buku (cascade ke kanan bawah)
              const stackOffsetX = index * 15; // Geser kanan
              const stackOffsetY = index * 15; // Geser bawah
              const stackZIndex = 40 - index; // Kartu index 0 di paling atas

              return (
                <motion.div 
                  key={item.id}
                  layout 
                  animate={
                    isExpanded 
                      ? { x: 0, y: 0, rotate: 0, zIndex: 10 + index } // Menyebar (Grid)
                      : { x: stackOffsetX, y: stackOffsetY, rotate: 0, zIndex: stackZIndex } // Menumpuk (Stack)
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  onClick={(e) => {
                    if (!isExpanded) {
                      e.stopPropagation();
                      setIsExpanded(true);
                    }
                  }}
                  // PERBAIKAN: Saat stack, paksa semua ada di cell grid yang sama ([grid-area:1/1])
                  className={`group relative cursor-pointer ${!isExpanded ? 'w-[85%] max-w-[320px] [grid-area:1/1]' : 'w-full'}`}
                >
                  {/* EFEK KERTAS TEBAL (STACKED PAPER) */}
                  <div className="absolute inset-0 bg-gray-300 translate-x-1 translate-y-1 border border-gray-400 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
                  
                  {/* KERTAS UTAMA */}
                  <div className="relative bg-white border border-gray-400 flex flex-col h-full overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow-xl">
                    
                    {/* Bagian Atas: Blok Hitam */}
                    <div className="bg-[#111111] p-6 text-white relative">
                      <div className="absolute top-4 right-4 flex gap-1">
                        <div className="w-1 h-1 bg-white/50"></div>
                        <div className="w-1 h-1 bg-white/50"></div>
                        <div className="w-1 h-1 bg-white/50"></div>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-gray-400 block mb-2">{item.phase}</span>
                      <h3 className="text-2xl font-bold uppercase tracking-wide">{item.title}</h3>
                    </div>

                    {/* Bagian Tengah: Kotak Visual */}
                    <div className="h-24 bg-gray-100 border-y border-gray-300 flex items-center justify-center overflow-hidden grayscale relative">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                      <div className="relative z-10 text-black">
                        {item.iconType === 'bulb' && <Lightbulb size={40} strokeWidth={1} />}
                        {item.iconType === 'pen' && <PenTool size={40} strokeWidth={1} />}
                        {item.iconType === 'code' && <Code2 size={40} strokeWidth={1} />}
                        {item.iconType === 'rocket' && <Rocket size={40} strokeWidth={1} />}
                      </div>
                    </div>

                    {/* Bagian Bawah: Teks & Checklist */}
                    <div className="p-6 flex flex-col flex-grow bg-white relative">
                      <div className="absolute bottom-4 right-4 text-[8px] font-mono text-gray-300">{index + 1}.0</div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow font-light">
                        {item.description}
                      </p>
                      <div className="flex items-start gap-2 border-t border-black pt-4">
                        <div className="w-4 h-4 border border-black flex items-center justify-center shrink-0 mt-0.5">
                           <Check size={10} className="text-black" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-black">{item.checklist}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
           {/* ================= SECTION 5: EDITORIAL COLUMNS ================= */}
      <section id="works" className="w-full py-32 px-6 md:px-12 bg-[#f4f4f4] flex justify-center">
        <div className="max-w-7xl w-full">
          
          {/* Grid 5 Kolom dengan Garis Pemisah */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-b border-gray-300 divide-y md:divide-y-0 lg:divide-x divide-gray-300">
            
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.a
                  key={project.id}
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative flex flex-col pt-10 pb-12 px-6 lg:px-8 hover:bg-gray-50/50 transition-colors cursor-pointer"
                >
                  
                  {/* Area Ikon (Lucide, sesuai tema project) */}
                  <div className="h-32 mb-8 flex items-start">
                    <Icon
                      size={64}
                      strokeWidth={1.25}
                      className="text-black group-hover:scale-110 transition-transform duration-300 origin-top-left"
                    />
                  </div>

                  {/* Judul */}
                  <h3 className="text-2xl font-semibold text-[#111] leading-tight mb-4 whitespace-pre-line group-hover:text-black transition-colors">
                    {project.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Link Repo */}
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-gray-800 group-hover:text-black transition-colors">
                    <GitBranch size={14} />
                    View Repository
                    <ExternalLink size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </motion.a>
              );
            })}
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