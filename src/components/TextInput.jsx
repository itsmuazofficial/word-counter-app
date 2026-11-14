import React, { useState } from "react";

export default function TextInput(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSentenceCase = () => {
    if (text.length === 0) return;
    let lower = text.toLowerCase();
    let newText = lower.charAt(0).toUpperCase() + lower.slice(1);
    setText(newText);
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const clearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-3">
      <h1 className="mb-3 text-dark">
        Free Online Word Counter & Text Utility Tool
      </h1>
      <p className="lead text-muted">
        A simple and fast tool to count words, characters, read time, and format
        your text instantly.
      </p>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter your text here..."
          rows="8"
        />
      </div>

      <div className="d-flex flex-wrap gap-2 mb-3">
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-warning"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark"
          onClick={handleSentenceCase}
        >
          Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-secondary"
          onClick={handleCapitalize}
        >
          Capitalize Case
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-info text-white"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-secondary"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>

      <div className="card p-3 bg-light border-0 mb-3">
        <h3>Summary of Your Text</h3>
        <p>
          <strong>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </strong>{" "}
          words and <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>
            {(
              0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            ).toFixed(3)}
          </strong>{" "}
          Minutes read
        </p>
      </div>

      <div className="mt-3">
        <h2>Preview</h2>
        <p className="border p-3 rounded bg-white">
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </div>
  );
}
