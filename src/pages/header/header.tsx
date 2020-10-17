import React from "react";
import "./header.scss";
import GH_LOGO from "../../assets/github";
import Mail from "../../assets/mail";
import Bottom from "./bottom/bottom"
import Nav from "./nav/nav"

export default function Header() {
  return (
    <div id="header">
      <div id="left-side">
        <Nav />
        <div id="left-content">
          <div id="name-text">
            <p>Hello, I am</p>
            <h1>CRISTOBAL SZKUTNIK</h1>
            <h2>Full stack developer</h2>
          </div>
          <div id="description-text">
            <p>
              Hi! I am a 19 year old systems engineering student and full stack
              developer from Buenos Aires, Argentina. I am most into JavaScript
              and JS based frameworks like ReactJS, TypeScript and NodeJS.
              Currently not employed but working on several projects. Keep
              scrolling to know more about me!
            </p>
          </div>
          <div id="header-button">
            <a href="#skills"><span>Know me</span></a>
          </div>
        </div>
      </div>
      <div id="right-side">
        <hr className="right-bar" />
        <div>
          <a href="https://github.com/crisszkutnik" target="_blank">
            <GH_LOGO />
          </a>
          <a href="mailto:crisszkutnik@gmail.com" target="_blank">
            <Mail />
          </a>
        </div>
        <hr className="right-bar" />
      </div>
      <Bottom />
    </div>
  )
}
