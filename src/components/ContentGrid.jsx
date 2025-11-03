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
    <section className="py-14 sm:py-20 bg-gray-50" id="berita">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Newspaper className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900">Berita</h3>
            </div>
            <div className="space-y-4">
              {beritaList.map((b, idx) => (
                <article
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{b.tag}</span>
                    <span>{b.date}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold text-gray-900">{b.title}</h4>
                  <p className="mt-1 text-gray-600">{b.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="artikel">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900">Artikel</h3>
            </div>
            <div className="space-y-4">
              {artikelList.map((a, idx) => (
                <article
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition"
                >
                  <h4 className="text-lg font-semibold text-gray-900">{a.title}</h4>
                  <p className="mt-1 text-gray-600">{a.excerpt}</p>
                  <p className="mt-2 text-sm text-gray-500">Penulis: {a.author}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
