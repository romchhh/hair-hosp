"use client";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[28px] p-5 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.25),0_20px_40px_-20px_rgba(0,0,0,0.25)]">
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
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="flex-1 bg-[#0B2546] text-white py-3 rounded-[28px] font-medium text-center hover:opacity-90 transition-opacity"
          >
            Uzyskaj Konsultację
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsModalOpen(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 z-10">
                <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="max-h-[90vh] overflow-auto">
                <ContactForm isModal={true} onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


