import "./App.css";
import Profiles from "./app/views/profiles/Profiles";
import Home from "./app/views/home/Home";
import About from "./app/views/about/About";
import "antd/dist/antd.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResponderNavBar from "./app/components/ResponderNavBar";

function App() {
  const [page, setPage] = useState("");
  const handleClick = (e) => {
    setPage(e.key);
  };
  return (
    <div>
      <ResponderNavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
