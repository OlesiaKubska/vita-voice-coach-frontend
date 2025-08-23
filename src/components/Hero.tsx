export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-100 to-pink-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Trener Głosu i Śpiewu
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Pomagam ludziom odkrywać siłę swojego głosu i budować pewność siebie na
        scenie i w życiu codziennym.
      </p>
      <div className="space-x-4">
        <a
          href="/services"
          className="px-6 py-3 bg-purple-600 text-white rounded-md"
        >
          Moje Usługi
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-purple-600 rounded-md"
        >
          Skontaktuj się
        </a>
      </div>
    </section>
  );
}
