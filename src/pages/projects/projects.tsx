import React from "react";
import Square from "./square/square";
import BG1 from "../../assets/img1.png";
import "./projects.scss";
import LangContext from "../../LangContext";
import FadeIn from "../../helpers/fadeIn";
import { Fade } from "react-bootstrap";

export default function () {
  return (
    <LangContext.Consumer>
      {(text) => {
        if (text)
          return (
            <div id="projects">
              <div id="projects-title">
                <FadeIn>
                  <h1>{text.project_title}</h1>
                  <hr />
                </FadeIn>
              </div>
              <FadeIn>
                <Square
                  bg={BG1}
                  title="FMC Weekly"
                  text={text.project_1}
                  tags={["ReactJS", "Node.js", "MongoDB", "Express.js"]}
                  gh_link="https://github.com/crisszkutnik/fewestmoves-client"
                  link="https://fmc-weekly.cubing.net"
                />
              </FadeIn>
              <FadeIn>
                <Square
                  title="Sorting Visualizer"
                  text={text.project_2}
                  tags={["HTML", "CSS", "TypeScript"]}
                  gh_link="https://github.com/crisszkutnik/sortingvisualizer-v2"
                  link="https://crisszkutnik.github.io/sortingvisualizer-v2/"
                />
              </FadeIn>
              <FadeIn>
                <Square
                  title="Portfolio"
                  text={text.project_3}
                  tags={["GatsbyJS", "TypeScript", "SCSS"]}
                  gh_link="https://github.com/crisszkutnik/crisszkutnik.github.io" />
              </FadeIn>
            </div>
          );
        else
          return (<></>);
      }}

    </LangContext.Consumer>
  )
}
