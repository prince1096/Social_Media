import React, { Profiler } from "react";
import Navbar from "../Navbar/Navbar";
import TopNav from "../Navbar/TopNav";
import Suggestion from "../Suggestions/Suggestion";
import AddPost from "../Componets/AddPost/AddPost";
import Filter from "../Componets/Filter/Filter";
import Footer from "../Footer/Footer";

import styles from "./HomePage.module.css";
import Scroll from "../Scroll/Scroll";
import Profile from "../Componets/Profile/Profile";

const HomePage = () => {
  return (
    <div className={styles.homecontainer}>
      {/* <Profile /> */}
      {/* <TopNav /> */}
      {/* <Navbar /> */}
      {/* <Suggestion /> */}
      {/* <AddPost /> */}
      {/* <Filter /> */}
      {/* <Footer /> */}
      <div>
        <TopNav />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Scroll />
      </div>
      <div>
        <Suggestion />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
