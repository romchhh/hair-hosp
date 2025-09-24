import Image from "next/image";

export function Gallery() {
  return (
    <section className="text-center px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeria Przed i Po</h2>
      <div className="flex flex-col gap-4 px-1">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden">
            <Image
              src="/media/Group 2068.png"
              alt={`Przed i po ${i}`}
              width={1200}
              height={1600}
              className="w-full h-auto"
              priority={i === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}


