import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const Work: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  return (
    <div className="work_sec container" id="work">
      <div className="work_pad">
        <h1>Work</h1>
        <p className="work_title">
          Front End Web Developer Intern -{" "}
          <span
            className={
              themeData === true ? "about_special_lightmode" : "about_special"
            }
          >
            Policystreet
          </span>
        </p>
        <p className="work_desc">
          (May - Aug 2021) Worked closely with the tech team on maintanance,
          feature developments, and housekeeping tasks on the main website.
          Worked with React JS, Node JS, Git.
        </p>
        <hr />
        <p className="work_title">
          Technical Account Manager Intern -{" "}
          <span
            className={
              themeData === true ? "about_special_lightmode" : "about_special"
            }
          >
            iPrice
          </span>
        </p>
        <p className="work_desc">
          (Oct 2019 - Jan 2020) Experience in an Agile environment. Worked with
          the TAM and BI team with testings, reports, and integration. Tools
          involved: Microsoft BI, Python.
        </p>
      </div>
    </div>
  );
};
