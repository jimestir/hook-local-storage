import { useState } from "react";

function App() {
  const [text, setText] = useState(JSON.parse(localStorage.getItem("V1")));

  function setLocalStorge(event) {
    const value = event.target.value;
    try {
      setText(value);
      localStorage.setItem("V1", JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="App">
        <textarea
          className="App__textarea"
          placeholder="Ya has hecho tu custom hook?"
          value={text}
          onChange={setLocalStorge}
        ></textarea>
      </div>
    </>
  );
}

export default App;
