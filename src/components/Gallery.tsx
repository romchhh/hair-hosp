"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export function Gallery() {
  const images = [
    { src: "/media/Group 1000007011 2.png", alt: "Przed" },
    { src: "/media/Group 1000007012 2.png", alt: "Po" },
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

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${index === i ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


