import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="zuri-task-one/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
