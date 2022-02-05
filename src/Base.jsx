import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContextWrapper } from "./context/ContextWrapper";
import Navigation from "./Navigation";
import Login from "./Login";
import Home from "./pages/Home";
import AddPerson from "./pages/AddPerson";
import EditPerson from "./pages/EditPerson";

const Base = () => {
  return (
    <ContextWrapper>
      <div>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddPerson />} />
            <Route path="/edit/:id" element={<EditPerson />} />
          </Routes>
        </div>
      </div>
    </ContextWrapper>
  );
};

export default Base;
