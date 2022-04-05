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
            <p>
              Belajar web programming itu menyenangkan dan mudah bukan? Bukan!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
