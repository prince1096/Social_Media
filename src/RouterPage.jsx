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
import UserProfile from "./UserProfile/UserProfile";
import ErrorPage from "./Error/ErrorPage";

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
          <Route path="userprofile/:username" element={<UserProfile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
