import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-white px-6 py-10 mt-12 rounded-t-3xl" style={{ backgroundColor: "#0B2546" }}>
      {/* Logo */}
      <div className="text-center mb-6">
        <Link href="/" className="flex items-center justify-center gap-3 mb-2">
          <Image src="/media/Vector2.png" alt="Hair Hosp" width={56} height={56} className="w-7 h-7" />
          <h3 className="text-xl font-bold">
            <span className="text-[#0F72FE]">Hair</span> <span className="font-bold">Hosp</span>
          </h3>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-5 mb-8 text-center">
        <Link href="/#gallery" className="block text-white text-[15px] hover:text-blue-200 transition-colors">
          Galeria Przed i Po
        </Link>
        <Link href="/#surgeons" className="block text-white text-[15px] hover:text-blue-200 transition-colors">
          Nasi Chirurdzy
        </Link>
        <Link href="/#why-us" className="block text-white text-[15px] hover:text-blue-200 transition-colors">
          Dlaczego My?
        </Link>
        <Link href="/#process" className="block text-white text-[15px] hover:text-blue-200 transition-colors">
          Proces Leczenia
        </Link>
        <Link href="/#packages" className="block text-white text-[15px] hover:text-blue-200 transition-colors">
          Cena I Pakiety
        </Link>
      </nav>

      {/* Divider */}
      <div className="border-t mb-6" style={{ borderColor: "rgba(255,255,255,0.35)" }}></div>

      {/* Copyright and Legal */}
      <div className="text-center text-sm space-y-2">
        <p>Copyright © 2025 Hair Hosp</p>
        <p>All Rights Reserved</p>
        <div className="flex justify-center items-center gap-2 mt-4">
          <Link href="/terms" className="underline hover:text-blue-200 transition-colors">
            Terms and Conditions
          </Link>
          <span className="text-white/50">|</span>
          <Link href="/privacy" className="underline hover:text-blue-200 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
