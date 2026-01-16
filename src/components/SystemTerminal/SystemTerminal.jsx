import { useEffect, useState } from "react";
import "./SystemTerminal.css";

const lines = [
  "> initializing system...",
  "> loading skills...",
  "> frontend loaded",
  "> UI/UX Designer ready",
];

const SystemTerminal = () => {
  const [displayed, setDisplayed] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const timeout = setTimeout(() => {
      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        setDisplayed((prev) => {
          const updated = [...prev];
          updated[lineIndex] =
            (updated[lineIndex] || "") + currentLine[charIndex];
          return updated;
        });
        setCharIndex(charIndex + 1);
      } else {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, 40); // typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <div className="system-terminal">
      {displayed.map((line, i) => (
        <p key={i} className="terminal-line">
          {line}
          {i === displayed.length - 1 && <span className="cursor">▮</span>}
        </p>
      ))}
    </div>
  );
};

export default SystemTerminal;
