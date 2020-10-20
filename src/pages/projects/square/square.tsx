import React from "react"
import Github from "../../../assets/github"
import VisitSVG from "./visit_page"
import "./square.scss"

const Square = props => {
  let bg =
    "linear-gradient(120.26deg, rgba(233, 69, 96, 0.9) 39.71%, rgba(255, 107, 0, 0.9) 105.48%)"
  bg += props.bg ? `, url(${props.bg})` : ""

  let gh = props.gh_link ? (
    <a className="square-gh" href={props.gh_link} target="_blank">
      <Github />
    </a>
  ) : (
    <></>
  )

  let button = props.link ? (
    <a href={props.link} target="_blank">
      <VisitSVG />
    </a>
  ) : (
    <></>
  )

  return (
    <div
      className="project-square"
      style={{ background: bg, backgroundSize: "cover" }}
    >
      <div className="square-title">
        <h1>{props.title}</h1>
      </div>
      <div className="square-data">
        <span>{props.tags ? props.tags.join(" • ") : ""}</span>
        <p>{props.text}</p>
        <div>
          {button}
          {gh}
        </div>
      </div>
    </div>
  )
}

export default Square
