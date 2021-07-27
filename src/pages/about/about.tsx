import React from "react";
import "./about.scss";
import LangContext from "../../LangContext";
import FadeIn from "../../helpers/fadeIn";
import AllLogos from "./allLogos";

const About = () => {
  return (
    <LangContext.Consumer>
      {(text) => {
        if (text)
          return (
            <div id="about">
              <FadeIn>
                <h1>
                  .{text.about_title}
                </h1>
              </FadeIn>
              <FadeIn>
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
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <AllLogos />
              </FadeIn>
            </div>
          );
        else
          return (<></>);
      }}
    </LangContext.Consumer>
  )
}

export default About;
