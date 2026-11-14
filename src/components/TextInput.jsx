import React, { useState } from "react";

export default function TextInput() {
  const [text, setText] = useState("Hello");
  const [dark, setDark] = useState(false);
  const clearText = () => {
    setText("");
  };
  // Text ko Uppercase mein convert karne ke liye
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Text ko Lowercase mein convert karne ke liye
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  // Text ko clipboard par copy karne ke liye
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };
  // Text ke beech ki extra spaces khatam karne ke liye
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  // Har sentence ke pehle letter ko Capital karne ke liye (Sentence Case)
  const handleSentenceCase = () => {
    let lower = text.toLowerCase();
    let capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);
    setText(capitalized);
  };

  // Har lafz (word) ke pehle letter ko Capital karne ke liye (Capitalized Case)
  const handleCapitalize = () => {
    let words = text.toLowerCase().split(" ");
    let capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1),
    );
    setText(capitalizedWords.join(" "));
  };
  return (
    <div>
      <h1 className="mb-3">Free Online Word Counter & Text Utility Tool</h1>
      <p className="lead text-muted">
        A simple and fast tool to count words, characters, read time, and format your text instantly.
      </p>
      <div className="container">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          style={{ height: 100 }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-dark m-2"
          onClick={handleSentenceCase}
        >
          Sentence Case
        </button>

        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={handleCapitalize}
        >
          Capitalize Case
        </button>
        <button
          type="button"
          className="btn btn-info m-2 text-white"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={clearText}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-danger "
          onClick={() => {
            if (dark) {
              document.body.style.backgroundColor = "white";
              document.body.style.color = "black";
              setDark(false);
            } else {
              document.body.style.backgroundColor = "#212529";
              document.body.style.color = "white";
              setDark(true);
            }
          }}
        >
          toggle
        </button>

        <p>Characters :{text.length}</p>
        <p>
          Words Count :
          {
            text.split("/\s+/").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2 className="mt-3">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
