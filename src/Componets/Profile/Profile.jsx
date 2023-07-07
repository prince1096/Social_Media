import React, { useContext } from "react";

import styles from "./Profile.module.css";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const Profile = ({ url, height, width }) => {
  const { state } = useContext(DataUserContext);

  const { theme } = state;

  return (
    <div>
      <div
        className={`${styles.profile} ${
          theme ? styles.lighttheme : styles.darktheme
        }`}
        style={{ height: height, width: width }}
      >
        <img
          src={url}
          alt=""
          height={height}
          width={width}
          className={styles?.imgurl}
        />
      </div>
    </div>
  );
};

export default Profile;
