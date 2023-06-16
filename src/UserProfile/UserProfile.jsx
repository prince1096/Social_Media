import React, { useContext } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { useParams } from "react-router";
import Profile from "../Componets/Profile/Profile";
import { convertDate } from "../Services/DateChange/DateChange";

import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const { username } = useParams();

  //   console.log(username);

  const loggedInUser = state?.user?.find(
    (currentUser) => currentUser?.username === username
  );

  //   console.log(loggedInUser);

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
              <button className={styles.followbtn}>Follow</button>
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
