import { Mountain, Users } from "lucide-react";

const COVER_URL =
  "https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero"
    >
      {/* Background cover image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${COVER_URL})` }}
        aria-hidden
      />
      {/* Soft gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-fuchsia-900/70 pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[72vh] md:min-h-[82vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur-md text-white/90 border border-white/20">
              <Users className="h-4 w-4" />
              <span>Komunitas Aktif • Kolaboratif • Inklusif</span>
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow">
              Forum Mahasiswa
              <span className="block">Gunung Kaler</span>
            </h1>
            <p className="mt-4 md:mt-5 text-white/90 max-w-xl">
              Ruang berkarya dan berjejaring bagi mahasiswa Gunung Kaler untuk
              membangun inisiatif, berdampak sosial, dan menumbuhkan potensi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#berita"
                className="inline-flex items-center gap-2 rounded-lg bg-white/90 text-blue-900 px-4 py-2 font-medium shadow-lg hover:shadow-xl transition border border-white/20"
              >
                Lihat Berita
              </a>
              <a
                href="#anggota"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15"
              >
                Gabung Komunitas
              </a>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="aspect-square md:aspect-[4/3] w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <Mountain className="h-24 w-24 md:h-32 md:w-32 text-white/90" />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <div className="rounded-2xl bg-white/10 px-4 py-2 text-sm backdrop-blur-xl shadow border border-white/20 text-white/90">
                "Bergerak Bersama, Tumbuh Bersama"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
