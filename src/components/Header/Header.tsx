import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        if (headerRef.current) {
          headerRef.current.classList.add("sticky_header");
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove("sticky_header");
        }
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetAttr = (event.target as HTMLAnchorElement).getAttribute("href");

    if (targetAttr) {
      const targetElement = document.querySelector(targetAttr) as HTMLElement;

      if (targetElement) {
        const location = targetElement.offsetTop;

        window.scrollTo({
          top: location - 80,
          left: 0,
        });
      }
    }
  };

  const toggleMenu = () => menuRef.current?.classList.toggle("show__menu")

  return (
    <header
      ref={headerRef}
      className="w-full h-20 leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ------LOGO------ */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-medium rounded-full flex items-center justify-center">
              M
            </span>

            <div className="leading-5">
              <h2 className="text-xl text-smallTextColor font-bold">Mariano</h2>
            </div>
          </div>
          {/*============ LOGO END ============ */}

          {/*============ Menu start ============ */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10 text-lg">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  Acerca de
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#education"
                >
                  Educación
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#skills"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          {/*============ menu end ============ */}

          {/*============ menu right ============ */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2">
              <i className="ri-moon-line text-lg font-[600]"></i>
            </button>

            <span onClick={toggleMenu} className="text-2xl text-smallTextColor hidden show__menu cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
