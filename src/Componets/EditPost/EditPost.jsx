import React, { useContext, useState } from "react";
// import { v4 as uuid } from "uuid";

import styles from "./EditPost.module.css";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";
import { editPostService } from "../../Services/Post/postServices";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const EditPost = ({ showEdit, setShowEdit, token, postData, dispatch }) => {
  const [editPost, setEditPost] = useState({ ...postData });
  // const [imageFile, setImagefile] = useState(null);

  const { state } = useContext(DataUserContext);

  // const handleTextareaChange = (event) => {};

  // console.log(newPost);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const currentUser = state?.user?.find(
    (userr) => userr?.username === userData?.username
  );

  const fileUploadHandle = (event) => {
    // console.log(1);
    // console.log(imageFile, "initial");
    const file = event.target.files[0];
    const uploadedFile = URL.createObjectURL(file);
    console.log(uploadedFile);
    // setImagefile(uploadedFile);
    setEditPost({ ...editPost, mediaURL: uploadedFile });
    // console.log(imageFile, "final");
  };

  // console.log(editPost);

  // console.log(imageFile, "finalout");
  // console.log(imageFile);

  const updateHandler = () => {
    // setEditPost({ ...editPost, mediaURL: imageFile });

    editPostService(token, dispatch, editPost);
    setShowEdit(false);
  };

  // console.log(editPost);
  const { theme } = state;

  return (
    <div>
      <div className={styles.overlay} onClick={() => setShowEdit(false)}></div>

      <div
        //  className={styles.addpostcontainer}

        className={`${styles.addpostcontainer} ${
          theme ? styles.lighttheme : styles.darktheme
        }`}
      >
        <div
          // className={styles.addpost}
          className={`${styles.addpost} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          {/* <div> */}
          {/* <div className={styles.userprofile}></div> */}
          <Profile
            url={currentUser?.profilePicture}
            height={"60px"}
            width={"60px"}
          />
          {/* </div> */}
          <div className={styles.textareadiv}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              // className={styles.textarea}
              className={`${styles.textarea} ${
                theme ? styles.lighttheme : styles.darkthemetext
              }`}
              value={editPost?.content}
              placeholder="What's Happening"
              // onChange={() => addPostHandler(event)}
              onChange={(event) =>
                setEditPost({ ...editPost, content: event.target.value })
              }
            ></textarea>
          </div>
        </div>

        <div className={styles.adddata}>
          <div>
            {" "}
            {/* <BsImageFill className={styles.postlogo} />{" "} */}
            {/* <label htmlFor="url">
              <BsImageFill className={styles.postlogo} />{" "}
              <input
                type="file"
                className={styles.inputurl}
                name=""
                id="url"
                onChange={(event) => fileUploadHandle(event)}
              />
            </label> */}
            <div className={styles.labelcontainer}>
              <label htmlFor="url">
                <BsImageFill className={styles.postlogo} />
              </label>
              <input
                type="file"
                className={styles.inputurl}
                name=""
                id="url"
                onChange={(event) => fileUploadHandle(event)}
              />
            </div>
            <BsFillEmojiSmileFill className={styles.postlogo} />{" "}
          </div>

          <div>
            <button onClick={() => updateHandler()} className={styles.button}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
