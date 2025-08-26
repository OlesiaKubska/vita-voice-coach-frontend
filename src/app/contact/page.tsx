export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Kontakt</h1>
      <p className="text-lg text-center mb-10">
        Masz pytania lub chcesz umówić się na lekcję? Skontaktuj się ze mną! 💌
      </p>

      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">📧 Email</h2>
          <p className="text-gray-700">email@gmail.com</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">📱 Telefon</h2>
          <p className="text-gray-700">+48 123 456 789</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">📍 Lokalizacja</h2>
          <p className="text-gray-700">Białystok, Polska</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="mailto:twojemail@example.com"
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Napisz do mnie
        </a>
      </div>
    </section>
  );
}
