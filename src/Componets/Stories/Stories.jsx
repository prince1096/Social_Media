import React from "react";
import { useContext } from "react";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

import styles from "./Stories.module.css";
import { useState } from "react";
import StoryButton from "./StoryButton";
import Instastory from "./Instastory";

const Stories = () => {
  const [showStories, setShowStories] = useState(false);

  const storiesHandler = () => {
    console.log(1);
    setShowStories(true);
    console.log(2);
  };

  return (
    <div>
      Stories
      <h1>Hello</h1>
      {/* <button onClick={() => storiesHandler()}> */}
      {/* <StoryButton /> */}
      {/* </button> */}
      <StoryButton storiesHandler={storiesHandler} />
      {/* <StoriesButton onClick={() => storiesHandler()} /> */}
      {showStories && <Instastory setShowStories={setShowStories} />}
      {/* <Instastory setShowStories={setShowStories} /> */}
    </div>
  );
};

export default Stories;
