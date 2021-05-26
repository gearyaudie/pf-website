import React from "react";

export const Projects = () => {
  return (
    <div className="projects-sec container" id="projects">
      <h1>Projects</h1>
      <div className="grid-container">
        <div className="grid-3 proj-card">
          <a href="https://stark-ocean-04445.herokuapp.com/">
            <div className="proj-card">
              <img
                className="proj-img"
                src="https://i.ibb.co/cTzbm6L/contact-tracing.png"
                alt=""
              />
              {/* <div className="proj-over">
              <h3 className="proj-title">Contact Tracing App</h3>
              <p className="proj-desc">React JS, Firebase</p>
            </div> */}
            </div>
          </a>
          <a href="https://nameless-everglades-73539.herokuapp.com/">
            <div className="proj-card">
              <img
                className="proj-img"
                src="https://i.ibb.co/yYmpmB4/Screenshot-146.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://task-dash.herokuapp.com/">
            <div className="proj-card">
              <img
                className="proj-img"
                src="https://i.ibb.co/5v22VNC/Screenshot-148.png"
                alt=""
              />
            </div>
          </a>

          {/* <img
            className="proj-img"
            src="https://via.placeholder.com/225x175"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};
