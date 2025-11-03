import { Newspaper, FileText } from "lucide-react";

const beritaList = [
  {
    title: "Pelatihan Kepemimpinan 2025",
    date: "Okt 12, 2025",
    tag: "Kegiatan",
    excerpt:
      "Forum menyelenggarakan pelatihan kepemimpinan tingkat dasar untuk seluruh anggota lintas kampus.",
  },
  {
    title: "Kolaborasi Pengabdian Desa",
    date: "Sep 29, 2025",
    tag: "Sosial",
    excerpt:
      "Program pengabdian masyarakat di Desa Gunung Kaler fokus pada literasi digital dan UMKM.",
  },
];

const artikelList = [
  {
    title: "Strategi Karier di Era Digital",
    author: "Rani Putri",
    excerpt:
      "Menyusun portofolio dan membangun jejaring profesional sejak di bangku kuliah.",
  },
  {
    title: "Kiat Memulai Usaha Kampus",
    author: "Dimas Fajar",
    excerpt:
      "Mulai dari riset pasar kecil hingga validasi produk sederhana untuk mahasiswa.",
  },
];

export default function ContentGrid() {
  return (
    <section className="py-14 sm:py-20" id="berita">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <Newspaper className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">Berita</h3>
            </div>
            <div className="space-y-4">
              {beritaList.map((b, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 hover:bg-white/15 hover:border-white/30 transition shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="px-2 py-0.5 rounded-full bg-white/15 text-white border border-white/20">{b.tag}</span>
                    <span>{b.date}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold text-white">{b.title}</h4>
                  <p className="mt-1 text-white/80">{b.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="artikel">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">Artikel</h3>
            </div>
            <div className="space-y-4">
              {artikelList.map((a, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 hover:bg-white/15 hover:border-white/30 transition shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                >
                  <h4 className="text-lg font-semibold text-white">{a.title}</h4>
                  <p className="mt-1 text-white/80">{a.excerpt}</p>
                  <p className="mt-2 text-sm text-white/70">Penulis: {a.author}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
