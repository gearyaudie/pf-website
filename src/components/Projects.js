import React from "react";

export const Projects = () => {
  return (
    <div className="projects-sec container">
      <h1>Projects</h1>
      <div className="grid-container">
        <div className="grid-3 proj-card">
          <div className="proj-card">
            <img
              className="proj-img"
              src="https://i.ibb.co/cTzbm6L/contact-tracing.png"
              alt=""
            />
            <div className="proj-over">
              <h3 className="proj-title">Contact Tracing App</h3>
              <p className="proj-desc">React JS, Firebase</p>
            </div>
          </div>
          <img
            className="proj-img"
            src="https://via.placeholder.com/225x175"
            alt=""
          />
          <img
            className="proj-img"
            src="https://via.placeholder.com/225x175"
            alt=""
          />
          <img
            className="proj-img"
            src="https://via.placeholder.com/225x175"
            alt=""
          />
          <img
            className="proj-img"
            src="https://via.placeholder.com/225x175"
            alt=""
          />
          <img
            className="proj-img"
            src="https://via.placeholder.com/225x175"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
