import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
        <textarea
          className="App__textarea"
          placeholder="Ya has hecho tu custom hook?"
          onChange={(event) => console.log(event.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export default App;
