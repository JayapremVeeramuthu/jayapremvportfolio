import "./Experience.css";

const ExperienceOverlay = ({ onClose }) => {
  return (
    <div className="exp-orbit">

      <button className="exp-close" onClick={onClose}>✕</button>

      <div className="orbit-container">

        {/* CENTER PROFILE */}
        <div className="orbit-center">
          <img
            src="/icons/Screenshot 2026-01-15 224000.png"
            alt="Jayaprem"
          />
          <h1>Jayaprem V</h1>
          <p>UI/UX Designer & Web Developer</p>
        </div>

        {/* ORBIT ITEMS */}
        <div className="orbit-item o1">
          <span>2024 – Present</span>
          <h3>Freelancer</h3>
        </div>

        <div className="orbit-item o2">
          <span>2024 – 2025</span>
          <h3>Digital Marketing</h3>
        </div>

        <div className="orbit-item o3">
          <span>2023 – 2024</span>
          <h3>UI/UX Focus</h3>
        </div>

        <div className="orbit-item o4">
          <span>2022 – 2023</span>
          <h3>Started Coding</h3>
        </div>

      </div>

    </div>
  );
};

export default ExperienceOverlay;
