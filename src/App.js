import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Текст в input');


  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />

      <ClassCounter />
      <ClassCounter />
      <ClassCounter />


    </div>
  );
}

export default App;
