import React from "react";

import styles from "./Footer.module.css";

import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footertitle}>Developed By Prince Raj</div>

      <div className={styles.connect_container}>
        <a
          target="_blank"
          className={styles.footer_button_links}
          href="https://www.instagram.com/codewithprinceraj/"
          rel="noreferrer"
        >
          <GrInstagram className={styles.footerlogo} />
        </a>

        <a
          target="_blank"
          className={styles.footer_button_links}
          href="https://www.linkedin.com/in/prince-raj-a11444126/"
          rel="noreferrer"
        >
          <GrLinkedin className={styles.footerlogo} />
        </a>

        <a
          target="_blank"
          className={styles.footer_button_links}
          href="https://twitter.com/prince101296raj"
          rel="noreferrer"
        >
          <SlSocialTwitter className={styles.footerlogo} />
        </a>

        <a
          target="_blank"
          className={styles.footer_button_links}
          href="https://github.com/prince1096"
          rel="noreferrer"
        >
          <SiGithub className={styles.footerlogo} />
        </a>
      </div>

      <div className={styles.footertitle}>Prinstagram 2023</div>
    </div>
  );
};

export default Footer;
