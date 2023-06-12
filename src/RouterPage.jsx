import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Login/Login";
import HomePage from "./Home/HomePage";
import RequireAuth from "./Auth/RequireAuth";
import Signup from "./Login/Signup";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
