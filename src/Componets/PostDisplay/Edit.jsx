import React, { useState } from "react";

import styles from "./PostDisplay.module.css";
import { deletePostService } from "../../Services/Post/postServices";
import EditPost from "../EditPost/EditPost";

const Edit = ({ postData, token, dispatch, theme }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className={styles.editpostcontainer}>
      <div>
        <button
          className={`${styles.editbtn} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
          onClick={() => setShowEdit(true)}
        >
          Edit
        </button>
      </div>

      <div>
        <button
          onClick={() => deletePostService(token, dispatch, postData._id)}
          className={`${styles.deletebtn} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          Delete
        </button>
      </div>

      {showEdit && (
        <EditPost
          postData={postData}
          token={token}
          dispatch={dispatch}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
    </div>
  );
};

export default Edit;
