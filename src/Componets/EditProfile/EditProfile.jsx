import React, { useContext, useState } from "react";

import styles from "./EditProfile.module.css";

import Profile from "../Profile/Profile";

import { RxCross2 } from "react-icons/rx";

import { AiOutlineCamera } from "react-icons/ai";

import { DataUserContext } from "../../Context/DataUser/DataUserProvider";
import { editUserService } from "../../Services/user/userServices";
import Avatar from "./Avatar";

const EditProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);
  const { loginUser } = state;

  const [showAvatar, setShowAvatar] = useState(false);
  const [newavatar, setNewAvatar] = useState(loginUser?.profilePicture);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);
  const token = localStorage.getItem("token");

  const [editUser, setEditUser] = useState({
    profilePicture: newavatar,
    name: loginUser?.firstName,
    userName: loginUser?.username,
    bio: loginUser?.bio,
    website: loginUser?.website,
  });

  // console.log(newavatar);

  // console.log(editUser);

  const updateHandler = () => {
    editUserService(token, dispatch, editUser);
    dispatch({ type: "HIDE_EDITPROFILE_MODAL" });
  };

  const fileUploadHandle = (event) => {
    const file = event.target.files[0];
    const uploadedFile = URL.createObjectURL(file);
    // setImagefile(uploadedFile);
    setEditUser({ ...editUser, profilePicture: uploadedFile });
  };

  const hideEditProfile = () => {
    dispatch({ type: "HIDE_EDITPROFILE_MODAL" });
  };

  return (
    <div className={styles.editcontainer}>
      <div className={styles.cross}>
        <h2>Edit Profile</h2>
        <button className={styles.crossbtn} onClick={() => hideEditProfile()}>
          <RxCross2 />
        </button>
      </div>

      <div className={styles.profile}>
        <div>Avatar :</div>
        <div className={styles.dpdiv}>
          <Profile url={newavatar} height="50px" width="50px" />

          <div className={styles.changedp}>
            <label htmlFor="url">
              <AiOutlineCamera className={styles.postlogo} />{" "}
            </label>
            <input
              type="file"
              className={styles.inputurl}
              name=""
              id="url"
              onChange={(event) => fileUploadHandle(event)}
            />
          </div>
        </div>

        <button
          className={styles.avatarbtn}
          onClick={() => setShowAvatar(!showAvatar)}
        >
          {!showAvatar ? "Show Avatar" : "Hide Avatar"}
        </button>
      </div>

      {showAvatar && (
        <Avatar
          setShowAvatar={setShowAvatar}
          editUser={editUser}
          setEditUser={setEditUser}
          setNewAvatar={setNewAvatar}
        />
      )}

      <div className={styles.username}>
        Name : {userData?.firstName} {userData?.lastName}{" "}
      </div>

      <div className={styles.username}>Username : {userData?.username} </div>

      <div className={styles.bio}>
        <label htmlFor="bio">Bio : </label>
        <input
          type="text"
          name=""
          value={editUser?.bio}
          id="bio"
          onChange={(event) =>
            setEditUser({ ...editUser, bio: event.target.value })
          }
        />
      </div>

      <div className={styles.bio}>
        <label htmlFor="website">Website :</label>
        <input
          type="text"
          name=""
          id="website"
          value={editUser?.website}
          onChange={(event) =>
            setEditUser({ ...editUser, website: event.target.value })
          }
        />
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
