import "./navbar.css";

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="freelance-bar">
        <span className="dot"></span>
        <p>Freelance Mode On Available for Design & Development Work</p>
      </div>

      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection("landing")}>Landing</li>
          <li onClick={() => scrollToSection("identity")}>Identity</li>
          <li onClick={() => scrollToSection("toolset")}>Tool Set</li>
          <li onClick={() => scrollToSection("creations")}>Creations</li>
          <li onClick={() => scrollToSection("collaborate")}>Collaborate</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
