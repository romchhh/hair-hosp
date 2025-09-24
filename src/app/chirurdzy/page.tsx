import Link from "next/link";

export default function SurgeonsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Uğur ÖZDEMİR",
      title: "Chirurgia plastyczna rekonstrukcyjna i estetyczna",
      rating: "4.9",
      experience: "15lat Doświadczenie",
      patients: "1548 pacjentów",
    },
    {
      id: 2,
      name: "Dr. Uğur ÖZDEMİR",
      title: "Chirurgia plastyczna rekonstrukcyjna i estetyczna",
      rating: "4.8",
      experience: "13lat Doświadczenie",
      patients: "1920 pacjentów",
    },
  ];

  return (
    <div className="px-4 py-6">
      <header className="flex items-center justify-between mb-4">
        <Link href="/" className="p-2 -ml-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.707 16.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L6.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold">Nasi Chirurdzy</h1>
        <div className="w-6" />
      </header>

      <div className="space-y-4">
        {doctors.map((d) => (
          <div key={d.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
            <div className="shrink-0">
              <div className="w-24 h-28 rounded-2xl bg-gray-200" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900">{d.name}</h2>
              <p className="text-sm text-gray-600 leading-snug">{d.title}</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm font-semibold">{d.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
                <span>{d.experience}</span>
                <span>{d.patients}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


