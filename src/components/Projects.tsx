import React from "react";

export const Projects: React.FC = () => {
  return (
    <div className="projects-sec container">
      <div className="projects-pad" id="projects">
        <h1>Projects</h1>
        <p>All projects repository are available for view on GitHub</p>
        <div className="grid-container">
          <div className="grid-3 projects-grid">
            <div className="proj-container">
              <a href="https://contact-tracing.netlify.app/">
                <div className="proj-card">
                  <img
                    className="proj-img"
                    src="https://i.ibb.co/KXm6pXt/Contact-Tracing-Thumbnail.webp"
                    alt=""
                  />
                </div>
              </a>
              <div className="proj-bg">
                <h1>Contact Tracing App</h1>
                <p>React JS, Redux, Firebase</p>
              </div>
            </div>
            <div className="proj-container">
              <a href="https://weatherapp-geary.netlify.app/">
                <div className="proj-card">
                  <img
                    className="proj-img"
                    src="https://i.ibb.co/P6DWSH3/Weather-App-Thumbnail.webp"
                    alt=""
                  />
                </div>
              </a>
              <div className="proj-bg">
                <h1>Weather App</h1>
                <p>React JS, Redux, TypeScript, OpenWeatherMap API</p>
              </div>
            </div>
            <div className="proj-container">
              <a href="https://task-dash.herokuapp.com/">
                <div className="proj-card">
                  <img
                    className="proj-img"
                    src="https://i.ibb.co/jkP4SD3/Task-Dashboard-Thumbnail.webp"
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
              <a href="https://moviedb-geary.netlify.app/">
                <div className="proj-card">
                  <img
                    className="proj-img"
                    src="https://i.ibb.co/0G3fhTP/Movies-DB-Thumbnail.webp"
                    alt=""
                  />
                </div>
              </a>
              <div className="proj-bg">
                <h1>Movies Database App</h1>
                <p>React JS, Redux, TypeScript, TMDB API</p>
              </div>
            </div>
            <div className="proj-container">
              <a href="https://diaryofacow.herokuapp.com">
                <div className="proj-card">
                  <img
                    className="proj-img"
                    src=" https://i.ibb.co/K0wKB6S/Node-Blog-Thumbnail.webp"
                    alt=""
                  />
                </div>
              </a>
              <div className="proj-bg">
                <h1>Node Blog (CRUD)</h1>
                <p>Node JS, Express JS, MongoDB</p>
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
    </div>
  );
};
