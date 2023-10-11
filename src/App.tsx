import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import {useStore as appStore} from './appState'
import ViamAppData from "./components/ViamAppData";

function App() {

  // Robot Client
  const { status, connectOrDisconnect, streamClient, baseClient } = useStore();
  const stream = useStream(streamClient, 'cam');
  const [motionState, requestMotion] = useMotionControls(baseClient);

  // App.Viam.Com Client
  const { status:appStatus, connectOrDisconnect:appConnectOrDisconnect, client:appClient } = appStore();

  return (
    <>
      <h1 style={{textAlign: "center"}}>{"Robot: " + status + " / Viam App: " + appStatus}</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ConnectForm status={status} onSubmit={connectOrDisconnect} />} />
          <Route path="/viamapp" element={<ConnectForm status={appStatus} onSubmit={appConnectOrDisconnect} />} />
          <Route path="/fleet" element={<FleetOverview />} />
          <Route path="/machine/:id" element={<><MachineDetails /><VideoStream stream={stream}>
            {baseClient ? (
              <MotionArrows
                motionState={motionState}
                requestMotion={requestMotion}
              />
            ) : null}</VideoStream></>} />
          <Route path="/viamappdata" element={ appClient ? <ViamAppData client={appClient} /> : <Navigate to="/viamapp" />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
