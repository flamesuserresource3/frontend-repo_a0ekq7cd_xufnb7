import Hero from "./components/Hero";
import AboutSections from "./components/AboutSections";
import ContentGrid from "./components/ContentGrid";
import MembersProducts from "./components/MembersProducts";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0b1b3a] via-[#151a55] to-[#3b0b5e] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/90" />
            Forum Mahasiswa Gunung Kaler
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#tentang" className="hover:text-white">Tentang</a>
            <a href="#berita" className="hover:text-white">Berita</a>
            <a href="#artikel" className="hover:text-white">Artikel</a>
            <a href="#anggota" className="hover:text-white">Anggota</a>
            <a href="#produk" className="hover:text-white">Produk</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* About: Sejarah, Visi, Misi */}
      <AboutSections />

      {/* Berita & Artikel */}
      <ContentGrid />

      {/* Anggota & Produk */}
      <MembersProducts />

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-white/10 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Forum Mahasiswa Gunung Kaler. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#berita" className="hover:text-white">Berita</a>
            <a href="#artikel" className="hover:text-white">Artikel</a>
            <a href="#produk" className="hover:text-white">Produk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
