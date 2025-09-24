const services: string[] = [
  "Sedacja (85 €)",
  "Materiały jednorazowe / zużywalne (50 €)",
  "Atacity hotel (pokój jednoosobowy 55 €, dwuosobowy 60 €)",
  "Asia City (jednoosobowy 65 €, dwuosobowy 75 €)",
  "Livinton (jednoosobowy 95 €, dwuosobowy 100 €)",
];

export function AdditionalServices() {
  return (
    <section className="px-4 mt-8">
      <h2 className="text-3xl font-extrabold text-center mb-4">Usługi Dodatkowe</h2>
      <div className="bg-white rounded-[24px] p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
        <ul className="space-y-4">
          {services.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-800 text-[16px] leading-7">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


