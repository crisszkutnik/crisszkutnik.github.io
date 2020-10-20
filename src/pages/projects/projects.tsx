import React from "react";
import Square from "./square/square";
import BG1 from "../../assets/img1.png";
import "./projects.scss";

export default function() {
	return (
		<div id="projects">
			<Square bg={BG1} title="FMC Weekly"/>
			<Square title="Sorting Visualizer"/>
		</div>
	);
}