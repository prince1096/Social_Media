import React from "react";

import styles from "./TopNav.module.css";
import { CgProfile } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

import { BsFillBrightnessHighFill } from "react-icons/bs";

const TopNav = () => {
  return (
    <div className={styles.topnavcontainer}>
      <div className={`${styles.topnavlogo}  `}>
        <div>
          <BsInstagram />
        </div>

        <div className={styles.hidelogo}>Instagram</div>
      </div>

      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search products"
          className={styles.topnavsearchbar}
          //   value={searchedText}
          // onChange={(event) =>
          //   dispatch({ type: "SEARCHED", payload: event.target.value })
          // }
        />
      </div>

      <div className={styles.topnavprofile}>
        <div>
          <BsFillBrightnessHighFill />
        </div>
        <div className={styles.hidelogo}>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
