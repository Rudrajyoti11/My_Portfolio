import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <img src={Insta} alt=""  />
      <div className="f-content">
        <span>rudrajyotiroy11@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/r_u_d_r_a_roy/"><Insta/></a>
          <a href="https://www.facebook.com/rudra.roy.503092"><Facebook/></a>
          <a href="ttps://github.com/Rudrajyoti11?tab=repositories"><Gitub/></a>
          <a href="https://www.linkedin.com/in/rudrajyoti-roy-973761206/"><LinkedIn/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
