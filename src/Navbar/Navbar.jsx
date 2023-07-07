import React, { useContext } from "react";

import styles from "./Navbar.module.css";

import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import PostModal from "../Componets/PostModal/PostModal";
import AddPost from "../Componets/AddPost/AddPost";
import Profile from "../Componets/Profile/Profile";

const Navbar = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const userprofileData = state?.user?.find(
    ({ username }) => username === userData?.username
  );

  const userHandler = (user) => {
    dispatch({ type: "USER_ON_PROFILE", payload: user });
  };

  const showModalHandler = () => {
    dispatch({ type: "SHOW_MODAL" });
  };

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  const { theme } = state;

  return (
    <div className={styles.navdiv}>
      <div
        className={`${styles.navbarcontainer} ${
          theme ? styles.lighttheme : styles.darktheme
        }`}
      >
        <NavLink
          to="/"
          className={`${styles.navlink} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <div
            className={`${styles.navlogocontainer} ${
              theme ? styles.lighttheme : styles.darktheme
            }`}
          >
            <AiFillHome className={styles.navLogo} />{" "}
            <span className={styles.navlogoname}>Home</span>
          </div>
        </NavLink>

        <NavLink
          to="/explore"
          className={`${styles.navlink} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <div className={styles.navlogocontainer}>
            <MdExplore />
            <span className={styles.navlogoname}>Explore</span>
          </div>
        </NavLink>

        <button
          className={`${styles.addpostnav} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <div
            className={styles.navlogocontainer}
            onClick={() => showModalHandler()}
          >
            <MdAddCircle />
            <span className={styles.navlogoname}>Post</span>
          </div>
        </button>

        <NavLink
          to="/bookmark"
          className={`${styles.navlink} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <div className={styles.navlogocontainer}>
            <BsFillBookmarkFill />
            <span className={styles.navlogoname}>Bookmark</span>
          </div>
        </NavLink>

        <NavLink
          to="likedpost"
          className={`${styles.navlink} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <div className={styles.navlogocontainer}>
            <AiFillHeart />
            <span className={styles.navlogoname}>Liked Posts</span>
          </div>
        </NavLink>

        <NavLink
          to={`/userprofile/${userprofileData?.username}`}
          className={`${styles.navlink} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <button
            className={`${styles.navprofilebtn} ${
              theme ? styles.lighttheme : styles.darktheme
            }`}
            onClick={() => userHandler(userprofileData)}
          >
            <div className={styles.navlogocontainer}>
              <Profile
                url={userprofileData?.profilePicture}
                height={"24px"}
                width={"24px"}
              />
              <span className={styles.navlogoname}>Profile</span>
            </div>
          </button>
        </NavLink>

        <div className={`${styles.navlogocontainer} ${styles.hidelogout}`}>
          <button
            className={`${styles.logout} ${
              theme ? styles.lighttheme : styles.darktheme
            }`}
            onClick={() => logoutHandler()}
          >
            <ImExit />
            <span className={styles.navlogoname}>Logout</span>
          </button>
        </div>
      </div>

      <PostModal theme={theme}>
        <AddPost />
      </PostModal>
    </div>
  );
};

export default Navbar;
