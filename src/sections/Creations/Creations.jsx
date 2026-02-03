import "./Creations.css";

export default function Creations() {
  return (
    <section id="creations" className="creations-section grid-dot">

      <div className="creations-header">
        <h1 className="creations-title">Creations</h1>

        <div className="creations-subrow">
          <p>
            Here are a few Creation <br />
            showcasing <span>My work</span>
          </p>
          <span>EXPLORE</span>
        </div>
      </div>

      <div className="creations-collage">

        <img
          src="/posters/fin 1.jpg"
          alt="Featured Poster"
          className="creations-featured-poster"
        />

        <div className="creations-vertical">
          <img src="/posters/fin 1.jpg" alt="Poster vertical 1" />
          <img src="/posters/Instagram post - 4 1.jpg" alt="Poster vertical 2" />
        </div>

        <div className="creations-horizontal">
          <img src="/posters/Decision final 1.jpg" alt="Poster 1" />
          <img src="/posters/Instagram post - 1 1.jpg" alt="Poster 2" />
          <img src="/posters/resume psoter desing' 1.jpg" alt="Poster 3" />
          <img src="/posters/Instagram post - 4 1.jpg" alt="Poster 4" />
        </div>

      </div>
    </section>
  );
}
