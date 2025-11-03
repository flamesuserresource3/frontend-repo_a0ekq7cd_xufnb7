import { Mountain, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 via-emerald-500 to-emerald-400 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs md:text-sm backdrop-blur">
            <Users className="h-4 w-4" />
            <span>Komunitas Aktif • Kolaboratif • Inklusif</span>
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Forum Mahasiswa
            <span className="block">Gunung Kaler</span>
          </h1>
          <p className="mt-4 md:mt-5 text-white/90 max-w-xl">
            Ruang berkarya dan berjejaring bagi mahasiswa Gunung Kaler untuk
            membangun inisiatif, berdampak sosial, dan menumbuhkan potensi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#berita" className="inline-flex items-center gap-2 rounded-lg bg-white text-emerald-700 px-4 py-2 font-medium shadow hover:shadow-md transition">
              Lihat Berita
            </a>
            <a href="#anggota" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2 font-medium hover:bg-white/10 transition">
              Gabung Komunitas
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-xl">
            <Mountain className="h-24 w-24 md:h-32 md:w-32" />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden md:block">
            <div className="rounded-xl bg-white/20 px-4 py-2 text-sm backdrop-blur shadow">
              "Bergerak Bersama, Tumbuh Bersama"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
