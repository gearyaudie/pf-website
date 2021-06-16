import React from "react";
import { useSelector } from "react-redux";

export const Work = () => {
  const themeData = useSelector((state) => state.theme.themeChange);

  return (
    <div className="work-sec container" id="work">
      <div className="work-pad">
        <h1>Work</h1>
        <p className="work-title">
          Front End Web Developer Intern -{" "}
          <span
            className={
              themeData === true ? "about-special-lightmode" : "about-special"
            }
          >
            Policystreet
          </span>
        </p>
        <p className="work-desc">
          (May - Aug 2021) Worked closely with the tech team on maintanance,
          feature developments, and housekeeping tasks on the main website.
          Worked with React JS, Node JS, Git.
        </p>
        <hr />
        <p className="work-title">
          Technical Account Manager Intern -{" "}
          <span
            className={
              themeData === true ? "about-special-lightmode" : "about-special"
            }
          >
            iPrice
          </span>
        </p>
        <p className="work-desc">
          (Oct 2019 - Jan 2020) Experience in an Agile environment. Worked with
          the TAM and BI team with testings, reports, and integration. Tools
          involved: Microsoft BI, Python.
        </p>
      </div>
    </div>
  );
};
