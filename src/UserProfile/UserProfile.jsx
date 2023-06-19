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

const UserProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const { username } = useParams();

  // console.log(username);

  const currentProfile = state?.currentprofile;

  const findUser = state?.user.find((userr) => userr?.username === username);

  // console.log(findUser);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  // console.log(userData.username, "user");

  // const [currentProfile, setCurrentProfile] = useState(userData?.username);

  useEffect(() => {
    getUserDataService(dispatch, findUser?._id);
    // getUserPostService(dispatch, state?.currentprofile);
  }, [findUser?._id]);

  // console.log(state?.userOnProfile);

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

      {/* <div>
        {state?.userPost?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </div> */}
    </div>
  );
};

export default UserProfile;
