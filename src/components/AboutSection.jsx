function AboutSection() {
  return (
    <section id="about pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10">
            <h2 className="font-bold uppercase text-primary text-lg mb-3">
              Tentang Saya
            </h2>
            <p className="font-bold text-dark text-3xl mb-5 max-w-xl">
              Yuk, Belajar Web Programming di sini!
            </p>
            <p className="font-medium text-base text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              varius nulla at dolor consequat pellentesque. Aliquam.
            </p>
          </div>
          <div className="w-full px-4 mb-10">
            <h2>Mari Berteman</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nisi nisl, dictum in dolor sit amet, suscipit pharetra massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;