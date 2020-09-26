import React from "react"
import "./header.scss"

export default function Header() {
  return (
    <div id="header">
      <nav>
        <div>
          <a href="#">Home</a>
          <a href="#">Skills and experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div id="header-content">
        <div id="left-side">
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
            <a href="#">Know me</a>
          </div>
        </div>
        <div id="right-side">

        </div>
      </div>
    </div>
  )
}
