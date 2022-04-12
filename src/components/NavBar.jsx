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
    const toTop = document.getElementById("back-to-top");

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.add("hidden");
      toTop.classList.remove("flex");
    }
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container ">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-primary"
            >
              Cipto Suhari
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
              onClick={hambuger}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block
              lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
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
