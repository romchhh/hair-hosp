import Image from "next/image";

export function StatsAndAdvisor() {
  return (
    <section className="px-4">
      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
        <div className="mb-6 relative">
          <div className="text-5xl font-normal text-gray-900 mb-2">
            5.2<span className="text-blue-600">K+</span>
          </div>
          <Image
            src="/media/Group 2.png"
            alt="Patient avatars"
            width={140}
            height={56}
            className="w-auto h-14 absolute top-0 right-0"
          />
          <p className="text-sm text-gray-600 leading-relaxed mt-3 pr-16">
            Przemiany, które podarowali naszym pacjentom lekarze specjalizujący się w przeszczepach. <span className="text-blue-600 underline">Zostań jednym z nich</span>
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Wskaźnik satysfakcji klienta</h3>
          <div className="grid grid-cols-[1fr_auto] items-start gap-3 mb-4">
            <div className="text-6xl font-normal text-gray-900 mt-1">98<span className="text-blue-600">%</span></div>
            <div className="-mt-3">
              <Image
                src="/media/3d-representation-dna 1.png"
                alt="DNA pills"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </div>
            <div className="col-span-2 mt-1">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-[#207CF2D9] to-[#0B2546] h-3 rounded-full" style={{width: '98%'}}></div>
              </div>
              <div className="flex justify-end mt-1">
                <p className="text-sm text-gray-600">98<span className="text-gray-400">/100</span></p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Wynik satysfakcji naszych klientów odzwierciedla ogólne wrażenia i zadowolenie naszych klientów z naszych usług.
          </p>
        </div>

        <div className="flex items-center gap-3 p-4 bg-white rounded-2xl">
          <div className="relative">
            <Image 
              src="/media/Ellipse 22.png" 
              alt="Żaldak Julia" 
              width={56} 
              height={56} 
              className="w-14 h-14 rounded-full"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">Żaldak Julia</h4>
            <p className="text-sm text-gray-600">Osobisty doradca</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/media/Group 58.png" alt="call" width={36} height={36} className="w-9 h-9" />
            <Image src="/media/Group 59.png" alt="chat" width={36} height={36} className="w-9 h-9" />
          </div>
        </div>
      </div>
    </section>
  );
}


