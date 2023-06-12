import React from "react";

import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div>Developed By Prince Raj</div>

      <div className="connect_container">
        <a
          target="_blank"
          className="footer_button_links"
          href="https://www.instagram.com/codewithprinceraj/"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>

        <a
          target="_blank"
          className="footer_button_links"
          href="https://www.linkedin.com/in/prince-raj-a11444126/"
          rel="noreferrer"
        >
          <GrLinkedin />
        </a>

        <a
          target="_blank"
          className="footer_button_links"
          href="https://twitter.com/prince101296raj"
          rel="noreferrer"
        >
          <SlSocialTwitter />
        </a>

        <a
          target="_blank"
          className="footer_button_links"
          href="https://github.com/prince1096"
          rel="noreferrer"
        >
          <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
