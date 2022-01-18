import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Текст в input');


  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />

    </div>
  );
}

export default App;
