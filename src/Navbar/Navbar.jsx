import React from "react";

import styles from "./Navbar.module.css";

import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbarcontainer}>
        <div className={styles.navlogocontainer}>
          <AiFillHome className={styles.navLogo} />{" "}
          <span className={styles.navlogoname}>Home</span>
        </div>
        <div className={styles.navlogocontainer}>
          <MdExplore />
          <span className={styles.navlogoname}>Home</span>
        </div>
        <div className={styles.navlogocontainer}>
          <MdAddCircle />
          <span className={styles.navlogoname}></span>
        </div>
        <div className={styles.navlogocontainer}>
          <BsFillBookmarkFill />
          <span className={styles.navlogoname}>Bookmark</span>
        </div>
        <div className={styles.navlogocontainer}>
          <AiFillHeart />
          <span className={styles.navlogoname}>Liked Posts</span>
        </div>
        <div className={styles.navlogocontainer}>
          <CgProfile />
          <span className={styles.navlogoname}>Profile</span>
        </div>
      </div>

      <div className={`${styles.navlogocontainer} ${styles.hidenavbar}`}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
