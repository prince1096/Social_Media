import React, { useContext } from "react";

import { useState } from "react";

import styles from "./PostDisplay.module.css";

import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { BsFillBookmarkFill } from "react-icons/bs";

import Profile from "../Profile/Profile";
import Edit from "./Edit";
import {
  addToBookmarkServices,
  removeFromBookmarkServices,
} from "../../Services/BookMarkService/BookMarkService";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";
import {
  likePostServices,
  unlikePostServices,
} from "../../Services/LikeUnlikeService/LikeUnlikeService";
import { convertDate } from "../../Services/DateChange/DateChange";
import {
  followServices,
  unfollowServices,
} from "../../Services/FollowUnfollowService/FollowUnfollowService";

const PostDisplay = ({ post }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { state, dispatch } = useContext(DataUserContext);

  const token = localStorage.getItem("token");

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const likes = post?.likes?.likeCount;

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  const likedPost = state?.likedPost?.find((liked) => liked?._id === post._id);

  const findUser = state?.user?.find(
    (userr) => userr.username === post?.username
  );

  const bookmarkedPost = state?.bookmarkPost?.find(
    (added) => added === post._id
  );

  const followed = state?.following?.some(
    (users) => users?.username === post?.username
  );

  const followUnfollowHandler = () => {
    return followed
      ? unfollowServices(token, dispatch, findUser?._id)
      : followServices(token, dispatch, findUser?._id);
  };

  const { theme } = state;

  return (
    <div
      className={`${styles.postcard} ${
        theme ? styles.lighttheme : styles.darkpostcard
      }`}
    >
      <div className={styles.username}>
        <div className={styles.profile}>
          <div>
            <Profile
              url={findUser?.profilePicture}
              height={"40px"}
              width={"40px"}
            />
          </div>

          <div className={styles.postname}>
            <p>
              <strong>
                {findUser?.firstName} {findUser?.lastName}{" "}
              </strong>
            </p>
            <p>@{post?.username}</p>
          </div>
        </div>

        <div>
          <button
            className={`${styles.profilebtn} ${
              theme ? styles.lighttheme : styles.darkthemebtn
            }`}
            onClick={() => editHandler()}
          >
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className={styles?.contentdiv}>{post?.content}</div>

      {post?.mediaURL && (
        <div>
          {" "}
          <img src={post?.mediaURL} alt="" className={styles.image} />{" "}
        </div>
      )}

      <div className={styles.bottomlogo}>
        <div className={styles.likelogo}>
          {" "}
          {likedPost ? (
            <button
              className={`${styles.btn} ${
                theme ? styles.lighttheme : styles.darkthemebtn
              }`}
              onClick={() => unlikePostServices(post, dispatch, token)}
            >
              <span className={styles.heart}>
                <HiOutlineHeart className={styles.likedLogo} />{" "}
                <p>{likes !== 0 ? likes : ""}</p>
              </span>{" "}
            </button>
          ) : (
            <button
              className={`${styles.btn} ${
                theme ? styles.lighttheme : styles.darkthemebtn
              }`}
              onClick={() => likePostServices(token, dispatch, post)}
            >
              <span className={styles.heart}>
                <HiOutlineHeart />
                <p>{likes !== 0 ? likes : ""}</p>
              </span>{" "}
            </button>
          )}
          <span>
            <FaRegComment />
          </span>
          <span>
            <LuShare2 />
          </span>
        </div>

        <div>
          {bookmarkedPost ? (
            <button
              className={`${styles.bookmarkbtn} ${
                theme ? styles.lighttheme : styles.darkthemebook
              }`}
              onClick={() => removeFromBookmarkServices(token, dispatch, post)}
            >
              <BsFillBookmarkFill
                className={`${styles.addedlogos} ${
                  theme ? styles.lighttheme : styles.darkthemebooklogo
                }`}
              />
            </button>
          ) : (
            <button
              className={`${styles.bookmarkbtn} ${
                theme ? styles.lighttheme : styles.darkthemebook
              }`}
              onClick={() => addToBookmarkServices(token, dispatch, post)}
            >
              <BiBookmark
                className={`${styles.booklogo} ${
                  theme ? styles.lighttheme : styles.darkthemebookok
                }`}
              />
            </button>
          )}
        </div>
      </div>

      <div className={styles.postdate}>{convertDate(post.createdAt)}</div>

      {showEdit && (
        <div
          className={`${styles.show} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          {post?.username === userData?.username ? (
            <Edit
              postData={post}
              token={token}
              dispatch={dispatch}
              theme={theme}
            />
          ) : (
            <button
              className={`${styles.unfollow} ${
                theme ? styles.lighttheme : styles.darktheme
              }`}
              onClick={() => followUnfollowHandler()}
            >
              {followed ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PostDisplay;
