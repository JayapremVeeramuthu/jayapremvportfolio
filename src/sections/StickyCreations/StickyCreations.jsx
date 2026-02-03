import "./StickyCreations.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function StickyCreations() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".sc-card");

    if (!cards.length) return;

    const isMobile = window.innerWidth <= 768;

    const gap = isMobile ? 25 : 40;

    const cardHeight = cards[0].offsetHeight;

    gsap.set(cards, {
      y: i => i * (cardHeight + gap),
      zIndex: i => i + 1
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-stack",
        start: "top top",
        end: `+=${(cardHeight + gap) * cards.length}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    cards.forEach((card) => {
      tl.to(card, {
        y: 0,
        ease: "none"
      });
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };

  }, []);

  return (
    <section className="sticky-section">

      <div className="sticky-title">
        <span>WEB-DESIGN (UI/UX)</span>
        <h2>SEE MY CREATION</h2>
        <span>POSTER DESIGN (G/D)</span>
      </div>

     <div className="sc-stack">

  {/* CLOMORA */}
  <div className="sc-card">
    <a
      href="https://clomora-ecommerce.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="creations-card">
        <img src="/projects/CLOMORA.png" alt="Clomora project" />
        <div className="creations-info">
          <h3>E-COMMERCE SITE – T-SHIRT</h3>
          <p>Modern T-shirt e-commerce with admin panel.</p>
        </div>
      </div>
    </a>
  </div>

  {/* DS DENTAL */}
  <div className="sc-card">
    <a
      href="https://ds-dental-clinic-3.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="creations-card">
        <img src="/projects/DS DENTAL.png" alt="Dental clinic site" />
        <div className="creations-info">
          <h3>DENTAL CLINIC SITE</h3>
          <p>Professional clinic booking website.</p>
        </div>
      </div>
    </a>
  </div>

  {/* AVOCET */}
  <div className="sc-card">
    <a
      href="https://avocetz.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="creations-card">
        <img src="/projects/AVOCET.png" alt="Avocet ecommerce" />
        <div className="creations-info">
          <h3>E-COMMERCE SITE – AVOCET</h3>
          <p>Clean freelance e-commerce UI.</p>
        </div>
      </div>
    </a>
  </div>

  {/* ASPEDU */}
  <div className="sc-card">
    <a
      href="https://aspedu.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="creations-card">
        <img src="/projects/ASPEDU.png" alt="Aspedu website" />
        <div className="creations-info">
          <h3>ASP COMPUTER EDUCATION – AJITHALAGARSAMY</h3>
          <p>Client work for their education center.</p>
        </div>
      </div>
    </a>
  </div>

  {/* PORTFOLIO GENERATOR */}
  <div className="sc-card">
    <a
      href="https://jpport.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="creations-card">
        <img src="/projects/PORTFOLIOGEN.png" alt="Portfolio generator" />
        <div className="creations-info">
          <h3>PORTFOLIO GENERATOR – JAYAPREM V</h3>
          <p>Portfolio generator using command-line interface.</p>
        </div>
      </div>
    </a>
  </div>

</div>


    </section>
  );
}

export default StickyCreations;
