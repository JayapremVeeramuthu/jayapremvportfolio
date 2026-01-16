import { useEffect, useState } from "react";
import "./TypedHero.css";

const roles = ["UI/UX DESIGNER", "WEB DEVELOPER"];

const TypedHero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      if (charIndex < current.length) {
        setText(prev => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1400);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [charIndex, roleIndex]);

  return (
    <span className="typed-hero">
      {text}
      <span className="typed-cursor">▮</span>
    </span>
  );
};

export default TypedHero;
