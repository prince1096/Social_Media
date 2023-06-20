import React, { useContext, useEffect, useState } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { useParams } from "react-router";
import Profile from "../Componets/Profile/Profile";
import { convertDate } from "../Services/DateChange/DateChange";

import styles from "./UserProfile.module.css";
import {
  getAllPostService,
  getUserPostService,
} from "../Services/Post/postServices";
import PostDisplay from "../Componets/PostDisplay/PostDisplay";
import {
  getAllUserDataService,
  getUserDataService,
} from "../Services/user/userServices";
import EditProfile from "../Componets/EditProfile/EditProfile";
import ShowImage from "../Componets/ShowImage/ShowImage";

const UserProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);
  const [showImage, setShowImage] = useState(false);

  const { username } = useParams();

  const currentProfile = state?.currentprofile;

  const findUser = state?.user.find((userr) => userr?.username === username);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  useEffect(() => {
    getUserDataService(dispatch, findUser?._id);
    getUserPostService(dispatch, state?.currentprofile);
  }, [findUser?._id]);

  const showEdit = () => {
    console.log("show");
    dispatch({ type: "SHOW_EDITPROFILE_MODAL", payload: true });
    console.log("ok");
  };

  const hideEdit = () => {
    dispatch({ type: "HIDE_EDITPROFILE_MODAL" });
  };

  return (
    <div>
      <div className={styles.profilecontainer}>
        <div>
          <button className={styles.showpic} onClick={() => setShowImage(true)}>
            <Profile
              url={currentProfile?.profilePicture}
              height={"80px"}
              width={"80px"}
            />
          </button>
        </div>

        {showImage && (
          <div
            className={styles.overlay}
            onClick={() => setShowImage(false)}
          ></div>
        )}

        {showImage && (
          <div className={styles.modals}>
            <ShowImage url={currentProfile?.profilePicture} />
          </div>
        )}

        <div>
          <div className={styles.name}>
            <div>
              <p className={styles.username}>
                {currentProfile?.firstName}
                {currentProfile?.lastName}
              </p>
              <p>@{currentProfile?.username}</p>
            </div>
            <div>
              {userData?.username === currentProfile?.username ? (
                <button
                  className={styles.editprofile}
                  onClick={() => showEdit()}
                >
                  Edit Profile
                </button>
              ) : (
                <button className={styles.followbtn}>Follow</button>
              )}
            </div>
          </div>

          <div>
            {currentProfile?.bio ? currentProfile?.bio : "working on it"}
          </div>

          <div className={styles.website}>
            <div>
              {currentProfile?.website
                ? currentProfile?.website
                : "https://princerajdev.netlify.app/"}
            </div>
            <div>{convertDate(currentProfile?.createdAt)}</div>
          </div>

          <div className={styles.friend}>
            <p>0 Posts</p>
            <p> {currentProfile?.followers?.length} followers </p>
            <p>{currentProfile?.following?.length} following</p>
          </div>
        </div>
      </div>

      {state?.showProfile && (
        <div className={styles.overlay} onClick={() => hideEdit()}></div>
      )}

      {state?.showProfile && (
        <div className={styles.modal}>
          <EditProfile />
        </div>
      )}

      {/* <div>
        {state?.userPost?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </div> */}
    </div>
  );
};

export default UserProfile;
