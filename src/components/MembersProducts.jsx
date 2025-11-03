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
    <section className="py-14 sm:py-20 bg-white" id="anggota">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Members */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900">Anggota Inti</h3>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {members.map((m, idx) => (
                <li key={idx} className="text-center">
                  <div className={`mx-auto h-16 w-16 rounded-full ${m.color} text-white flex items-center justify-center font-semibold shadow`}> 
                    {m.name.split(" ")[0]}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-900">{m.name}</p>
                  <p className="text-xs text-gray-500">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div id="produk">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900">Produk</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map((p, idx) => (
                <div key={idx} className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{p.name}</h4>
                      <p className="text-sm text-gray-500">{p.desc}</p>
                    </div>
                    <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{p.price}</span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-emerald-600 text-white py-2 text-sm font-medium hover:bg-emerald-700 transition">
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
