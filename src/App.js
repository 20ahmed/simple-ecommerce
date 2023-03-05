import Home from "./Components/Home/Home";
import React, { useState } from "react";
function App() {
  const [products, setProducts] = useState("");

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
