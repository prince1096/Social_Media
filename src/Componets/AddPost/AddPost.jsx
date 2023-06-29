import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./AddPost.module.css";

// import { EmojiPicker }

import EmojiPicker from "emoji-picker-react";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";
import { createNewPostService } from "../../Services/Post/postServices";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const AddPost = () => {
  const [newPost, setNewPost] = useState("");
  const [imageFile, setImagefile] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const token = localStorage.getItem("token");
  const { state, dispatch } = useContext(DataUserContext);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const currentUser = state?.user?.find(
    (userr) => userr?.username === userData?.username
  );

  const handleTextareaChange = (event) => {
    setNewPost(event.target.value);
  };

  // console.log(imageFile);

  const backendpost = {
    id: uuid(),
    content: newPost,
    mediaURL: imageFile,
  };

  const postHandler = () => {
    createNewPostService(token, dispatch, backendpost);
    dispatch({ type: "HIDE_MODAL" });
    setNewPost("");
  };

  return (
    <div className={styles.addpostcontainer}>
      <div className={styles.addpost}>
        <div>
          {/* <div className={styles.userprofile}></div> */}
          <Profile
            url={currentUser?.profilePicture}
            height={"60px"}
            width={"60px"}
          />
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
          <label htmlFor="url">
            <BsImageFill className={styles.postlogo} />{" "}
          </label>
          <input
            type="file"
            className={styles.inputurl}
            name=""
            id="url"
            onChange={(event) => setImagefile(event.target.files[0])}
          />
          <button
            className={styles.emojibtn}
            onClick={() => setShowEmoji(!showEmoji)}
          >
            <BsFillEmojiSmileFill className={styles.postlogo} />
          </button>
          <div className={styles.emojidiv}>
            {showEmoji && (
              <EmojiPicker width="15em" className={styles.emojicontainer} />
            )}
          </div>
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
