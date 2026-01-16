import "./Creations.css";

export default function Creations() {
  return (
    <section  id="creations" className="creations-section grid-dot">

  {/* HEADER */}
  <div className="creations-header">
    <h1 className="creations-title">Creations</h1>

    <div className="creations-subrow">
      <p>
        Here are a few Creation <br />
        showcasing <span>My work</span>
      </p>
      <span className="creations-explore">EXPLORE</span>
    </div>
  </div>
<div className="creations-collage">
  <div className="creations-vertical">
    <img src="/posters/fin 1.jpg" />
    <img src="/posters/fin 1.jpg" />
  </div>

  <div className="creations-horizontal">
  <img
  src="/posters/fin 1.jpg"
  alt="Featured Poster"
  class="creations-featured-poster"
/>

    <img src="/posters/fin 1.jpg" />
    <img src="/posters/Instagram post - 4 1.jpg" />
    <img src="/posters/Decision final 1.jpg" />
    <img src="/posters/Instagram post - 1 1.jpg" />
    <img src="/posters/resume psoter desing' 1.jpg" />
  </div>
</div>





      {/* CENTER TEXT */}
      <div className="creations-break">
        <span>WEB-DESIGN (UI/UX)</span>
        <h2>SEE MY CREATION</h2>
        <span>POSTER DESIGN (G/D)</span>
      </div>

      {/* STACK SCROLL */}
      <div className="creations-stack">

       <a
  href="https://clomora-ecommerce.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="creations-link"
>
  <div className="creations-card one">
    <div className="creations-img">
      <img src="/projects/CLOMORA.png" alt="Clomora Project" />
    </div>
    <div className="creations-info">
      <h3>E-COMMERCE SITE T-SHIRT</h3>
      <p>
        This is a T-shirt e-commerce website with an integrated admin panel.
      </p>
      <span>↗</span>
    </div>
  </div>
</a>


        <a
  href="https://ds-dental-clinic-3.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="creations-link"
>
  <div className="creations-card two">
    <div className="creations-img">
      <img src="/projects/DS DENTAL.png" alt="Dental Clinic" />
    </div>
    <div className="creations-info">
      <h3>Dental Clinic SITE Tooth Care</h3>
      <p>
        A dental clinic website designed to manage patient appointments.
      </p>
      <span>↗</span>
    </div>
  </div>
</a>


       <a
  href="https://avocetz.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="creations-link"
>
  <div className="creations-card three">
    <div className="creations-img">
      <img src="/projects/AVOCET.png" alt="Avocet" />
    </div>
    <div className="creations-info">
      <h3>E-COMMERCE SITE T-SHIRT</h3>
      <p>
        A T-shirt e-commerce website built as a freelance project.
      </p>
      <span>↗</span>
    </div>
  </div>
</a>


      </div>
    </section>
  );
}
