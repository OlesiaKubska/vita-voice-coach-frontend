"use client";

export default function RegulaminPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 prose prose-pink text-[var(--brand-green)]">
      <h1 className="text-3xl font-bold mb-6">Regulamin serwisu Vity</h1>

      <p className="mb-4">
        Niniejszy Regulamin określa zasady korzystania ze strony internetowej
        prowadzonej przez Vitę – trenerkę głosu i pewności siebie, dostępnej pod
        adresem
        <a
          href="https://vita-voice-backend.onrender.com"
          className="text-blue-600 underline"
        >
          https://vita-voice-backend.onrender.com
        </a>
        (dalej: „Serwis”).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        §1 Postanowienia ogólne
      </h2>
      <ul className="list-disc pl-6">
        <li>
          Właścicielem Serwisu jest Vita (dane firmy zostaną uzupełnione).
        </li>
        <li>
          Serwis umożliwia zapisy na kursy i warsztaty wokalne oraz kontakt z
          trenerką.
        </li>
        <li>
          Każdy Użytkownik zobowiązany jest do korzystania z Serwisu w sposób
          zgodny z prawem i dobrymi obyczajami.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">§2 Usługi</h2>
      <p>
        Za pośrednictwem Serwisu Użytkownicy mogą w szczególności uzyskać
        informacje o:
      </p>
      <ul className="list-disc pl-6">
        <li>kursach wokalnych indywidualnych i grupowych,</li>
        <li>warsztatach muzycznych,</li>
        <li>możliwości rejestracji i dokonania płatności online.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        §3 Rejestracja i płatności
      </h2>
      <ul className="list-disc pl-6">
        <li>
          Rejestracja na kursy i warsztaty odbywa się za pośrednictwem
          formularza dostępnego w Serwisie.
        </li>
        <li>
          Płatności online będą realizowane poprzez zewnętrzny system płatności
          (np. PayU, Przelewy24, Stripe).
        </li>
        <li>
          Ceny usług podawane są w złotych polskich i zawierają wszelkie
          podatki.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        §4 Prawo odstąpienia od umowy
      </h2>
      <ul className="list-disc pl-6">
        <li>
          Konsument ma prawo odstąpić od umowy w terminie 14 dni od dnia jej
          zawarcia, bez podawania przyczyny.
        </li>
        <li>
          W przypadku usług, które rozpoczęły się za zgodą Konsumenta przed
          upływem terminu odstąpienia – prawo odstąpienia może nie przysługiwać.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">§5 Reklamacje</h2>
      <ul className="list-disc pl-6">
        <li>
          Użytkownik ma prawo składać reklamacje dotyczące funkcjonowania
          Serwisu lub realizacji usług.
        </li>
        <li>
          Reklamacje należy zgłaszać na adres e-mail:{" "}
          <a
            href="mailto:vkociubajlo@gmail.com"
            className="text-blue-600 underline"
          >
            vkociubajlo@gmail.com
          </a>
        </li>
        <li>
          Reklamacje będą rozpatrywane w terminie 14 dni od dnia ich otrzymania.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">§6 Prawa autorskie</h2>
      <p>
        Wszelkie materiały udostępniane w ramach kursów i warsztatów są
        chronione prawem autorskim. Zabrania się ich kopiowania i
        rozpowszechniania bez zgody Vity.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">§7 Odpowiedzialność</h2>
      <p>
        Vita nie ponosi odpowiedzialności za przerwy w działaniu Serwisu
        wynikające z przyczyn technicznych niezależnych od niej.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">§8 Kontakt</h2>
      <p>
        Kontakt z administratorem Serwisu jest możliwy pod adresem e-mail:{" "}
        <a
          href="mailto:vkociubajlo@gmail.com"
          className="text-blue-600 underline"
        >
          vkociubajlo@gmail.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        §9 Postanowienia końcowe
      </h2>
      <ul className="list-disc pl-6">
        <li>Regulamin obowiązuje od dnia publikacji na stronie Serwisu.</li>
        <li>
          Vita zastrzega sobie prawo do zmian Regulaminu, o czym Użytkownicy
          zostaną poinformowani z wyprzedzeniem.
        </li>
      </ul>
    </main>
  );
}
