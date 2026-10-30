import Link from "next/link";
import { 
  MessageCircle, 
  Globe, 
  PenTool, 
  Briefcase, // Ganti Linkedin dengan Briefcase
  Send, 
  Mail, 
  ArrowLeft,
  ArrowRight 
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] text-[#333] py-16 px-6 md:px-12 flex flex-col items-center">
      
      {/* ================= SECTION ATAS (Sesuai Gambar) ================= */}
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        {/* Social Icons Container */}
        <div className="flex flex-wrap justify-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 mb-12">
{[
  { icon: <MessageCircle size={18} className="text-green-500" />, color: "bg-green-50" },
  { icon: <Globe size={18} className="text-blue-500" />, color: "bg-blue-50" },
  { icon: <PenTool size={18} className="text-gray-800" />, color: "bg-gray-100" },
  { icon: <Globe size={18} className="text-orange-500" />, color: "bg-orange-50" },
  { icon: <Briefcase size={18} className="text-blue-600" />, color: "bg-blue-50" }, // Ini yang diubah
  { icon: <Send size={18} className="text-sky-500" />, color: "bg-sky-50" },
  { icon: <Mail size={18} className="text-red-500" />, color: "bg-red-50" },
].map((item, index) => (
  // ... kode di bawahnya tetap sama
            <div key={index} className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer hover:scale-110 transition-transform ${item.color}`}>
              {item.icon}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex items-center gap-3 mb-12">
          <Link href="/" className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-white border border-gray-200 py-1.5 px-4 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <ArrowLeft size={14} />
            back
          </Link>
        </div>

        {/* Content Text */}
        <div className="w-full space-y-6 text-[15px] leading-relaxed text-gray-800">
          <p>Hi there 👋</p>
          
          <p>
            I'm an award-winning marketing and creative director with 10+ years of leadership experience across agencies (ex <strong className="font-semibold">BBDO</strong> / <strong className="font-semibold">DOJO</strong> startups & corporations (ex <strong className="font-semibold">Yandex</strong> / <strong className="font-semibold">Afrosa</strong>).
          </p>

          <p>
            Over the past years, I've worked in marketing and advertising, handling projects for 50+ brands, including <strong className="font-semibold">IKEA, Nike, Adidas, Audi, Uniqlo, McD, Nestle, Uber</strong> and others.
          </p>

          <p>
            My contributions and projects have 100+ global awards including Cannes Lions, Webby, Effie, Clio, Red Dot and others.
          </p>

          <p>
            Now I'm cmo @ staya and continue advise startups on marketing, work as a creative director on-demand for brands and ad agencies.
          </p>

          <p>
            I craft marketing & business models, product strategies, help launch new stuff, manage fundraising and produce various types of content.
          </p>

          <p>
            Member of <strong className="font-semibold">IADAS</strong>, as well as a judge for The Webby Awards.
          </p>
        </div>

        {/* Let's Connect Text */}
        <div className="w-full mt-16 mb-24">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase">
            Let's connect
          </p>
        </div>
      </div>

      {/* ================= SECTION BARU DI BAWAHNYA ================= */}
      {/* Saya menambahkan section "Selected Works" agar halaman tidak kosong di bawah */}
      
      <div className="w-full max-w-4xl mt-12 pt-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Selected Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="h-40 bg-gray-100 rounded-xl mb-4 group-hover:bg-gray-200 transition-colors"></div>
            <h3 className="font-semibold text-lg">Global Marketing Campaign</h3>
            <p className="text-sm text-gray-500 mt-1">Strategy, Creative Direction</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="h-40 bg-gray-100 rounded-xl mb-4 group-hover:bg-gray-200 transition-colors"></div>
            <h3 className="font-semibold text-lg">Startup Rebranding</h3>
            <p className="text-sm text-gray-500 mt-1">Brand Identity, Web Design</p>
          </div>
        </div>

        {/* Tombol Next Page */}
        <div className="flex justify-center mt-12">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
            Next Page
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </main>
  );
}