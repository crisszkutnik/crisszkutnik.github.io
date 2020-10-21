import React from "react"
import Square from "./square/square"
import BG1 from "../../assets/img1.png"
import "./projects.scss"

let text1 = `Fewest Moves is a website developed for people who want to practice
          the FMC event. It hosts a weekly competition where 3 scrambles are
          given to the participants and they have one hour to find the shortest
          solution they can.`

export default function () {
  return (
    <div id="projects">
      <div id="projects-title">
        <h1>MY PROJECTS</h1>
        <hr />
      </div>
      <Square
        bg={BG1}
        title="FMC Weekly"
		  text={text1}
		  tags={["ReactJS", "Node.js", "MongoDB", "Express.js"]}
		  gh_link="https://github.com/crisszkutnik/fewestmoves-client"
		  link="https://fmc-weekly.cubing.net"
      />
      <Square title="Sorting Visualizer" />
      <Square />
    </div>
  )
}
