import React from "react";
import { Routes, Route } from "react-router-dom";
import MachineList from "./components/MachineList";
import MachineDetails from "./components/MachineDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MachineList />} />
        <Route path="/machine/:id" element={<MachineDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

// import React from "react";

// import "./App.css";

// import Layout from "./Layout";
// import MachineList from "./components/MachineList";

// function App() {
//   return (
//     <Layout>
//       <MachineList />
//     </Layout>
//   );
// }

// export default App;
