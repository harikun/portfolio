function HeroSection() {
  return (
    <section id="home" className="pt-36 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4">
            <h1 className="text-base font-semibold text-primary">
              Halo Semua 👋, saya{" "}
              <span className="block font-bold text-dark text-4xl mt-1">
                Cipto Suhari
              </span>
            </h1>
            <p className="h2 font-medium text-slate-500 text-lg mb-5">
              Web Developer
            </p>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              Belajar web programming itu menyenangkan dan mudah bukan?{" "}
              <span className="text-dark font-semibold">Bukan!</span>
            </p>
            <a
              href="#hubungi"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
