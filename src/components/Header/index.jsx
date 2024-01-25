import { useState, useEffect } from "react";
import bgPatternMobile from "/assets/mobile/bg-pattern-header.svg";
import bgPatternTablet from "/assets/tablet/bg-pattern-header.svg";
import bgPatternDesktop from "/assets/desktop/bg-pattern-header.svg";
import logo from "/assets/desktop/logo.svg";
import sunIcon from "/assets/desktop/icon-sun.svg";
import moonIcon from "/assets/desktop/icon-moon.svg";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backgroundPattern, setBackgroundPattern] = useState("");

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log(isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Define different image URLs based on window width
    if (windowWidth >= 1280) {
      setBackgroundPattern(bgPatternDesktop);
    } else if (windowWidth >= 768) {
      setBackgroundPattern(bgPatternTablet);
    } else {
      setBackgroundPattern(bgPatternMobile);
    }
  }, [windowWidth]);

  return (
    <header
      className="flex items-center justify-between bg-cover bg-no-repeat px-6 pb-[4.5rem] pt-8"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <a href="/">
        <img src={logo} alt="devjobs logo" />
      </a>

      <div className="flex items-center gap-4">
        <div className=" h-[1.125rem] w-5">
          <img
            className="h-full w-full object-cover"
            src={sunIcon}
            alt="sun icon"
          />
        </div>
        <label className="relative inline-block h-6 w-12">
          <input
            className="peer h-0 w-0 opacity-0"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-xl bg-white before:absolute before:left-[5px] before:top-[5px] before:h-[0.875rem] before:w-[0.875rem] before:rounded-[50%] before:bg-violet before:transition-transform before:content-[''] peer-checked:before:translate-x-[24px]" />
        </label>
        <div className="h-3 w-3">
          <img
            className="h-full w-full object-cover"
            src={moonIcon}
            alt="moon icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
