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

  return (
    <div className={styles.postcard}>
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
          <button className={styles.profilebtn} onClick={() => editHandler()}>
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className={styles?.contentdiv}>{post?.content}</div>
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
                {likes !== 0 ? likes : ""}
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
          <button
            className={styles.bookmarkbtn}
            onClick={() => addToBookmarkServices(token, dispatch, post)}
          >
            <FaRegBookmark className={styles.booklogo} />
          </button>
        </div>
      </div>

      <div className={styles.postdate}>{convertDate(post.createdAt)}</div>

      {showEdit && (
        <div className={styles.show}>
          {post?.username === userData?.username ? (
            <Edit postData={post} token={token} dispatch={dispatch} />
          ) : (
            <button>Unfollow</button>
          )}

          {/* <Edit /> */}
        </div>
      )}
    </div>
  );
};

export default PostDisplay;
