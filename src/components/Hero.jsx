import Spline from "@splinetool/react-spline";
import { Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Interactive Spline background (full cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
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
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <p className="text-white/90 text-sm md:text-base max-w-xs">
                Nikmati latar interaktif bergaya kaca yang merespons gerakan
                kursor Anda untuk pengalaman yang modern dan imersif.
              </p>
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
