"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const qas: QA[] = [
  {
    q: "Jakie metody przeszczepu włosów stosujecie i czym się różnią?",
    a: "Stosujemy nowoczesne metody FUE i DHI. FUE to klasyczny przeszczep pojedynczych mieszków włosowych, DHI to precyzyjna technika z minimalnym urazem skóry. Metoda dobierana jest indywidualnie przez lekarza.",
  },
  {
    q: "Czy zabieg jest bolesny i jakie znieczulenie się stosuje?",
    a: "Zabieg wykonujemy w znieczuleniu miejscowym z możliwością sedacji, dzięki czemu jest komfortowy i bezbolesny.",
  },
  {
    q: "Jak długo trzeba zostać w Turcji po przeszczepie włosów?",
    a: "Standardowo pobyt trwa około 3 dni: konsultacja, zabieg i kontrola następnego dnia.",
  },
  {
    q: "Czy przeszczep włosów daje trwały efekt?",
    a: "Tak. Przeszczepione mieszki po okresie rekonwalescencji rosną naturalnie i trwale.",
  },
  {
    q: "Czy będzie wsparcie w języku polskim na każdym etapie procesu?",
    a: "Tak, zapewniamy opiekę polskojęzycznego koordynatora przed, w trakcie i po zabiegu.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 mt-8">
      <h2 className="text-3xl font-extrabold text-center mb-4">Często zadawane pytania</h2>
      <div className="space-y-3">
        {qas.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={
                "rounded-2xl border " +
                (isOpen
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white")
              }
            >
              <button
                className="w-full flex items-center justify-between text-left p-4"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="font-semibold text-gray-900">{item.q}</span>
                <span className={"w-9 h-9 rounded-full flex items-center justify-center shrink-0 " + (isOpen ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600")}>
                  <svg className={"w-4 h-4 transform transition-transform " + (isOpen ? "rotate-180" : "rotate-0")} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-gray-700">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}


