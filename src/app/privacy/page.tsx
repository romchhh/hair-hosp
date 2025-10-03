export default function PrivacyPage() {
  return (
    <main>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Polityka Prywatności</h1>
          <p className="text-gray-600">Ostatnia aktualizacja: 1 stycznia 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Wprowadzenie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hair Hosp z szacunkiem podchodzi do prywatności naszych pacjentów i jest zobowiązany 
              do ochrony ich danych osobowych. Niniejsza Polityka Prywatności opisuje, w jaki sposób 
              zbieramy, używamy i chronimy informacje o naszych pacjentach.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Zbierane Informacje</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Dane osobowe:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Imię i nazwisko</li>
                  <li>Adres e-mail</li>
                  <li>Numer telefonu</li>
                  <li>Data urodzenia</li>
                  <li>Adres zamieszkania</li>
                  <li>Informacje medyczne i historia leczenia</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Dane techniczne:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Adres IP</li>
                  <li>Typ przeglądarki</li>
                  <li>Strona internetowa, z której zostałeś przekierowany</li>
                  <li>Strony odwiedzane na naszej witrynie</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Cel Zbierania Danych</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Zbieramy dane osobowe w następujących celach:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Świadczenie usług medycznych i konsultacji</li>
              <li>Planowanie i realizacja zabiegów</li>
              <li>Komunikacja z pacjentami</li>
              <li>Wysyłanie informacji o ofercie i promocjach</li>
              <li>Przestrzeganie obowiązków prawnych</li>
              <li>Poprawa jakości naszych usług</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Podstawy Prawne</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Przetwarzamy dane osobowe na podstawie:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Zgody pacjenta (art. 6 ust. 1 lit. a RODO)</li>
              <li>Wykonania umowy o świadczenie usług medycznych (art. 6 ust. 1 lit. b RODO)</li>
              <li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
              <li>Prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Udostępnianie Danych</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nie udostępniamy danych osobowych osobom trzecim, z wyjątkiem:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Osobom upoważnionym do przetwarzania danych w imieniu Hair Hosp</li>
              <li>Organom państwowym, gdy wymaga tego prawo</li>
              <li>W przypadku wyraźnej zgody pacjenta</li>
              <li>W sytuacjach zagrożenia życia lub zdrowia</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Bezpieczeństwo Danych</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Nieautoryzowanym dostępem</li>
              <li>Utratą, zniszczeniem lub uszkodzeniem</li>
              <li>Nielegalnym przetwarzaniem</li>
              <li>Przypadkowym udostępnieniem</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Prawa Pacjenta</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Zgodnie z RODO, pacjent ma prawo do:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania nieprawidłowych danych</li>
              <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Sprzeciwu wobec przetwarzania</li>
              <li>Wycofania zgody w dowolnym momencie</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Okres Przechowywania</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, 
              zgodnie z obowiązującymi przepisami prawa medycznego i archiwizacji dokumentacji medycznej.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Kontakt</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              W przypadku pytań dotyczących Polityki Prywatności lub chęci skorzystania z praw pacjenta, 
              prosimy o kontakt:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Hair Hosp</strong></p>
              <p className="text-gray-600">E-mail: inbox@uamedtours.com</p>
              <p className="text-gray-600">Telefon: +48459567415</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Zmiany w Polityce</h2>
            <p className="text-gray-600 leading-relaxed">
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
              O wszelkich zmianach będziemy informować poprzez aktualizację daty &quot;Ostatnia aktualizacja&quot; 
              na górze tej strony.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
