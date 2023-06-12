import React from "react";

import styles from "./Filter.module.css";

import { BsFire } from "react-icons/bs";

import { LuChevronsUpDown } from "react-icons/lu";

const Filter = () => {
  return (
    <div className={styles.filterdiv}>
      <button className={styles.filterbtn}>
        <BsFire /> Trending
      </button>

      <button className={styles.filterbtn}>
        {" "}
        <LuChevronsUpDown /> Latest{" "}
      </button>
    </div>
  );
};

export default Filter;
