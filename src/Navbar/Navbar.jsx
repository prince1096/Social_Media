import React, { useContext } from "react";

import styles from "./Navbar.module.css";

import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { getUserDataService } from "../Services/user/userServices";

const Navbar = () => {
  const { state, dispatch } = useContext(DataUserContext);

  // console.log(state?.currentprofile);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  // console.log(state?.user);

  const userprofileData = state?.user?.find(
    ({ username }) => username === userData?.username
  );

  // console.log(userprofileData);

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

        <div className={styles.navlogocontainer}>
          <MdAddCircle />
          <span className={styles.navlogoname}>Post</span>
        </div>

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
            onClick={() => getUserDataService(dispatch, userprofileData._id)}
          >
            <div className={styles.navlogocontainer}>
              <CgProfile />
              <span className={styles.navlogoname}>Profile</span>
            </div>
          </button>
        </NavLink>
      </div>

      <div
        className={`${styles.navlogocontainer} ${styles.hidenavbar} ${styles.navend} `}
      >
        <GiHamburgerMenu />
        <span className={styles.navlogoname}>More</span>
      </div>
    </div>
  );
};

export default Navbar;
