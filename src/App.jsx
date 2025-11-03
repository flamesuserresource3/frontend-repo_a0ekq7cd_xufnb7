import Hero from "./components/Hero";
import AboutSections from "./components/AboutSections";
import ContentGrid from "./components/ContentGrid";
import MembersProducts from "./components/MembersProducts";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />
            Forum Mahasiswa Gunung Kaler
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#tentang" className="hover:text-emerald-700">Tentang</a>
            <a href="#berita" className="hover:text-emerald-700">Berita</a>
            <a href="#artikel" className="hover:text-emerald-700">Artikel</a>
            <a href="#anggota" className="hover:text-emerald-700">Anggota</a>
            <a href="#produk" className="hover:text-emerald-700">Produk</a>
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
      <footer className="mt-auto border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Forum Mahasiswa Gunung Kaler. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#berita" className="hover:text-gray-900">Berita</a>
            <a href="#artikel" className="hover:text-gray-900">Artikel</a>
            <a href="#produk" className="hover:text-gray-900">Produk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
