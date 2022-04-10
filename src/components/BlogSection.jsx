function BlogSection() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h3 className="font-semibold text-lg text-primary mb-2">BLog</h3>
            <h4 className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Tulisan Terkini
            </h4>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              libero quam, sollicitudin vel augue.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-6 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#blog"
                    rel="noreferrer"
                    target="_blank"
                    className=" block mb-3 font-semibold text-xl hover:text-primary truncate underline"
                  >
                    Tips Belajar Programming
                  </a>
                </h3>

                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur libero quam amet.
                </p>
                <a
                  href="#blog"
                  className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-6 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/360x200?javascript"
                alt="Javascript"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#blog"
                    rel="noreferrer"
                    target="_blank"
                    className=" block mb-3 font-semibold text-xl hover:text-primary truncate underline"
                  >
                    Tips Belajar Javascript
                  </a>
                </h3>

                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur libero quam amet.
                </p>
                <a
                  href="#blog"
                  className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-6 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/360x200?Reactjs"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#blog"
                    rel="noreferrer"
                    target="_blank"
                    className=" block mb-3 font-semibold text-xl hover:text-primary truncate underline"
                  >
                    Tips Belajar React.js
                  </a>
                </h3>

                <p className="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur libero quam, sollicitudin vel augue.
                </p>
                <a
                  href="#blog"
                  className=" font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
