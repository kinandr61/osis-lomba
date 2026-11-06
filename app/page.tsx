const daftarLomba = [
  { id: 1, nama: "Olimpiade Matematika", bidang: "Sains", deadline: "30 Nov 2026" },
  { id: 2, nama: "Lomba Karya Tulis Ilmiah", bidang: "Sains", deadline: "5 Des 2026" },
  { id: 3, nama: "Festival Seni Pelajar", bidang: "Seni", deadline: "12 Des 2026" },
];

export default function Beranda() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">Lomba dan Olimpiade</h1>
      <p className="mt-2 text-gray-600">Pilih lomba, daftar, dan raih prestasi.</p>

      <div className="mt-6 space-y-4">
        {daftarLomba.map((lomba) => (
          <div key={lomba.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">{lomba.nama}</h2>
            <p className="text-sm text-gray-500">
              {lomba.bidang} · Deadline {lomba.deadline}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
