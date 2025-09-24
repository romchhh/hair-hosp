type Step = {
  num: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  { num: "01", title: "Indywidualna diagnoza i konsultacja", text: "Szczegółowa analiza włosów i skóry głowy z wykorzystaniem nowoczesnych metod. Na tej podstawie powstaje spersonalizowany plan leczenia, dopasowany wyłącznie do Ciebie." },
  { num: "02", title: "Innowacyjne znieczulenie", text: "Zaawansowane technologie całkowicie bezbolesnego znieczulenia miejscowego — abyś mógł przejść zabieg w pełnym spokoju i komforcie." },
  { num: "03", title: "Precyzyjne pobranie graftów", text: "Zabieg wykonywany z jubilerską dokładnością. Wykorzystujemy najnowsze urządzenia, aby każdy mieszek został pobrany w idealnym stanie." },
  { num: "04", title: "Ekskluzywne przechowywanie graftów", text: "Każdy graft trafia do specjalistycznych roztworów biologicznych, które zachowują jego pełną żywotność do momentu implantacji." },
  { num: "05", title: "Implantacja z naturalnym efektem linii włosów", text: "Wszczepianie graftów w nowe miejsca w taki sposób, aby linia włosów była całkowicie naturalna. Oferujemy również metodę DHI Plus Gold — dla ultradokładnego i szybkiego rezultatu." },
  { num: "06", title: "Luksusowe zakończenie: maska i mezoterapia", text: "Końcowy etap zabiegu — specjalistyczna terapia łagodząca i regeneracyjna, wspierająca gojenie skóry." },
  { num: "07", title: "Spersonalizowana opieka pooperacyjna", text: "Otrzymujesz indywidualne zalecenia dotyczące pielęgnacji, które sprawiają, że rekonwalescencja przebiega lekko i skutecznie." },
  { num: "08", title: "Kontrola i korekta", text: "Towarzyszymy Ci na każdym etapie odrastania włosów: regularne kontrole i ewentualne korekty gwarantują efekt bez kompromisów." },
];

export function Process() {
  return (
    <section className="px-4 mt-8">
      <h2 className="text-3xl font-bold text-center mb-3">Proces Leczenia</h2>
      <p className="text-center text-gray-600 leading-relaxed mb-6">
        Przeszczep włosów w Turcji w naszej klinice to nie tylko zabieg medyczny, ale wyjątkowe doświadczenie premium. Każdy etap został zaplanowany z dbałością o detale, aby zapewnić Ci pełen komfort, poczucie bezpieczeństwa i efekt, który zachwyca naturalnością i perfekcją.
      </p>

      <div className="space-y-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center font-semibold mb-3">
              {s.num}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[320px] mx-auto">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


