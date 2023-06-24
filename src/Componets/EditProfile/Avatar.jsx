import React from "react";

import styles from "./EditProfile.module.css";

import boy from "../../assets/boy.png";
import gamer from "../../assets/gamer.png";
import girl from "../../assets/girl.png";
import hacker from "../../assets/hacker.png";
import female from "../../assets/female.png";
import man from "../../assets/man.png";
import person from "../../assets/person.png";
import user from "../../assets/user.png";
import woman from "../../assets/woman.png";
import Batman from "../../assets/batman.png";

import Profile from "../Profile/Profile";

const Avatar = ({ setShowAvatar, setNewAvatar }) => {
  const avatarList = [
    boy,
    gamer,
    girl,
    hacker,
    female,
    man,
    person,
    user,
    woman,
    Batman,
  ];

  const avatarHandler = (avatar) => {
    setShowAvatar(false);
    setNewAvatar(avatar);
  };

  return (
    <div className={styles.avatar}>
      {avatarList.map((avatar) => (
        <div>
          <button
            className={styles.avatardiv}
            onClick={() => avatarHandler(avatar)}
          >
            <Profile
              url={avatar}
              height="40px"
              width="40px"

              //   className={styles.avatarpic}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Avatar;
