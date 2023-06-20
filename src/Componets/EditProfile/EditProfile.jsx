import React, { useContext } from "react";

import styles from "./EditProfile.module.css";

import Profile from "../Profile/Profile";

import { RxCross2 } from "react-icons/rx";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const EditProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const updateHandler = () => {
    dispatch({ type: "HIDE_EDITPROFILE_MODAL" });
  };

  return (
    <div className={styles.editcontainer}>
      <div className={styles.cross}>
        <h2>Edit Profile</h2>
        <button className={styles.crossbtn}>
          <RxCross2 />
        </button>
      </div>

      <div className={styles.profile}>
        <div>Avatar :</div>
        <Profile />
      </div>

      <div className={styles.username}>Name :</div>

      <div className={styles.username}>Username :</div>

      <div className={styles.bio}>
        <label htmlFor="bio">Bio :</label>
        <input type="text" name="" id="bio" />
      </div>

      <div className={styles.bio}>
        <label htmlFor="website">Website :</label>
        <input type="text" name="" id="website" />
      </div>

      <div className={styles.updatebtn}>
        <button className={styles.btn} onClick={() => updateHandler()}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
