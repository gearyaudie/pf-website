import React from "react";

export const Projects = () => {
  return (
    <div className="projects-sec container" id="projects">
      <h1>Projects</h1>
      <div className="grid-container">
        <div className="grid-3">
          <div className="proj-container">
            <a href="https://stark-ocean-04445.herokuapp.com/">
              <div className="proj-card">
                <img
                  className="proj-img"
                  src="https://i.ibb.co/cTzbm6L/contact-tracing.png"
                  alt=""
                />
              </div>
            </a>
            <div className="proj-bg">
              <h1>Contact Tracing App</h1>
              <p>React JS, Firebase</p>
            </div>
          </div>
          <div className="proj-container">
            <a href="https://nameless-everglades-73539.herokuapp.com/">
              <div className="proj-card">
                <img
                  className="proj-img"
                  src="https://i.ibb.co/yYmpmB4/Screenshot-146.png"
                  alt=""
                />
              </div>
            </a>
            <div className="proj-bg">
              <h1>Weather App</h1>
              <p>React JS, OpenWeatherMap API</p>
            </div>
          </div>
          <div className="proj-container">
            <a href="https://task-dash.herokuapp.com/">
              <div className="proj-card">
                <img
                  className="proj-img"
                  src="https://i.ibb.co/5v22VNC/Screenshot-148.png"
                  alt=""
                />
              </div>
            </a>
            <div className="proj-bg">
              <h1>Task Dashboard</h1>
              <p>CRUD with React JS and Firebases</p>
            </div>
          </div>
          <div className="proj-container">
            <a href="https://task-dash.herokuapp.com/">
              <div className="proj-card">
                <img
                  className="proj-img"
                  src="https://i.ibb.co/yBBtJPL/Screenshot-158.png"
                  alt=""
                />
              </div>
            </a>
            <div className="proj-bg">
              <h1>Movies Database App</h1>
              <p>React JS, TMDB API</p>
            </div>
          </div>

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
