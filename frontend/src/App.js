import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddWaste from "./components/AddWaste";
import WasteList from "./components/WasteList";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Smart Waste Collection System</h2>
        <nav>
          <Link className="btn btn-primary m-2" to="/">Add Record</Link>
          <Link className="btn btn-success m-2" to="/list">View Records</Link>
        </nav>

        <Routes>
          <Route path="/" element={<AddWaste />} />
          <Route path="/list" element={<WasteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;