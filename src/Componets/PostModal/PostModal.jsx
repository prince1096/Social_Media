import React, { useContext } from "react";

import styles from "./PostModal.module.css";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const PostModal = ({ children, theme }) => {
  const { state, dispatch } = useContext(DataUserContext);

  const clickHandler = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <>
      {state?.showModal && (
        <div className={styles.overlay} onClick={() => clickHandler()}></div>
      )}
      {state?.showModal && (
        <div
          className={`${styles.modal} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          {children}

          {/* <NavAdd setShowModal={setShowModal} /> */}
        </div>
      )}
    </>
  );
};

export default PostModal;
