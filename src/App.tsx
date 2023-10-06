import React from "react";
import { Routes, Route } from "react-router-dom";
import MachineList from "./components/MachineList";
import MachineDetails from "./components/MachineDetails";
import Layout from "./components/Layout";
import Test from "./components/Test";
import FleetOverview from "./components/FleetOverview";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<FleetOverview />} />
        <Route path="/machine/:id" element={<MachineDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
