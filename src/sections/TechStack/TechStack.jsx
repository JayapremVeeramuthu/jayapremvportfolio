import "./techstack.css";

const TechStackFinal = () => {
  return (
    
    <section  id="toolset" className="tsf-section">
      <h1 className="tsf-title">TECH STACK / TOOL SET</h1>

      <div className="tsf-capsule">
        {/* <span className="tsf-label">USER INTERFACE</span> */}

        {/* LEFT ICONS */}
        <img className="tsf-icon ps" src="/icons/photoshop.png" />
        <img className="tsf-icon figma" src="/icons/figma.png" />
        <img className="tsf-icon lr" src="/icons/cdr.png"   />
        <img className="tsf-icon wp" src="/icons/wordpresss.png" />
        

        {/* PROFILE */}
        <img
          className="tsf-profile"
          src="/images/profile.png"
          alt="profile"
        />

        {/* RIGHT ICONS */}
        <img className="tsf-icon html" src="/icons/htnl.png" />
        <img className="tsf-icon js" src="/icons/jss.png" />
        <img className="tsf-icon css" src="/icons/csss.png" />
        <img className="tsf-icon react" src="/icons/react.png" />
        <img className="tsf-icon java" src="/icons/java.png" />
      </div>

     <div className="tsf-service">
  <div className="tsf-marquee-track">
    <span>
      Available for Freelancing • Poster Design • Website Development • Brand Promotion
    </span>
    <span>
      Available for Freelancing • Poster Design • Website Development • Brand Promotion
    </span>
  </div>
</div>


    </section>
  );
};

export default TechStackFinal;
