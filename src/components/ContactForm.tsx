"use client";

import { useState } from "react";
// Removed third-party phone inputs due to style conflicts; using a lightweight custom selector

type FormData = {
  name: string;
  phone: string;
  email: string;
};

export default function ContactForm({ isModal = false, onClose }: { isModal?: boolean; onClose?: () => void }) {
  const [data, setData] = useState<FormData>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const COUNTRIES = [
    { code: "pl", name: "Polska", dial: "+48", flag: "🇵🇱" },
    { code: "de", name: "Deutschland", dial: "+49", flag: "🇩🇪" },
    { code: "cz", name: "Česko", dial: "+420", flag: "🇨🇿" },
    { code: "sk", name: "Slovensko", dial: "+421", flag: "🇸🇰" },
    { code: "lt", name: "Lietuva", dial: "+370", flag: "🇱🇹" },
    { code: "lv", name: "Latvija", dial: "+371", flag: "🇱🇻" },
    { code: "ee", name: "Eesti", dial: "+372", flag: "🇪🇪" },
    { code: "ua", name: "Україна", dial: "+380", flag: "🇺🇦" },
  ];
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countryIdx, setCountryIdx] = useState(0); // default PL

  function validate(values: FormData) {
    const e: Partial<FormData> = {};
    if (!values.name.trim()) e.name = "Wpisz swoje imię";
    if (!values.phone.trim() || values.phone.length < 8) e.phone = "Podaj poprawny numer";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Podaj poprawny e-mail";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length !== 0) return;

    try {
      const fullPhone = `${COUNTRIES[countryIdx].dial} ${data.phone.trim()}`;
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone: fullPhone }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Send failed");
      setSubmitted(true);
      setData({ name: "", phone: "", email: "" });
      setCountryIdx(0);
    } catch {
      setSubmitted(false);
      alert("Nie udało się wysłać formularza. Spróbuj ponownie.");
    }
  }

  function fieldClass(invalid?: boolean) {
    return (
      `w-full rounded-2xl border ${isModal ? 'p-3 text-sm' : 'p-4 text-[16px]'} transition-all duration-200 ` +
      (invalid
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100") +
      " focus:outline-none"
    );
  }

  return (
    <section id="contact-form" className={`px-4 ${isModal ? 'mt-0' : 'mt-10'} relative`}>
      {!isModal && (
        <h2 className={`text-[40px] leading-[1.2] font-extrabold text-center mb-8 text-gray-800`}>
          Masz jeszcze pytania? Zadaj je nam!
        </h2>
      )}
      <form
        onSubmit={handleSubmit}
        className={`space-y-${isModal ? '4' : '6'} max-w-md mx-auto bg-white ${isModal ? 'p-4' : 'p-6'} rounded-3xl shadow-lg border border-gray-100 relative z-10 text-left`}
      >
        {isModal && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Zamknij"
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {isModal && (
          <h2 className="text-xl leading-[1.2] font-extrabold text-center -mt-1 mb-3 text-gray-800">
            Masz jeszcze pytania? Zadaj je nam!
          </h2>
        )}
        <div>
          <label className={`block ${isModal ? 'mb-2' : 'mb-3'} font-semibold text-gray-700 ${isModal ? 'text-xs' : 'text-sm'}`}>
            Twoje imię <span className="text-red-500">*</span>
          </label>
          <input
            className={fieldClass(!!errors.name)}
            placeholder="Wpisz swoje imię"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="relative">
          <label className={`block ${isModal ? 'mb-2' : 'mb-3'} font-semibold text-gray-700 ${isModal ? 'text-xs' : 'text-sm'}`}>
            Twój numer telefonu <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <button
              type="button"
              onClick={() => setIsCountryOpen((o) => !o)}
              className={(errors.phone
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-gray-50") +
                ` ${isModal ? 'h-12 px-2' : 'h-16 px-3'} flex items-center gap-2 border rounded-l-2xl ${isModal ? 'text-sm' : 'text-[15px]'}`}
              aria-haspopup="listbox"
              aria-expanded={isCountryOpen}
            >
              <span className="text-xl leading-none">{COUNTRIES[countryIdx].flag}</span>
              <span className="font-medium">{COUNTRIES[countryIdx].dial}</span>
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
            </button>
            <input
              type="tel"
              className={fieldClass(!!errors.phone) + " rounded-l-none"}
              placeholder="(123) 456-789"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          {isCountryOpen && (
            <ul
              role="listbox"
              className="absolute z-[10000] top-full left-0 mt-2 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-xl shadow-lg"
            >
              {COUNTRIES.map((c, idx) => (
                <li
                  key={c.code}
                  role="option"
                  aria-selected={idx === countryIdx}
                  onClick={() => {
                    setCountryIdx(idx);
                    setIsCountryOpen(false);
                  }}
                  className={(idx === countryIdx ? "bg-blue-50" : "") + " px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50"}
                >
                  <span className="text-xl leading-none">{c.flag}</span>
                  <span className="flex-1 text-sm text-gray-800">{c.name}</span>
                  <span className="text-sm font-medium">{c.dial}</span>
                </li>
              ))}
            </ul>
          )}
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className={`block ${isModal ? 'mb-2' : 'mb-3'} font-semibold text-gray-700 ${isModal ? 'text-xs' : 'text-sm'}`}>
            Twoje e-mail <span className="text-red-500">*</span>
          </label>
          <input
            className={fieldClass(!!errors.email)}
            placeholder="Wpisz twoje e-mail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-[#207CF2D9] to-[#0169FE] text-white ${isModal ? 'py-3 px-4' : 'py-4 px-6'} rounded-2xl font-medium flex items-center justify-center gap-3 hover:opacity-95 transition-colors ${isModal ? 'text-base' : 'text-lg'} ${isModal ? 'mt-6' : 'mt-8'}`}
        >
          <svg className="w-6 h-6 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          Bezpłatna Konsultacja
        </button>
        {submitted && (
          <div className="text-center p-4 bg-green-50 border border-green-200 rounded-2xl">
            <p className="text-green-700 font-semibold">✅ Dziękujemy! Skontaktujemy się wkrótce.</p>
          </div>
        )}
      </form>
    </section>
  );
}

