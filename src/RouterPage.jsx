import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Login/Login";
import HomePage from "./Home/HomePage";
import RequireAuth from "./Auth/RequireAuth";
import Signup from "./Login/Signup";
import Explore from "./Explore/Explore";
import BookMark from "./BookMark/BookMark";
import LikedPost from "./LikedPost/LikedPost";
import Scroll from "./Scroll/Scroll";

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
        >
          <Route path="" element={<Scroll />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmark" element={<BookMark />} />
          <Route path="likedpost" element={<LikedPost />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
