import React, { useContext, useState } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

import styles from "./BookMark.module.css";
import BookMarkDisplay from "./BookMarkDisplay";

const BookMark = () => {
  const { state } = useContext(DataUserContext);

  // console.log(state);

  // console.log(state?.bookmarkPost);

  return (
    <div>
      <div>
        <div className={styles.container}>
          {state?.bookmarkPost?.map((post) => (
            <BookMarkDisplay post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMark;
