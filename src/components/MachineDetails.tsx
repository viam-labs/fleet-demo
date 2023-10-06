import React from "react";
import { useParams } from "react-router-dom";

const MachineDetails = () => {
  const { id } = useParams();
  // Fetch details based on the id or do something else
  return (
    <div>
      <h1>Machine Detail for {id}</h1>
      {/* Display machine details here */}
    </div>
  );
};

export default MachineDetails;
