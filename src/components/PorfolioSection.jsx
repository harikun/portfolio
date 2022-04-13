function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-16 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h3 className="mb-2 text-lg font-semibold text-primary">
              Portfolio
            </h3>
            <h4 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h4>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
              lorem elit. In eros lectus. consectetur adipiscing elit. Morbi ut
              lorem elit.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../images/portfolio-4.png")}
                alt="Landing Page Budiman (CV)"
                className="w-full"
              />
              <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                <a
                  href="https://cvbudiman.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Landing Page Budiman (CV)
                </a>
              </h3>

              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../images/portfolio-3.png")}
                alt="Python Script for Scraping Indonesian Website's Data"
                className="w-full"
              />
              <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                <a
                  href="https://github.com/harikun/data-scraping"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Python Script Web Indonesia
                </a>
              </h3>
              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../images/portfolio-2.png")}
                alt="Canvas Gambar untuk anak-anak"
                className="w-full"
              />

              <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                <a
                  href="https://ngambar.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Canvas Gambar untuk anak-anak
                </a>
              </h3>

              <p className="text-base font-medium text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lorem elit. In eros lectus. consectetur adipiscing elit.
                Morbi ut lorem elit
              </p>
            </div>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={require("../images/portfolio-1.png")}
                alt="Kalkulator Pajak Penghasilan"
                className="w-full"
              />
              <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                <a
                  href="https://calljak.web.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Kalkulator Pajak Penghasilan WP0
                </a>
              </h3>
              <p className="text-base font-medium text-secondary">
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
