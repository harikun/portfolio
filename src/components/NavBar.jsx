function NavBar() {
  const hambuger = () => {
    const nav = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    nav.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container ">
        <div className="flex justify-between items-center relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Cipto Suhari
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={hambuger}
            >
              <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden right-4 absolute top-full py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full lg:block lg:static
              lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
