import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-50 to-pink-100 px-6 py-12">
      <div className="text-center md:text-left max-w-xl md:mr-12">
        <span className="inline-block mb-4 px-4 py-1 text-sm bg-purple-200 text-purple-800 rounded-full">
          Dostępna na warsztaty i sesje online
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Trenerka Głosu i Śpiewu 🎤
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Pomagam kobietom i młodzieży rozwijać głos, pewność siebie i
          umiejętności wystąpień publicznych – w śpiewie i w życiu codziennym.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="/services"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-center"
          >
            Moje Usługi
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition text-center"
          >
            Umów się na konsultację
          </a>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0 w-48 sm:w-60 md:w-[28rem] aspect-[3/4]">
        <Image
          src="/images/vita-hero.jpg"
          alt="Trenerka głosu i śpiewu"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}
