export default function TermsPage() {
  return (
    <main>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Regulamin</h1>
          <p className="text-gray-600">Ostatnia aktualizacja: 1 stycznia 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Postanowienia Ogólne</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Niniejszy Regulamin określa warunki korzystania z usług świadczonych przez Hair Hosp 
              oraz korzystania z naszej strony internetowej. Korzystanie z naszych usług oznacza 
              akceptację postanowień niniejszego Regulaminu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Definicje</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Hair Hosp</strong> - podmiot świadczący usługi z zakresu transplantacji włosów
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Pacjent</strong> - osoba fizyczna korzystająca z usług Hair Hosp
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Usługi</strong> - wszelkie usługi medyczne świadczone przez Hair Hosp
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Strona internetowa</strong> - witryna internetowa Hair Hosp dostępna pod adresem hairhosp.com
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Zakres Usług</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hair Hosp świadczy następujące usługi:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Konsultacje przed zabiegami transplantacji włosów</li>
              <li>Zabiegi transplantacji włosów metodą FUE</li>
              <li>Zabiegi transplantacji włosów metodą DHI</li>
              <li>Zabiegi transplantacji włosów metodą Sapphire FUE</li>
              <li>Kontrolne wizyty po zabiegach</li>
              <li>Doradztwo w zakresie pielęgnacji włosów</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Warunki Skorzystania z Usług</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Wymagania wobec pacjenta:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Osiągnięcie pełnoletności (18 lat)</li>
                  <li>Dostarczenie dokumentacji medycznej</li>
                  <li>Przebycie konsultacji przed zabiegiem</li>
                  <li>Spełnienie kryteriów medycznych</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Proces kwalifikacji:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Wstępna konsultacja online lub telefoniczna</li>
                  <li>Wizyta konsultacyjna w klinice</li>
                  <li>Badania medyczne (jeśli wymagane)</li>
                  <li>Planowanie zabiegu</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Ceny i Płatności</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Konsultacje:</strong> Bezpłatne
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Zabiegi transplantacji:</strong> Od 1835€
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Metody płatności:</strong> Gotówka, przelew bankowy, karta płatnicza
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Zaliczki:</strong> Wymagana zaliczka w wysokości 30% wartości zabiegu
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Odwołanie i Przełożenie</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Odwołanie wizyty:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Bezpłatne odwołanie do 48 godzin przed wizytą</li>
                  <li>Odwołanie w ciągu 24-48 godzin: 50% opłaty</li>
                  <li>Odwołanie w ciągu 24 godzin: 100% opłaty</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Przełożenie wizyty:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Bezpłatne przełożenie do 72 godzin przed wizytą</li>
                  <li>Przełożenie w ciągu 24-72 godzin: 25% opłaty</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Odpowiedzialność</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Odpowiedzialność Hair Hosp:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Świadczenie usług zgodnie ze standardami medycznymi</li>
                  <li>Zachowanie poufności danych medycznych</li>
                  <li>Profesjonalne podejście do pacjenta</li>
                  <li>Zapewnienie bezpieczeństwa podczas zabiegów</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Odpowiedzialność pacjenta:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Przekazanie prawdziwych informacji medycznych</li>
                  <li>Przestrzeganie zaleceń po zabiegu</li>
                  <li>Punktualne stawianie się na wizyty</li>
                  <li>Terminowe dokonywanie płatności</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Reklamacje</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              W przypadku reklamacji prosimy o kontakt:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Dział Obsługi Klienta</strong></p>
              <p className="text-gray-600">E-mail: inbox@uamedtours.com</p>
              <p className="text-gray-600">Telefon: +48459567415</p>
              <p className="text-gray-600">Termin rozpatrzenia: do 14 dni roboczych</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Postanowienia Końcowe</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Prawo właściwe:</strong> Stosuje się prawo polskie
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Rozstrzyganie sporów:</strong> Sądy właściwe dla siedziby Hair Hosp
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Zmiany regulaminu:</strong> Hair Hosp zastrzega sobie prawo do wprowadzania zmian
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Niezgodność postanowień:</strong> W przypadku niezgodności obowiązuje prawo polskie
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Kontakt</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Hair Hosp</strong></p>
              <p className="text-gray-600">E-mail: inbox@uamedtours.com</p>
              <p className="text-gray-600">Telefon: +48459567415</p>
              <p className="text-gray-600">Godziny pracy: Pon-Pt 9:00-18:00</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
