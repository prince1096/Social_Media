import React, { useContext } from "react";

import { useState } from "react";

import styles from "./PostDisplay.module.css";

import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";

import Profile from "../Profile/Profile";
import Edit from "./Edit";
import { addToBookmarkServices } from "../../Services/BookMarkService/BookMarkService";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";
import {
  likePostServices,
  unlikePostServices,
} from "../../Services/LikeUnlikeService/LikeUnlikeService";
import { convertDate } from "../../Services/DateChange/DateChange";

const PostDisplay = ({ post }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { state, dispatch } = useContext(DataUserContext);

  const token = localStorage.getItem("token");

  // console.log(token);
  // console.log(post);

  const likes = post?.likes?.likeCount;

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  const likedPost = state?.likedPost?.find((liked) => liked?._id === post._id);

  const bookmarkedPost = state?.bookmarkPost?.find(
    (savedPost) => savedPost?._id === post?._id
  );

  // console.log(likedPost);

  return (
    <div className={styles.postcard}>
      <div className={styles.username}>
        <div className={styles.profile}>
          <div>
            <Profile />
          </div>

          <div>
            <p>
              <strong>XYZ</strong>
            </p>
            <p>@{post?.username}</p>
          </div>
        </div>

        <div>
          <button className={styles.profilebtn} onClick={() => editHandler()}>
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div>{post?.content}</div>
      <div className={styles.bottomlogo}>
        <div className={styles.likelogo}>
          {" "}
          {likedPost ? (
            <button
              className={styles.btn}
              onClick={() => unlikePostServices(post, dispatch, token)}
            >
              <span className={styles.heart}>
                <HiOutlineHeart className={styles.likedLogo} />{" "}
                {likes !== 0 ? likes + 1 : ""}
              </span>{" "}
            </button>
          ) : (
            <button
              className={styles.btn}
              onClick={() => likePostServices(token, dispatch, post)}
            >
              <span className={styles.heart}>
                <HiOutlineHeart /> {likes !== 0 ? likes : ""}
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
          <button onClick={() => addToBookmarkServices(token, dispatch, post)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>

      <div className={styles.postdate}>{convertDate(post.createdAt)}</div>

      {showEdit && (
        <div className={styles.show}>
          <Edit />
        </div>
      )}
    </div>
  );
};

export default PostDisplay;
