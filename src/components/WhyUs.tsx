export function WhyUs() {
  const items = [
    {
      title: "20 lat doświadczenia",
      text: "Ekspercka wiedza w medycynie estetycznej i plastycznej.",
      variant: "white",
    },
    {
      title: "98% sal operacyjnych",
      text: "Efekty, które spełniają oczekiwania i budzą zaufanie.",
      variant: "white",
    },
    {
      title: "FUE, DHI, Sapphire FUE",
      text: "Najnowszechniejsze techniki przeszczepu gwarantujące naturalny wygląd.",
      variant: "primary",
    },
    {
      title: "5000+ udanych operacji",
      text: "Tysiące pacjentów, którzy odzyskali pewność siebie.",
      variant: "white",
    },
  ];

  return (
    <section className="px-4 mt-6">
      <h2 className="text-3xl font-bold text-center mb-4">Dlaczego My?</h2>
      <div className="space-y-4">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={
              it.variant === "primary"
                ? "rounded-[26px] p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                : "rounded-[26px] p-5 bg-white text-gray-900 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]"
            }
          >
            <div className="text-xl font-semibold mb-1">{it.title}</div>
            <div className={it.variant === "primary" ? "text-white/90 text-sm" : "text-gray-600 text-sm"}>
              {it.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


