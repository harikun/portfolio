function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h3 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h3>
            <h4 className="font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
              Project Terbaru
            </h4>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              lorem elit. In eros lectus. consectetur adipiscing elit. Morbi ut
              lorem elit.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={require("../images/portfolio-4.png")}
                alt="Landing Page Budiman (CV)"
                className="w-full"
              />
              <h3 className="font-semibold text-lg text-dark mt-5">
                <a
                  href="https://cvbudiman.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Landing Page Budiman (CV)
                </a>
              </h3>

              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={require("../images/portfolio-3.png")}
                alt="Python Script for Scraping Indonesian Website's Data"
                className="w-full"
              />
              <h3 className="font-semibold text-lg text-dark mt-5">
                <a
                  href="https://github.com/harikun/data-scraping"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Python Script web Indonesia
                </a>
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={require("../images/portfolio-2.png")}
                alt="Canvas Gambar untuk anak-anak"
                className="w-full"
              />

              <h3 className="font-semibold text-lg text-dark mt-5">
                <a
                  href="https://ngambar.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Canvas Gambar untuk anak-anak
                </a>
              </h3>

              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={require("../images/portfolio-1.png")}
                alt="Kalkulator Pajak Penghasilan"
                className="w-full"
              />
              <h3 className="font-semibold text-lg text-dark mt-5">
                <a
                  href="https://calljak.web.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Kalkulator Pajak Penghasilan WP0
                </a>
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
