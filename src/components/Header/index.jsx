import { useState, useEffect } from "react";
import bgPatternMobile from "/assets/mobile/bg-pattern-header.svg";
import bgPatternTablet from "/assets/tablet/bg-pattern-header.svg";
import bgPatternDesktop from "/assets/desktop/bg-pattern-header.svg";
import logo from "/assets/desktop/logo.svg";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backgroundPattern, setBackgroundPattern] = useState("");

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
      className="bg-cover bg-no-repeat px-6 pb-[4.5rem] pt-8"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      <a href="/">
        <img src={logo} alt="devjobs logo" />
      </a>
    </header>
  );
};

export default Header;
