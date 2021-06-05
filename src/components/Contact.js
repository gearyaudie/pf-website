import React from "react";

export const Contact = () => {
  return (
    <div className="contact-sec container">
      <h1>Contact Details</h1>
      <div className="contact-details">
        <div className="inline">
          <a href="mailto:gearyaudie.ga@gmail.com">
            <i className="fa fa-envelope contact-icon"></i>
          </a>
          <p>gearyaudie.ga@gmail.com</p>
        </div>
        <div className="inline">
          <a href="https://api.whatsapp.com/send?phone=60143133567&text=Hi%2C%20I%20am%20interested%20with%20your%20work!">
            <i className="fa fa-phone contact-icon"></i>
          </a>
          <p>+60 14 313 3567</p>
        </div>
      </div>
    </div>
  );
};
