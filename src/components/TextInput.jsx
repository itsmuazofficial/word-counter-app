import React, { useState } from "react";

export default function TextInput() {
  const [text, setText] = useState("Hello");
  const [dark, setDark] = useState(false);
  const clearText = () => {
    setText("");
  };
  return (
    <div>
      <h1>Enter text here</h1>
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
          className="btn btn-primary m-2"
          onClick={clearText}
        >
          Clear
        </button>
        <button type="button" className="btn btn-danger " onClick={() => {
        if(dark){
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black"
          setDark(false)
        }else{
          document.body.style.backgroundColor = "#212529";
         document.body.style.color = "white";
         setDark(true)
        }
        }}>
          toggle
        </button>
        <p>Characters :{text.length}</p>
        <p>
          Words Count :
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
      </div>
    </div>
  );
}
