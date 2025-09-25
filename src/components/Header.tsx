"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Заборона скролу при відкритому меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/media/Vector.png" alt="Hair Hosp" width={56} height={56} className="rounded w-7 h-7" priority />
          <span className="text-lg font-bold text-gray-900">
            <span className="text-[#0F72FE]">Hair</span> <span className="font-bold">Hosp</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <button className="p-2 text-blue-600 hover:text-blue-700">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </button>
          {!isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="p-2 bg-blue-600 rounded text-white hover:bg-blue-700"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* Затемнення фону */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
          onClick={closeMenu}
        />
      )}

      {/* Бургер-меню */}
      <div
        className={`fixed top-0 right-0 w-72 bg-white rounded-bl-2xl shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ maxHeight: "90vh" }} // щоб не на всю висоту
      >
        {/* Шапка меню */}
        <div className="flex items-center justify-end p-4 border-b border-gray-100">
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Пункти меню */}
        <nav className="flex flex-col p-4 pt-6">
          <Link
            href="/#gallery"
            onClick={closeMenu}
            className="py-4 text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            Galeria Przed i Po
          </Link>
          <Link
            href="/#surgeons"
            onClick={closeMenu}
            className="py-4 text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            Nasi Chirurdzy
          </Link>
          <Link
            href="/#why-us"
            onClick={closeMenu}
            className="py-4 text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            Dlaczego My?
          </Link>
          <Link
            href="/#process"
            onClick={closeMenu}
            className="py-4 text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            Proces Leczenia
          </Link>
          <Link
            href="/#packages"
            onClick={closeMenu}
            className="py-4 text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            Cena I Pakiety
          </Link>
        </nav>

        {/* Divider */}
        <div className="mx-4 h-px bg-gray-200" />

        {/* Contact section */}
        <div className="p-4 flex flex-col items-start gap-3">
          <a href="tel:+48459567415" className="text-lg text-gray-900 font-medium tracking-wide">
            +48459567415
          </a>
          <a
            href="https://wa.me/48459567415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/media/whatsapp.png" 
              alt="WhatsApp" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </>
  );
}
