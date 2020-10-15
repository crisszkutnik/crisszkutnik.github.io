import React, { useEffect, useState } from "react"
import Logo from "../../../assets/logo"
import LanguageSlider from "./LanguageSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./nav.scss"

const Nav = () => {
	useEffect(() => {
		document.getElementById("close")
		.addEventListener("click", showNav);

		document.getElementById("nav-slider")
		.addEventListener("click", showNav);
	}, [])

	const showNav = () => {
		let dropdown = document.getElementById("dropdown");
		let logo = document.getElementById("logo");

		if(dropdown.style.display === "flex") {
			dropdown.style.display = "none";
			logo.classList.remove("res-logo");
		} else {
			dropdown.style.display = "flex";
			logo.classList.add("res-logo");
		}
			
	}

  return (
    <nav>
      <Logo />
      <div id="dropdown">
			<FontAwesomeIcon id="close" icon={ faTimes } />
        <div id="dropdown-links">
          <a href="#">Home</a>
          <a href="#">Skills and experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <LanguageSlider />
      </div>
      <FontAwesomeIcon id="nav-slider" icon={ faBars } />
    </nav>
  )
}

export default Nav;
