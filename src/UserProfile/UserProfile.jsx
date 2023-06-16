import React, { useContext, useEffect } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { useParams } from "react-router";
import Profile from "../Componets/Profile/Profile";
import { convertDate } from "../Services/DateChange/DateChange";

import styles from "./UserProfile.module.css";
import { getUserPostService } from "../Services/Post/postServices";

const UserProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const { username } = useParams();

  const loggedInUser = state?.user?.find(
    (currentUser) => currentUser?.username === username
  );

  //   console.log(loggedInUser);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  useEffect(() => {
    getUserPostService(dispatch, loggedInUser);
  }, [loggedInUser]);

  //   getUserPostService(dispatch, loggedInUser);

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
                {loggedInUser?.firstName}
                {loggedInUser?.lastName}
              </p>
              <p>@{loggedInUser?.username}</p>
            </div>
            <div>
              {userData?.username === loggedInUser?.username ? (
                <button className={styles.editprofile}>Edit Profile</button>
              ) : (
                <button className={styles.followbtn}>Follow</button>
              )}
            </div>
          </div>

          <div>{loggedInUser?.bio ? loggedInUser?.bio : "working on it"}</div>

          <div className={styles.website}>
            <div>
              {/* <a href="">
                {loggedInUser?.website
                  ? loggedInUser?.website
                  : "https://princerajdev.netlify.app/"}
              </a> */}
              {loggedInUser?.website
                ? loggedInUser?.website
                : "https://princerajdev.netlify.app/"}
            </div>
            <div>{convertDate(loggedInUser?.createdAt)}</div>
          </div>

          <div className={styles.friend}>
            <p>0 Posts</p>
            <p> {loggedInUser?.followers?.length} followers </p>
            <p>{loggedInUser?.following?.length} following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
