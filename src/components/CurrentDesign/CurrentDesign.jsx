import { useState } from "react";
import "./currentDesign.css";

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
    <img src="/design/foodapp.png" alt="DS Dental" />
  </div>
              <div>
                <h4>TastyBites</h4>
                <p>Which is an delicious food product delivery app</p>
              </div>
            </div>
          <div className="cd-card">
  <div className="cd-thumb">
    <img src="/design/medicalapp.png" alt="DS Dental" />
  </div>
  <div>
    <h4>MediMart</h4>
    <p>Which is an Medical product delivery app</p>
  </div>
</div>
          <div className="cd-card">
  <div className="cd-thumb">
    <img src="/design/cineapp.png" alt="DS Dental" />
  </div>
  <div>
    <h4>CineView</h4>
    <p>Which is an movie collection app</p>
  </div>
</div>


            <div className="cd-card">
              <div className="cd-thumb">
    <img src="/design/nike.png" alt="DS Dental" />
  </div>
              <div>
                <h4>NikeView</h4>
                <p>Which is an shoe collection app</p>
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
      <p>
        A professional dental clinic website to manage appointments.
      </p>
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
      <p>
        A clean modern tshirt ecommerce website which is an online tshirt delivery site
      </p>
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
      <p>
        A clean modern tshirt ecommerce website with admin panel
      </p>
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
      <img src="/projects/PORTFOLIO.png" alt="Jayaprem Portfolio" />
    </div>
    <div>
      <h4>Portfolio</h4>
      <p>
        This is my personal portfolio showcasing my work & experience.
      </p>
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
