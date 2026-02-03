import { useState } from "react";
import "./CurrentDesign.css";

const CurrentDesign = () => {
  const [isDesign, setIsDesign] = useState(true);

  return (
    <div className="current-design">
      {/* Header */}
      <div className="cd-header">
        <h3>{isDesign ? "Current Design" : "Current Creation"}</h3>

        <div className="cd-arrows">
          <button onClick={() => setIsDesign(true)}>←</button>
          <button onClick={() => setIsDesign(false)}>→</button>
        </div>
      </div>

      {/* Cards */}
      <div className="cd-list">
        {isDesign ? (
          <>
            <div className="cd-card">
              <div className="cd-thumb">
                <img src="/design/foodapp.png" alt="TastyBites" />
              </div>
              <div>
                <h4>TastyBites</h4>
                <p>Which is a delicious food product delivery app</p>
              </div>
            </div>

            <div className="cd-card">
              <div className="cd-thumb">
                <img src="/design/medicalapp.png" alt="MediMart" />
              </div>
              <div>
                <h4>MediMart</h4>
                <p>Which is a medical product delivery app</p>
              </div>
            </div>

            <div className="cd-card">
              <div className="cd-thumb">
                <img src="/design/cineapp.png" alt="CineView" />
              </div>
              <div>
                <h4>CineView</h4>
                <p>Which is a movie collection app</p>
              </div>
            </div>

            <div className="cd-card">
              <div className="cd-thumb">
                <img src="/design/nike.png" alt="NikeView" />
              </div>
              <div>
                <h4>NikeView</h4>
                <p>Which is a shoe collection app</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <a
              href="https://ds-dental-clinic-3.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cd-link"
            >
              <div className="cd-card">
                <div className="cd-thumb">
                  <img src="/projects/DS DENTAL.png" alt="DS Dental" />
                </div>
                <div>
                  <h4>DentalClinicSite</h4>
                  <p>A professional dental clinic website.</p>
                </div>
              </div>
            </a>

            <a
              href="https://clomora-ecommerce.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cd-link"
            >
              <div className="cd-card">
                <div className="cd-thumb">
                  <img src="/projects/CLOMORA.png" alt="CLOMORA" />
                </div>
                <div>
                  <h4>CLOMORA</h4>
                  <p>Modern ecommerce tshirt website</p>
                </div>
              </div>
            </a>

            <a
              href="https://avocetz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cd-link"
            >
              <div className="cd-card">
                <div className="cd-thumb">
                  <img src="/projects/AVOCET.png" alt="AVOCET" />
                </div>
                <div>
                  <h4>AVOCET</h4>
                  <p>Ecommerce site with admin panel</p>
                </div>
              </div>
            </a>

            <a
              href="https://jayapremv.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cd-link"
            >
              <div className="cd-card">
                <div className="cd-thumb">
                  <img src="/projects/PORTFOLIO.png" alt="Portfolio" />
                </div>
                <div>
                  <h4>Portfolio</h4>
                  <p>Personal portfolio website</p>
                </div>
              </div>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default CurrentDesign;
