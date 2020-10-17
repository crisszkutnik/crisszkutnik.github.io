import React, { useState } from "react"
import Logo from "../../../assets/logo"
import LanguageSlider from "./LanguageSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./nav.scss"

const Nav = () => {
	const [displayNav, setNav] = useState(false);

	const showNav = () => {
		let dropdown = document.getElementById("dropdown");
		let logo = document.getElementById("logo");
		let body = document.getElementsByTagName("body")[0];

		if(displayNav) {
			dropdown.style.display = "none";
			body.style.overflowY = "scroll"; // Enable scroll
			logo.classList.remove("res-logo");
		} else {
			dropdown.style.display = "flex";
			body.style.overflowY = "hidden"; // Disable scroll
			logo.classList.add("res-logo");
		}

		setNav(!displayNav);
	}

  return (
    <nav>
		<div id="top-responsive">
			<Logo />
			<FontAwesomeIcon id="nav-slider" onClick={ showNav }icon={ displayNav ? faTimes : faBars } />
		</div>
      <div id="dropdown">
        <div id="dropdown-links">
          <a href="#">Home</a>
          <a href="#">Skills and experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <LanguageSlider />
      </div>
    </nav>
  )
}

export default Nav;
