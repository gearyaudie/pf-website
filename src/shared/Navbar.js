import React from "react";

export const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="container flex">
          <h1 class="logo"></h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">About Me</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/" className="nav-resume">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
