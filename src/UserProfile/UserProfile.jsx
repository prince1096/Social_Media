import React, { useContext, useEffect } from "react";
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

const UserProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const { username } = useParams();

  // console.log(state?.currentprofile);

  const currentProfile = state?.currentprofile;

  // console.log(currentProfile);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  useEffect(() => {
    (async () => {
      await getUserDataService(dispatch, username);
      await getUserPostService(dispatch, state?.currentprofile);
    })();
    // getUserDataService(dispatch, userprofileData._id);
    getUserPostService(dispatch, state?.currentprofile);
  }, [state?.currentprofile]);

  //   getUserPostService(dispatch, currentProfile);

  // console.log(state?.userPost);

  // useEffect(() => {
  //   (async () => {
  //     await getAllUserDataService(dispatch);
  //   })();
  // }, [state?.user]);

  // useEffect(() => {
  //   (async () => {
  //     await getAllPostService(dispatch);
  //   })();
  // }, [state?.post]);

  return (
    <div>
      <div className={styles.profilecontainer}>
        <div>
          <Profile />
        </div>

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
                <button className={styles.editprofile}>Edit Profile</button>
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
              {/* <a href="">
                {currentProfile?.website
                  ? currentProfile?.website
                  : "https://princerajdev.netlify.app/"}
              </a> */}
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

      <div>
        {state?.userPost?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
