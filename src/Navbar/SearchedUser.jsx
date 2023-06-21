import React from "react";

import styles from "./SearchedUser.module.css";

const SearchedUser = ({ user }) => {
  return (
    <div>
      <div></div>

      <div>
        <p>
          {user?.firstName} {user?.lastName}
        </p>
        <p>{user?.username}</p>
      </div>
    </div>
  );
};

export default SearchedUser;
