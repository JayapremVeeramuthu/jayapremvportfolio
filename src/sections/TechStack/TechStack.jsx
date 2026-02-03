import "./TechStack.css";

const TechStackFinal = () => {
  return (
    <section id="techstack" className="tsf-section">

      <h1 className="tsf-title">TECH STACK / TOOL SET</h1>

      <div className="tsf-capsule">

        {/* LEFT ICONS */}
        <img className="tsf-icon ps" src="/icons/photoshop.png" alt="Photoshop" />
        <img className="tsf-icon figma" src="/icons/figma.png" alt="Figma" />
        <img className="tsf-icon lr" src="/icons/cdr.png" alt="CorelDraw" />
        <img className="tsf-icon wp" src="/icons/wordpresss.png" alt="WordPress" />

        {/* PROFILE */}
        <img
          className="tsf-profile"
          src="/images/profile.png"
          alt="Profile"
        />

        {/* RIGHT ICONS */}
        <img className="tsf-icon html" src="/icons/htnl.png" alt="HTML" />
        <img className="tsf-icon js" src="/icons/jss.png" alt="JavaScript" />
        <img className="tsf-icon css" src="/icons/csss.png" alt="CSS" />
        <img className="tsf-icon react" src="/icons/react.png" alt="React" />
        <img className="tsf-icon java" src="/icons/java.png" alt="Java" />

      </div>

      {/* MARQUEE */}
     <div class="tsf-service">
  <div class="tsf-marquee-track">

    <div class="tsf-marquee-content">
      <span>AVAILABLE FOR FREELANCING</span>
      <span>POSTER DESIGN</span>
      <span>WEBSITE DEVELOPMENT</span>
      <span>BRAND PROMOTION</span>
    </div>

  
    <div class="tsf-marquee-content">
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

export default TechStackFinal;
