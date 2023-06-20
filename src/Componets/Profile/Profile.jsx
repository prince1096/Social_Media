import React from "react";

import styles from "./Profile.module.css";

const Profile = ({ url, height, width }) => {
  return (
    <div>
      <div className={styles.profile} style={{ height: height, width: width }}>
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
