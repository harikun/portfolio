function ContactSection() {
  return (
    <section id="contact" className="pt-32 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h3 className="font-semibold text-lg text-primary mb-2">Contact</h3>
            <h4 className="font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
              Hubungi Kami
            </h4>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              libero quam, sollicitudin vel augue.
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1
            focus:border-primary"
                placeholder="Nama"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1
            focus:border-primary"
                placeholder="Email"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Pesan
              </label>
              <textarea
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1
            focus:border-primary h-32"
                placeholder="Email"
              />
            </div>
            <div className="w-full px-4">
              <button
                className="text-base w-full font-semibold transition duration-500 ease-in-out
            text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;