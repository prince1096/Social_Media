import React, { Profiler, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import TopNav from "../Navbar/TopNav";
import Suggestion from "../Suggestions/Suggestion";
import AddPost from "../Componets/AddPost/AddPost";
import Filter from "../Componets/Filter/Filter";
import Footer from "../Footer/Footer";

import styles from "./HomePage.module.css";
import Scroll from "../Scroll/Scroll";
import Profile from "../Componets/Profile/Profile";
import Edit from "../Componets/PostDisplay/Edit";
import { Outlet } from "react-router";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

const HomePage = () => {
  const { state } = useContext(DataUserContext);

  const { theme } = state;

  return (
    <div className={theme ? styles.lighttheme : styles.darktheme}>
      <div className={styles.homecontainer}>
        <div className={styles.item1}>
          <TopNav />
        </div>
        <div className={` ${styles.item2} ${styles.navbar} ${styles.navdiv} `}>
          <Navbar />
        </div>
        <div className={styles.item3}>
          {" "}
          <Outlet />
        </div>
        <div className={styles.item4}>
          <Suggestion />
        </div>
        <div className={styles.item5}>
          <Footer />
        </div>
      </div>
    </div>

    // <div>
    // {/* <Scroll /> */}
    // {/* <Edit /> */}
    // </div>
  );
};

export default HomePage;
