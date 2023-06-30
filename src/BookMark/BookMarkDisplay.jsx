import React, { useContext } from "react";

import { useState } from "react";

import styles from "./BookMarkDisplay.module.css";

import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { BsFillBookmarkFill } from "react-icons/bs";

import { HiOutlineHeart } from "react-icons/hi";

import Profile from "../Componets/Profile/Profile";
import Edit from "../Componets/PostDisplay/Edit";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import {
  likePostServices,
  unlikePostServices,
} from "../Services/LikeUnlikeService/LikeUnlikeService";
import { removeFromBookmarkServices } from "../Services/BookMarkService/BookMarkService";
import { convertDate } from "../Services/DateChange/DateChange";

const BookMarkDisplay = ({ post }) => {
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

  // console.log(likedPost);

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
            className={styles.removebookmark}
            onClick={() => removeFromBookmarkServices(token, dispatch, post)}
          >
            <BsFillBookmarkFill className={styles.addedlogo} />
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

export default BookMarkDisplay;

//  <button onClick={() => removeFromBookmarkServices(token, dispatch, post)}>
//   <FaRegBookmark />
// </button>;
