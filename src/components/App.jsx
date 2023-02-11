import React, { useState } from "react";

function App() {
  setInterval(change, 1000);

  let time = new Date().toLocaleTimeString();
  const [ti, setTime] = useState(time);

  function change() {
    let newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  return (
    <div className="container">
      <h1>{ti}</h1>
      <button onClick={change}>Get Time</button>
    </div>
  );
}

export default App;
