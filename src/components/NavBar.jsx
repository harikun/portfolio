function NavBar() {
  const hambuger = () => {
    const nav = document.querySelector("#hamburger");
    nav.classList.toggle("hamburger-active");
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
              className="block absolute right-4"
              onClick={hambuger}
            >
              <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
