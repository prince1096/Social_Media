import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./AddPost.module.css";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";
import { createNewPostService } from "../../Services/Post/postServices";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const AddPost = () => {
  const [newPost, setNewPost] = useState("");

  const token = localStorage.getItem("token");
  const { dispatch } = useContext(DataUserContext);

  const handleTextareaChange = (event) => {
    setNewPost(event.target.value);
  };

  const backendpost = {
    id: uuid(),
    content: newPost,
  };

  const postHandler = () => {
    createNewPostService(token, dispatch, backendpost);
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <div className={styles.addpostcontainer}>
      <div className={styles.addpost}>
        <div>
          {/* <div className={styles.userprofile}></div> */}
          <Profile />
        </div>
        <div className={styles.textareadiv}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            className={styles.textarea}
            value={newPost}
            placeholder="What's Happening"
            // onChange={() => addPostHandler(event)}
            onChange={handleTextareaChange}
          ></textarea>
        </div>
      </div>

      <div className={styles.adddata}>
        <div>
          {" "}
          <BsImageFill className={styles.postlogo} />{" "}
          <BsFillEmojiSmileFill className={styles.postlogo} />{" "}
        </div>

        <div>
          <button
            // onClick={() => createNewPostService(token, dispatch, backendpost)}
            onClick={() => postHandler(token, dispatch, backendpost)}
            className={styles.button}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
