import { useState, useEffect } from "react";
import code from "./code";
import "./Terminal.css";

const Terminal = () => {
  const [currentText, setCurrentText] = useState("");
  const [typing] = useState(true);

  useEffect(() => {
    let index = 0;
    let lineNumber = 1;
    let charIndex = 0;
    let fullText = "";

    const type = () => {
      if (index < code.length) {
        const { text, className } = code[index];
        const newText = text[charIndex];

        if (charIndex === 0) {
          fullText += `<span class="${className}">`;
        }

        if (newText === "\n") {
          fullText += "</span><br />";
          lineNumber += 1;
          fullText += `<span class="line-number">${lineNumber}</span> `;
          charIndex += 1;
        } else {
          fullText += newText;
          charIndex += 1;
        }

        if (charIndex === text.length) {
          fullText += `</span>`;
          index += 1;
          charIndex = 0;
        }

        setCurrentText(fullText);
        setTimeout(type, 0);
      }
    };

    if (typing) {
      fullText = `<span class="line-number">${lineNumber}</span> `;
      type();
    }
  }, [typing]);

  return (
    <div className="z-50">
      <div className="terminal">
        <div className="buttons">
          <button className="close"></button>
          <button className="minimize"></button>
          <button className="maximize"></button>
        </div>

        <div>
          <pre
            className="code-editor"
            dangerouslySetInnerHTML={{ __html: currentText }}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
