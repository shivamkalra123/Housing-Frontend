import { useState } from "react";

import "./App.css";
import NavBar from "./components/navBar";

import { Route, Routes } from "react-router-dom";
import Missions from "./pages/missions";
import Home from "./pages/home";
import Blog from "./pages/blog";
import ContactForm from "./pages/contact";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/mission" element={<Missions />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
