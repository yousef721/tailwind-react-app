import { useEffect, useRef, useState } from "react";
import logoImage from "/public/logo.svg";

const Header = () => {
  const [links] = useState(["Feature", "Team", "Sign In"]);
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "50px 0";
      }
    });
  });

  return (
    <header
      ref={headerRef}
      className="pt-[50px] fixed top-0 left-0  w-full z-50 transition-all duration-200"
    >
      <div className="container flex items-center justify-between flex-col sm:flex-row gap-[30px] sm:gap-0">
        <a href="/">
          <img src={logoImage} alt="logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => {
              return (
                <li key={link}>
                  <a
                    href={`/${link.replace(" ", "").toLowerCase()}`}
                    className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200
                "
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
