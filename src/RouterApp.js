import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Selector from "./pages/Selector";

const RouterApp = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/profile/:username' element={<Profile />} /> */}
      <Route path='/counter' element={<Selector />} />
    </Routes>
  );
};

export default RouterApp;
