type Feature = {
  text: string;
};

const features: Feature[] = [
  { text: "Bezbolesny zabieg (z sedacją)" },
  { text: "Konsultacja lekarska i planowanie operacji" },
  { text: "Dostępne metody przeszczepu włosów: Sapphire FUE lub Multi DHI" },
  { text: "2 razy szybsza transplantacja z metodą Multi Implanter DHI" },
  { text: "Kompleksowe badania krwi" },
  { text: "Transfery VIP pomiędzy lotniskiem, hotelem i kliniką" },
  { text: "Zakwaterowanie w hotelu 4-gwiazdkowym (2 noce, 3 dni, ze śniadaniem)" },
  { text: "Wsparcie tłumacza przed, w trakcie i po leczeniu w klinice" },
  { text: "Leki przed- i pooperacyjne, poduszka pod szyję" },
  { text: "Szampon, pianka, serum i witamina Estethicamed Repair na 1 miesiąc" },
  { text: "Pierwsze mycie następnego dnia pianką medyczną" },
  { text: "Opatentowana mezoterapia ozonowa" },
  { text: "Laseroterapia włosów" },
  { text: "Aplikacja PRP po zabiegu" },
  { text: "1-roczna kontrola po przeszczepie włosów" },
  { text: "Certyfikat Gwarancji Satysfakcji" },
];

export function PackageCard() {
  return (
    <div className="bg-white rounded-[28px] p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
      <div className="space-y-4">
        {features.map((f, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-800 text-[15px] leading-6">{f.text}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 mt-6">
        <div className="text-3xl font-extrabold tracking-tight">1755€</div>
        <a href="#contact-form" className="flex-1 bg-[#0B2546] text-white py-3 rounded-[28px] font-medium text-center">Uzyskaj Konsultację</a>
      </div>
    </div>
  );
}


