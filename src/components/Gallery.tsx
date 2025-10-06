"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export function Gallery() {
  const images = [
    { src: "/media/Frame 1000007011.png", alt: "Przed" },
    { src: "/media/Group 1000007012.png", alt: "Po" },
    { src: "/media/Group 1000007024.png", alt: "Galeria 1" },
    { src: "/media/Group 1000007024.png", alt: "Galeria 2" },
    { src: "/media/Group 1000007024.png", alt: "Galeria 3" },
  ];
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  function onTouchStart(e: React.TouchEvent) {
    e.preventDefault();
    startX.current = e.touches[0].clientX;
    setDragOffset(0);
    setIsDragging(true);
  }
  
  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging || startX.current == null) return;
    e.preventDefault();
    const dx = e.touches[0].clientX - startX.current;
    setDragOffset(dx);
  }
  
  function onTouchEnd() {
    if (startX.current == null) return;
    const threshold = 50; // px
    if (dragOffset > threshold && index > 0) setIndex(index - 1);
    else if (dragOffset < -threshold && index < images.length - 1) setIndex(index + 1);
    startX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  }

  function onMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    startX.current = e.clientX;
    setDragOffset(0);
    setIsDragging(true);
  }
  
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || startX.current == null) return;
    e.preventDefault();
    const dx = e.clientX - startX.current;
    setDragOffset(dx);
  }
  
  function onMouseUp() {
    if (startX.current == null) return;
    const threshold = 50; // px
    if (dragOffset > threshold && index > 0) setIndex(index - 1);
    else if (dragOffset < -threshold && index < images.length - 1) setIndex(index + 1);
    startX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  }

  return (
    <section className="text-center px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeria Przed i Po</h2>

      <div
        className="relative overflow-hidden rounded-2xl select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galeria Przed i Po"
      >
        <div
          className={`flex ${isDragging ? "" : "transition-transform duration-300"}`}
          style={{ transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full">
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={1600}
                className="w-full h-auto pointer-events-none"
                draggable={false}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          aria-label="previous slide"
          onClick={() => index > 0 && setIndex(index - 1)}
          className="absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 disabled:opacity-30 disabled:pointer-events-none"
          disabled={index === 0}
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          aria-label="next slide"
          onClick={() => index < images.length - 1 && setIndex(index + 1)}
          className="absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 disabled:opacity-30 disabled:pointer-events-none"
          disabled={index === images.length - 1}
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
}


