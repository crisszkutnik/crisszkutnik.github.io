import React from "react"
import Polygons from "./polygons/polygons"
import Wave from "./wave"
import "./skills.scss"

const Skills = () => {
  return (
    <div id="skills">
      <div id="skills-left" className="skills-container">
        <Polygons />
      </div>
      <div id="skills-right" className="skills-container">
        <h1>SKILLS AND EXPERIENCE</h1>
        <p className="skills-text">
          As a full stack developer I have experience working on both front-end
          and back-end. I’ve built UIs with frameworks like ReactJS and SASS and
          I have worked with Express.js and NoSQL databases (MongoDB) with
          Mongoose, with the latter being my area of most interest.
          <br />
          <br />
          Having said all this, I am interested on learning new tools and
          languages to expand my knowledge.
          <br />
          <br />
          I’ve worked with quite a few frameworks and tools. The ones I have
          more experience with are:
        </p>

		  <div id="skills-list">
				<ul>
					<li>NodeJS</li>
					<li>Express.js</li>
					<li>SASS</li>
				</ul>
				<ul>
					<li>ReactJS</li>
					<li>Gatsby</li>
					<li>MongoDB</li>
				</ul>
				<ul>
					<li>Bootstrap</li>
					<li>Git</li>
				</ul>
		  </div>
      </div>
      <Wave />
    </div>
  )
}

export default Skills
