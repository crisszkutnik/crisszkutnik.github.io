import React from "react"
import "./about.scss"
import LangContext from "../../LangContext"

const About = () => {
  return (
    <LangContext.Consumer>
      {(text) => {
        if(text)
          return (
            <div id="about">
              <h1>
                .{text.about_title}
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
                    {text.about_text_1}
                    <br />
                    <br />
                    {text.about_text_2}
                    <br />
                    <br />
                    {text.about_text_3}
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
          );
        else
          return(<></>);
      }}
    </LangContext.Consumer>
  )
}

export default About;
