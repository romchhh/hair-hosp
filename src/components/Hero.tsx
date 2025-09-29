"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  return (
    <section className="text-center mb-6 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">
        Marzenie o bujnych<br />
        włosach <span className="italic font-normal text-gray-600">staje się<br />
        rzeczywistością</span>
      </h1>

      <div className="flex items-center justify-center gap-2 mb-4 mt-6">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#FCAF17]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-bold text-gray-900">4.85 z 5</span>
        <span className="text-sm text-gray-600">(na podstawie 5209 ocen)</span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#3D8CFF" }}>
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>20 lat doświadczenia</span>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#3D8CFF" }}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>zabiegi do 1835€</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#3D8CFF" }}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>FUE, DHI, Sapphire FUE</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#3D8CFF" }}>
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span>VIP transfer bez zmartwień.</span>
        </div>
      </div>

      <button onClick={() => setIsModalOpen(true)} className="w-full bg-gradient-to-r from-[#207CF2D9] to-[#0169FE] text-white py-3 px-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:opacity-95 transition-colors text-sm whitespace-nowrap">
        <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
        Bezpłatna Konsultacja
      </button>
      <div className="rounded-2xl overflow-hidden mt-6">
        <Image
          src="/media/image 1.png"
          alt="Hair Hosp before and after"
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
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
    </section>
  );
}


