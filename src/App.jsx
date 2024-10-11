import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
