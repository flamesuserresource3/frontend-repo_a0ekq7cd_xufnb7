import { Users, ShoppingBag } from "lucide-react";

const members = [
  { name: "Alya N.", role: "Ketua", color: "bg-emerald-500" },
  { name: "Rafi S.", role: "Wakil", color: "bg-sky-500" },
  { name: "Dina P.", role: "Sekretaris", color: "bg-rose-500" },
  { name: "Bima A.", role: "Bendahara", color: "bg-amber-500" },
];

const products = [
  {
    name: "Kaos Komunitas",
    price: "Rp85.000",
    desc: "Bahan cotton combed 24s, nyaman dipakai harian.",
  },
  { name: "Tote Bag", price: "Rp45.000", desc: "Kuat, simple, cocok untuk kuliah." },
  { name: "Stiker Set", price: "Rp15.000", desc: "12 desain eksklusif Forum MGK." },
];

export default function MembersProducts() {
  return (
    <section className="py-14 sm:py-20" id="anggota">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Members */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">Anggota Inti</h3>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {members.map((m, idx) => (
                <li key={idx} className="text-center">
                  <div className={`mx-auto h-16 w-16 rounded-full ${m.color} text-white/95 flex items-center justify-center font-semibold shadow-xl border border-white/10`}>
                    {m.name.split(" ")[0]}
                  </div>
                  <p className="mt-2 text-sm font-medium text-white">{m.name}</p>
                  <p className="text-xs text-white/70">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div id="produk">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white border border-white/20">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">Produk</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map((p, idx) => (
                <div key={idx} className="rounded-2xl p-5 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-white">{p.name}</h4>
                      <p className="text-sm text-white/80">{p.desc}</p>
                    </div>
                    <span className="text-sm font-semibold text-emerald-200 bg-emerald-900/30 px-2.5 py-1 rounded-full border border-emerald-300/20">{p.price}</span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-white/90 text-blue-900 py-2 text-sm font-medium hover:bg-white transition border border-white/20">
                    Pesan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
