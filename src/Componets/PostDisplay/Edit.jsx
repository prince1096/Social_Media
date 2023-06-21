import React, { useState } from "react";

import styles from "./PostDisplay.module.css";
import { deletePostService } from "../../Services/Post/postServices";
import EditPost from "../EditPost/EditPost";

const Edit = ({ postData, token, dispatch }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className={styles.editpostcontainer}>
      <div>
        <button className={styles.editbtn} onClick={() => setShowEdit(true)}>
          Edit
        </button>
      </div>

      <div>
        <button
          onClick={() => deletePostService(token, dispatch, postData._id)}
          className={styles.deletebtn}
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
