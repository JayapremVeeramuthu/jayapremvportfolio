import { useEffect, useRef } from "react";
import "./landing.css";
import "../../styles/grid.css";
import Navbar from "../../components/Navbar/Navbar";
import CurrentDesign from "../../components/CurrentDesign/CurrentDesign";
import SystemTerminal from "../../components/SystemTerminal/SystemTerminal";
import TypedHero from "../../components/TypedHero/TypedHero";

const Landing = () => {
  const landingRef = useRef(null);

  

  useEffect(() => {
    const section = landingRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 🔥 NATURAL PARALLAX (always smooth)
      section.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <section ref={landingRef} id="landing"  className="landing grid-bg">
      <Navbar />

      <div className="hero-text">
        <h1>
          JAYAPREM V <br />
          <TypedHero />
        </h1>

        <p className="intro">
          HI THERE <br />
          HOW R U ?
        </p>

        <SystemTerminal />
      </div>

      <div className="current-design-wrapper">
        <CurrentDesign />
      </div>

      <div className="bottom-strip">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>AVAILABLE FOR FREELANCING|</span>
            <span>POSTER DESIGN</span>
            <span>WEBSITE DEVELOPMENT</span>
            <span>BRAND PROMOTION</span>
          </div>

          <div className="marquee-content">
            <span>AVAILABLE FOR FREELANCING</span>
            <span>POSTER DESIGN</span>
            <span>WEBSITE DEVELOPMENT</span>
            <span>BRAND PROMOTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
