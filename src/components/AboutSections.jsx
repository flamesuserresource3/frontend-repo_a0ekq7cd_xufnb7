import { BookOpen, Target, Flag } from "lucide-react";

export default function AboutSections() {
  const items = [
    {
      id: "sejarah",
      icon: BookOpen,
      title: "Sejarah",
      desc:
        "Didirikan oleh sekelompok mahasiswa pada 2016, forum ini lahir dari semangat kolaborasi untuk memajukan pendidikan, sosial, dan kewirausahaan di wilayah Gunung Kaler.",
    },
    {
      id: "visi",
      icon: Target,
      title: "Visi",
      desc:
        "Menjadi wadah penggerak generasi muda yang adaptif dan berdaya saing, dengan budaya belajar sepanjang hayat dan kepedulian terhadap masyarakat.",
    },
    {
      id: "misi",
      icon: Flag,
      title: "Misi",
      desc:
        "Mendorong kolaborasi lintas kampus, menyelenggarakan program pengembangan minat-bakat, menginisiasi proyek sosial, serta menguatkan ekosistem kewirausahaan mahasiswa.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white" id="tentang">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Tentang Organisasi
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Memperkuat jaringan mahasiswa melalui edukasi, kolaborasi, dan karya nyata.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, icon: Icon, title, desc }) => (
            <div
              key={id}
              id={id}
              className="group rounded-2xl border border-gray-200 p-6 sm:p-7 hover:border-emerald-500/40 hover:shadow-sm transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
