import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const Contact: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  return (
    <div className="contact-sec container">
      <h1>Contact Details</h1>
      <div className="contact-details">
        <div className="inline">
          <a
            href="mailto:gearyaudie.ga@gmail.com"
            className={
              themeData === true ? "contact-icon-lightmode" : "contact-icon"
            }
          >
            <i className="fa fa-envelope"></i>
          </a>
          <p>gearyaudie.ga@gmail.com</p>
        </div>
        <div className="inline">
          <a
            href="https://api.whatsapp.com/send?phone=60143133567&text=Hi%2C%20I%20am%20interested%20with%20your%20work!"
            className={
              themeData === true ? "contact-icon-lightmode" : "contact-icon"
            }
          >
            <i className="fa fa-phone"></i>
          </a>
          <p>+60 14 313 3567</p>
        </div>
      </div>
      <p className="made-with">Made with React JS, Redux, and TypeScript</p>
    </div>
  );
};
