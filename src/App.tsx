import React from "react";
import { Routes, Route } from "react-router-dom";
import MachineList from "./components/MachineList";
import MachineDetails from "./components/MachineDetails";
import Layout from "./components/Layout";
import Test from "./components/Test";
import FleetOverview from "./components/FleetOverview";
import { ConnectForm } from "./components/ConnectForm";
import { useStore, useStream } from './state';
import { VideoStream } from './components/VideoStream';
import { MotionArrows } from './components/MotionArrows';
import { useMotionControls } from './motion';

function App() {
  const { status, connectOrDisconnect, streamClient, baseClient } = useStore();
  const stream = useStream(streamClient, 'cam');
  const [motionState, requestMotion] = useMotionControls(baseClient);

  return (
    <>
      <h1>{status}</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><ConnectForm status={status} onSubmit={connectOrDisconnect} />
            <VideoStream stream={stream}>
              {baseClient ? (
                <MotionArrows
                  motionState={motionState}
                  requestMotion={requestMotion}
                />
              ) : null}</VideoStream>
          </>} />
          <Route path="/machine/:id" element={<MachineDetails />} />
          <Route path="/fleet" element={<FleetOverview />} />
          <Route path="/video" element={<VideoStream stream={stream}>
            {baseClient ? (
              <MotionArrows
                motionState={motionState}
                requestMotion={requestMotion}
              />
            ) : null}</VideoStream>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
