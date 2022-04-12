function HeroSection() {
  return (
    <section id="home" className="pt-36 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary lg:text-xl">
              Halo Semua 👋, saya{" "}
              <span className="mt-1 mb-2 block text-4xl font-bold text-dark lg:text-5xl">
                Cipto Suhari
              </span>
            </h1>
            <p className="h2 mb-5 text-lg font-medium text-secondary">
              Front End Developer
            </p>
            <p className="mb-10 font-medium leading-relaxed text-secondary">
              Belajar web programming itu menyenangkan dan mudah bukan?{" "}
              <span className="font-semibold text-dark">Bukan!</span>
            </p>
            <a
              href="#hubungi"
              className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-0">
              <img
                src={require("../images/hero-image.png")}
                alt="Cipto Suhari"
                className="mx-auto max-w-full"
              />
              <span className="absolute -bottom-0 left-1/2 -z-10 -translate-x-1/2 md:scale-110">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#8A3FFC"
                    d="M41.8,-77.3C51.3,-66.9,54.2,-49.9,59.5,-36C64.8,-22,72.4,-11,73.1,0.4C73.7,11.7,67.3,23.4,62.1,37.6C56.9,51.7,53,68.3,42.8,77.2C32.7,86,16.3,87,1.2,84.9C-13.9,82.8,-27.8,77.5,-40.7,70.3C-53.7,63.1,-65.7,54,-75.2,41.9C-84.8,29.9,-92,14.9,-90.1,1.1C-88.3,-12.8,-77.5,-25.6,-67.8,-37.6C-58.2,-49.6,-49.8,-60.7,-38.7,-70.2C-27.6,-79.7,-13.8,-87.6,1.2,-89.6C16.1,-91.7,32.3,-87.7,41.8,-77.3Z"
                    transform="translate(100 100) "
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
