import React, { useState } from "react"
import Github from "../../../assets/github"
import "./square.scss"

const Square = props => {
  const [mouseEnter, setMouse] = useState(false)
  const [timeout, sTime] = useState()

  let bg =
    "linear-gradient(120.26deg, rgba(233, 69, 96, 0.9) 39.71%, rgba(255, 107, 0, 0.9) 105.48%)"
  bg += props.bg ? `, url(${props.bg})` : ""

  return (
    <div
      className="project-square"
      style={{ background: bg, backgroundSize: "cover" }}
    >
      <div className="square-title">
        <h1>{props.title}</h1>
      </div>
      <div className="square-data">
        <p>
          Fewest Moves is a website developed for people who want to practice
          the FMC event. It hosts a weekly competition where 3 scrambles are
          given to the participants and they have one hour to find the shortest
          solution they can.
        </p>
        <div>
          <Github />
        </div>
      </div>
    </div>
  )
}

export default Square
