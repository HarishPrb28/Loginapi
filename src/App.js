import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
