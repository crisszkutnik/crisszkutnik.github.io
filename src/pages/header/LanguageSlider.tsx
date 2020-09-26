import React, { useState } from "react"

export default function LanguageSlider() {
	const [eng, setLang] = useState(true);

	let changeBG = () => {
		let e = document.getElementById("dot");
		let container = document.getElementById("dot-container");
		
		if(eng) {
			e.classList.remove("uk-flag");
			e.classList.add("spain-flag");
			e.style.marginLeft = `${container.offsetWidth - e.offsetWidth}px`;
			setLang(false);
		} else {
			e.classList.remove("spain-flag");
			e.classList.add("uk-flag");
			e.style.marginLeft = "0px";
			setLang(true);
		}
	}

	return (
		<div id="lang-slider">
			<p>EN</p>
				<div id="dot-container" onClick={ changeBG }>
					<div id="dot" className="uk-flag" ></div>
				</div>
			<p>ES</p>
		</div>
	);
}