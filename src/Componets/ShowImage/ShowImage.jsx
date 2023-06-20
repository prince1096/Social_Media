import React from "react";
import Profile from "../Profile/Profile";

import styles from "./ShowImag.module.css";

const ShowImage = ({ url }) => {
  return (
    <div className={styles.imagediv}>
      <Profile url={url} height={"300px"} width={"300px"} />
    </div>
  );
};

export default ShowImage;
