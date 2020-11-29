import React from "react"
import "./about.scss"

const About = () => {
  return (
    <div id="about">
      <h1>
        .About me
      </h1>
      <div id="about-text">
        <div id="about-img">
          <div id="img-bg">
            <div id="about-gradient">
            </div>
          </div>
          <div id="img-outline">
          </div>
        </div>
        <div id="about-data">
          <p>
            Hello! I am Cristobal, a software developer and systems engineering student from Buenos Aires, Argentina.
          <br />
            <br />
          I started my degree back in 2019 at the National Technological University (UTN) and I am planning to be finishing it by 2023.
          Since I started studying I also self-taught myself different technologies related to web development and NoSQL databases, like NodeJS, MongoDB,
          and ReactJS.
          <br />
            <br />
          Some of the tools I have experience with are:
          <br />
          <br />
        </p>
          <div id="lang-list">
            <ul>
              <li>ReactJS</li>
              <li>SCSS</li>
              <li>Gatsby</li>
            </ul>
            <ul>
              <li>NodeJS</li>
              <li>Express.js</li>
              <li>Mongoose</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Git/Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
