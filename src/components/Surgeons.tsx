import Image from "next/image";
import Link from "next/link";

export function Surgeons() {
  const doctors = [
    { id:1, name:'Dr. Uğur ÖZDEMİR', title:'Chirurgia plastyczna rekonstrukcyjna i estetyczna', rating:'4.9', exp:'15lat Doświadczenie', patients:'1548 Pacjentów' },
    { id:2, name:'Dr. Uğur ÖZDEMİR', title:'Chirurgia plastyczna rekonstrukcyjna i estetyczna', rating:'4.8', exp:'13lat Doświadczenie', patients:'1920 pacjentów' },
  ];
  return (
    <section className="px-4 mt-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-5 mt-2 text-center">Nasi Chirurdzy</h2>
      <div className="space-y-4">
        {doctors.map((d) => (
          <div key={d.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
            <div className="shrink-0">
              {d.id === 1 ? (
                <Image src="/media/Rectangle 2033.png" alt={d.name} width={96} height={144} className="w-24 h-36 rounded-2xl object-cover" />
              ) : (
                <Image src="/media/Rectangle 37.png" alt={d.name} width={96} height={144} className="w-24 h-36 rounded-2xl object-cover" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{d.name}</h3>
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
              <div className="mt-2 text-sm">
                {(() => {
                  const [expVal, ...expRest] = d.exp.split(" ");
                  const expLbl = expRest.join(" ");
                  const [patVal, ...patRest] = d.patients.split(" ");
                  const patLbl = patRest.join(" ");
                  return (
                    <>
                      <div>
                        <span className="text-gray-900 font-medium">{expVal}</span>{" "}
                        <span className="text-gray-500">{expLbl}</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">{patVal}</span>{" "}
                        <span className="text-gray-500">{patLbl}</span>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-white rounded-2xl p-4 border border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="text-4xl font-bold text-gray-900">5<span className="text-[#0169FE]">+</span></div>
            <div>
              <div className="text-sm text-gray-900 font-semibold">Najlepszych Chirurgów</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/48459567415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat"
            >
              <Image src="/media/Group 59.png" alt="contact" width={36} height={36} className="w-9 h-9" />
            </a>
            <a href="tel:+48459567415" aria-label="Call">
              <Image src="/media/Group 58.png" alt="menu" width={36} height={36} className="w-9 h-9" />
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3">Które specjalizują się w przeszczepach włosów i są dobierane specjalnie pod kątem Twoich potrzeb i sytuacji</p>
        <Link href="#contact-form" className="mt-6 block w-full bg-[#0B2546] text-white py-3 rounded-[28px] font-medium text-center">Uzyskaj Konsultację</Link>
      </div>
    </section>
  );
}


