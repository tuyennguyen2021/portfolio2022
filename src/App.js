import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
