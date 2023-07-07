import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./AddPost.module.css";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

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

  const backendpost = {
    id: uuid(),
    content: newPost,
    mediaURL: imageFile,
  };

  const uploadHandler = () => {
    if (backendpost.content === "" && backendpost.mediaURL === null) {
      return;
    }

    postHandler(token, dispatch, backendpost);
    setImagefile(null);
  };

  const postHandler = () => {
    createNewPostService(token, dispatch, backendpost);
    dispatch({ type: "HIDE_MODAL" });
    setNewPost("");
  };

  const fileUploadHandle = (event) => {
    const file = event.target.files[0];
    const uploadedFile = URL.createObjectURL(file);
    setImagefile(uploadedFile);
  };

  const emojiHandler = (event) => {
    setNewPost((prev) => prev + event.native);
  };

  const { theme } = state;

  return (
    <div className={styles.addpostcontainer}>
      <div className={styles.addpost}>
        <div>
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
            type="text"
            className={`${styles.textarea} ${
              theme ? styles.lighttheme : styles.darkthemetext
            }`}
            value={newPost}
            placeholder="What's Happening"
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
            onChange={(event) => fileUploadHandle(event)}
          />
          <button
            className={`${styles.emojibtn} ${
              theme ? styles.lighttheme : styles.darktheme
            }`}
            onClick={() => setShowEmoji(!showEmoji)}
          >
            <BsFillEmojiSmileFill className={styles.postlogo} />
          </button>
          <div className={styles.emojidiv}>
            {showEmoji && (
              <Picker
                dynamicWidth
                className={styles.picker}
                data={data}
                previewPosition="none"
                onEmojiSelect={emojiHandler}
              />
            )}
          </div>
          <div className={styles.emojidivdesk}>
            {showEmoji && (
              <Picker
                data={data}
                previewPosition="none"
                onEmojiSelect={emojiHandler}
              />
            )}
          </div>
        </div>

        <div>
          <button onClick={() => uploadHandler()} className={styles.button}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
