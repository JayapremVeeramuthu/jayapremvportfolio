import { useState,useEffect, useRef } from "react";
import "./Identity.css";
import "../../styles/grid-dot.css";
import ExperienceOverlay from "../Experience/ExperienceOverlay";


const Identity = () => {
  const identityRef = useRef(null);

 const [showExp, setShowExp] = useState(false);



  useEffect(() => {
    const section = identityRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("motion-active");
        }
      },
      {
        threshold: 0.25, // 25% visible aana podhum
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <> 
    <section ref={identityRef}  id="identity"  className="identity grid-dot">

      {/* INTRO */}
      <div className="card intro-card">
        <div className="intro-top">
          <h2>
            Hi, I&apos;m <span>Jayaprem V</span>
            <span className="line"></span>
          </h2>

          <p className="intro-main">
            Designing meaningful digital experiences through
            <span> UI/UX</span> & <span>Web Development</span>
          </p>

          <p className="intro-sub">
            I help brands and startups build clean, modern,
            and conversion-focused digital products.
          </p>
        </div>

        <div className="intro-bottom">
          <div className="intro-stats">
            <div>
              <strong>15+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>2+</strong>
              <span>Years Exp</span>
            </div>
            <div>
              <strong>Freelance</strong>
              <span>Available</span>
            </div>
          </div>

          <div className="intro-actions">
           <a
  href="/resume/Jayaprem-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Open CV
</a>

            <button className="ghost-btn">View Work</button>
          </div>
        </div>
      </div>

      {/* PROJECT */}
      <div className="card project-card dot-bg">
        <div className="project-grid">
          <div className="project-images large">
            <img src="/aboutpic/DS DENTAL.png" alt="DSDental UI" />
          </div>

          <div className="project-text">
            <h2>DSDental</h2>
            <p>
              Which is a dental clinic app used to book appointments.
              Very fast delivery.
            </p>
          </div>

          <div className="project-text bottom">
            <h2>MediMart</h2>
            <p>
              Medical product delivery app used to order
              medical related products.
            </p>
          </div>

          <div className="project-images small">
            <img src="/aboutpic/Slice 1.jpg" alt="MediMart UI" />
          </div>
        </div>
      </div>

      {/* SOCIAL */}
     {/* SOCIAL */}
<div className="card social-card dot-bg">

  <a
    href="https://github.com/JayapremVeeramuthu"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
    aria-label="GitHub"
  >
    <img src="/icons/github.svg" alt="GitHub" />
  </a>

  <a
    href="https://www.instagram.com/jayaprem_v?igsh=MXNrdHlpYmJkaWJuag=="
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
    aria-label="Instagram"
  >
    <img src="/icons/instagram.svg" alt="Instagram" />
  </a>

  <a
  href="https://wa.me/917094282939"
  target="_blank"
  rel="noopener noreferrer"
  className="icon"
  aria-label="WhatsApp"
>
  <img src="/icons/whatsapp.svg" alt="WhatsApp" />
</a>

  <a
    href="https://www.linkedin.com/in/jayaprem-v-37a34a315"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
    aria-label="LinkedIn"
  >
    <img src="/icons/linknin.png" alt="LinkedIn" />
  </a>

  <a
    href="https://www.behance.net/"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
    aria-label="Behance"
  >
    <img src="/icons/behance.svg" alt="Behance" />
  </a>

  <a
    href="https://x.com/JPrem21042006"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
    aria-label="Twitter / X"
  >
    <img src="/icons/twitter.png" alt="X / Twitter" />
  </a>

</div>


      {/* PROFILE */}
      <div className="card profile-card">
        <img src="/icons/jayaprem-v-ui-ux-portfolio.png" alt="Jayaprem" />
      </div>

      {/* ABOUT */}
      <div className="card about-card">
        <h4 className="about-title">ABOUT</h4>

        <p className="about-highlight">
          Passionate freelance UI/UX designer & web developer
        </p>

        <p className="about-text">
          focused on creating clean, intuitive, and user-centric digital
          experiences. I enjoy turning complex ideas into simple,
          functional interfaces through strong visual hierarchy,
          thoughtful interaction, and modern design systems.
        </p>

        <button
  className="arrow-btn"
  onClick={() => setShowExp(true)}
>
  ↗
</button>

      </div>

      {/* STACK */}
      <div className="card stack-card dot-bg">
        <h4>Stack I Use</h4>

        <div className="stack-icons">
          <img src="/icons/react.png" alt="React" />
          <img src="/icons/figma.png" alt="Figma" />
          <img src="/icons/photoshop.png" alt="Photoshop" />
          <img src="/icons/java.png" alt="Java" />
        </div>

        <p>Explore my stack<br />Here !!</p>
        <button className="arrow-btn">↗</button>
      </div>

    </section>

    {/* EXPERIENCE OVERLAY */}
      {showExp && (
        <ExperienceOverlay onClose={() => setShowExp(false)} />
      )}
    </>

  );

  
};



export default Identity;
