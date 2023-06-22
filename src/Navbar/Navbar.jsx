import React, { useContext, useState } from "react";

import styles from "./Navbar.module.css";

import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { getUserDataService } from "../Services/user/userServices";
import NavAdd from "../Componets/NavAdd/NavAdd";
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

  return (
    <div className={styles.navdiv}>
      <div className={styles.navbarcontainer}>
        <NavLink to="/" className={styles.navlink}>
          <div className={styles.navlogocontainer}>
            <AiFillHome className={styles.navLogo} />{" "}
            <span className={styles.navlogoname}>Home</span>
          </div>
        </NavLink>

        <NavLink to="/explore" className={styles.navlink}>
          <div className={styles.navlogocontainer}>
            <MdExplore />
            <span className={styles.navlogoname}>Explore</span>
          </div>
        </NavLink>

        <button className={styles.addpostnav}>
          <div
            className={styles.navlogocontainer}
            onClick={() => showModalHandler()}
          >
            <MdAddCircle />
            <span className={styles.navlogoname}>Post</span>
          </div>
        </button>

        <NavLink to="/bookmark" className={styles.navlink}>
          <div className={styles.navlogocontainer}>
            <BsFillBookmarkFill />
            <span className={styles.navlogoname}>Bookmark</span>
          </div>
        </NavLink>

        <NavLink to="likedpost" className={styles.navlink}>
          <div className={styles.navlogocontainer}>
            <AiFillHeart />
            <span className={styles.navlogoname}>Liked Posts</span>
          </div>
        </NavLink>

        <NavLink
          to={`/userprofile/${userprofileData?.username}`}
          className={styles.navlink}
        >
          <button
            className={styles.navprofilebtn}
            // onClick={() => getUserDataService(dispatch, userprofileData._id)}
            onClick={() => userHandler(userprofileData)}
          >
            <div className={styles.navlogocontainer}>
              {/* <CgProfile /> */}
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
          <button className={styles.logout}>
            <ImExit />
            <span className={styles.navlogoname}>Logout</span>
          </button>
        </div>
      </div>

      {/* <div
        className={`${styles.navlogocontainer} ${styles.hidenavbar} ${styles.navend} `}
      >
        <GiHamburgerMenu />
        <span className={styles.navlogoname}>More</span>
      </div> */}

      {/* <div> */}

      <PostModal>
        <AddPost />
      </PostModal>

      {/* {showModal && (
        <div
          className={styles.overlay}
          onClick={() => setShowModal(false)}
        ></div>
      )}
      {showModal && (
        <div className={styles.modal}>
          <NavAdd setShowModal={setShowModal} />
        </div>
      )} */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
