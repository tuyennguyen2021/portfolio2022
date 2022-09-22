import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Loading from "./components/Loading/Loading";
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Router>
        {loading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </Suspense>
        )}
      </Router>
    </>
  );
}

export default App;
