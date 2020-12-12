import React, { useState, useEffect } from "react"
import Logo from "../../assets/logo"
import LanguageSlider from "./LanguageSlider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./nav.scss"
import LangContext from "../../LangContext"
import { scrollTo } from "../../helpers/funcHelpers"

const Nav = (props) => {
  const [displayNav, setNav] = useState(false);

  const showNav = () => {
    let nav = document.getElementsByTagName("nav")[0];

    if (displayNav)
      nav.classList.remove("res-nav");
    else
      nav.classList.add("res-nav");

    setNav(!displayNav);
  }

  return (
    <nav>
      <div id="top-responsive">
        <Logo />
        <FontAwesomeIcon id="nav-slider" onClick={showNav} icon={displayNav ? faTimes : faBars} />
      </div>
      <div id="dropdown">
        <LangContext.Consumer>
          {(text) => {
            if (text)
              return (
                <div id="dropdown-links">
                  <a onClick={ () => scrollTo("#header") }>{text.nav_text_1}</a>
                  <a onClick={ () => scrollTo("#about") }>{text.nav_text_2}</a>
                  <a onClick={ () => scrollTo("#projects") }>{text.nav_text_3}</a>
                  <a onClick={ () => window.scrollTo(0, document.body.offsetHeight) }>{text.nav_text_4}</a>
                </div>
              );
            else
              return (<></>);
          }}

        </LangContext.Consumer>
        <LanguageSlider changeLang={props.changeLang} />
      </div>
    </nav>
  )
}

export default Nav;
