import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-12 items-center">
        <div className="relative w-56 h-[360px] sm:w-64 sm:h-[420px] md:w-80 md:h-[480px] lg:w-[24rem] lg:h-[600px] mx-auto md:mx-0">
          <Image
            src="/images/vita-about.jpg"
            alt="Vita Kociubajło – trenerka głosu"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">O mnie 🎶</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Nazywam się <strong>Vita Kociubajło</strong>. Jestem trenerką głosu,
            dyrygentką i aktywistką muzyczną. Od lat pomagam ludziom rozwijać
            swoje umiejętności wokalne, pewność siebie i czerpać radość ze
            śpiewu. Pracowałam z chórami, młodzieżą i dorosłymi w Polsce i za
            granicą.
          </p>

          <h3 className="text-xl font-semibold mb-3">Specjalizacje:</h3>
          <ul className="grid grid-cols-2 gap-3 text-gray-800 mb-6">
            <li>🎤 Nauka śpiewu</li>
            <li>🎶 Dyrygentura</li>
            <li>💎 Rozwój osobisty</li>
            <li>🗣 Wystąpienia publiczne</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="/services"
              className="px-6 py-3 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition"
            >
              Poznaj moje usługi
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition"
            >
              Umów się na konsultację
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
