import React, { useState } from "react";
import "./square.scss"

const Square = (props) => {
	const [mouseEnter, setMouse] = useState(false);

	const toggleMouse = () => {
		setTimeout(() => {
			setMouse(!mouseEnter)
		}, 250);
	}

	return (
		<div onMouseLeave={toggleMouse} onMouseEnter={toggleMouse} className="project-square">
			<div className="square-container">
				<div className="square-title" style={{ display: `${mouseEnter ? "none" : "block"}` }}>
					<h1>Sample text</h1>
				</div>
				<div className="square-data">

				</div>
			</div>
		</div>
	);
}

export default Square;