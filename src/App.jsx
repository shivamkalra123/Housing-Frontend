import { useState } from "react";

import "./App.css";
import NavBar from "./components/navBar";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
