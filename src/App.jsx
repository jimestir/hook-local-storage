import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const { stored: text, setValue: setText } = useLocalStorage("text", "");

  return (
    <>
      <div className="App">
        <textarea
          className="App__textarea"
          placeholder="Ya has hecho tu custom hook?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          cols={25}
        />
      </div>
    </>
  );
}

export default App;
