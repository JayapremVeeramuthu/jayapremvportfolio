import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CreationsScroll.css";

export default function CreationsScroll() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".stack-card");
    const h = cards[0].offsetHeight;
    const overlap = h * 0.6;

    gsap.set(cards, {
      y: i => i * overlap
    });

    ScrollTrigger.create({
      trigger: ".stack-wrapper",
      start: "top top",
      end: overlap * (cards.length - 1) * 3, // 👈 slow & smooth
      pin: true,
      scrub: 2,
      animation: gsap.to(cards, {
        y: i => -i * overlap,
        ease: "none"
      })
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="stack-page">
      <h1 className="stack-title">My Creations</h1>

      <div className="stack-wrapper">
        <div className="stack-card">CLOMORA</div>
        <div className="stack-card">DS DENTAL</div>
        <div className="stack-card">AVOCET</div>
      </div>
    </section>
  );
}
