import React from "react";

import styles from "./Profile.module.css";

const Profile = ({ url }) => {
  return (
    <div>
      <div className={styles.profile}>
        <img
          src={url}
          alt=""
          // height="40px"
          // width="40px"
          className={styles?.imgurl}
        />
      </div>
    </div>
  );
};

export default Profile;
