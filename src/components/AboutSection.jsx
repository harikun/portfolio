function AboutSection() {
  return (
    <section id="about pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10">
            <h2 className="font-bold uppercase text-primary text-lg mb-3">
              Tentang Saya
            </h2>
            <p className="font-bold text-dark text-3xl mb-5 max-w-md">
              Yuk, Belajar Web Programming di sini!
            </p>
            <p className="font-medium text-base text-secondary max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              varius nulla at dolor consequat pellentesque. Aliquam.
            </p>
          </div>
          <div className="w-full px-4 mb-10">
            <h2 className="font-semibold text-dark text-2xl mb-4">
              Mari Berteman
            </h2>
            <p className="font-medium text-base text-secondary mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nisi nisl, dictum in dolor sit amet, suscipit pharetra massa.
            </p>
            <div className="flex items-center">
              <a
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary text-slate-600 hover:bg-primary hover:text-white"
                href="https://youtube.com"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  role="img"
                  width={20}
                  height={20}
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
