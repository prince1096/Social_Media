import React, { useContext } from "react";

import styles from "./Filter.module.css";

import { BsFire } from "react-icons/bs";

import { LuChevronsUpDown } from "react-icons/lu";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const Filter = () => {
  const { dispatch } = useContext(DataUserContext);

  const likesortHandler = () => {
    dispatch({ type: "SORT_BY_LIKE", payload: "like" });
  };

  const dateSortHandler = () => {
    dispatch({ type: "SORT_BY_DATE", payload: "date" });
  };

  return (
    <div className={styles.filterdiv}>
      <button className={styles.filterbtn} onClick={likesortHandler}>
        <BsFire /> Trending
      </button>

      <button className={styles.filterbtn} onClick={dateSortHandler}>
        {" "}
        <LuChevronsUpDown /> Latest{" "}
      </button>
    </div>
  );
};

export default Filter;
