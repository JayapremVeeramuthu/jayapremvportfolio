import "./collaborate.css";

const Collaborate = () => {
  return (
    <section  id="collaborate" className="collab-section">
      {/* BACK WATERMARK */}
      <div className="collab-watermark">JAYAPREM</div>

      <h1 className="collab-title">LETS COLLABORATE TOGETHER</h1>

      <div className="collab-layout">
        {/* LEFT CARD */}
        <div className="collab-card collab-left">
          <p>
            AVAILABLE FOR <span>FREELANCE</span><br />
            PROJECTS IN POSTER DESIGN,<br />
            WEB DEVELOPMENT, AND<br />
            BRANDING.
          </p>
        </div>

       {/* RIGHT CARD */}
<div className="collab-card collab-right">
  <h3>SOCIAL PLATFORMS</h3>

  <div className="social-icons">

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

  <button className="contact-btn">CONTACT ME</button>
</div>
      </div>
    </section>
  );
};

export default Collaborate;
