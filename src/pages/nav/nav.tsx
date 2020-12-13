import React, { useState, useEffect} from "react";
import Logo from "../../assets/logo";
import LanguageSlider from "./LanguageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./nav.scss";
import LangContext from "../../LangContext";
import { scrollTo } from "../../helpers/funcHelpers";
import Fade from "react-reveal/Fade";

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

  const scroll = (selector: any) => {
    let type = typeof(selector);

    if(type === "string") // it is a css selector
      scrollTo(selector)
    else if(type === "number")
      window.scrollTo(0, selector)

    if(window.innerWidth < 768) // If it a mobile device, hide the navbar
      showNav();
  }

  return (
    <Fade top>
      <nav>
        <div id="top-responsive">
          <Logo />
          <FontAwesomeIcon id="nav-slider" onClick={showNav} icon={displayNav ? faTimes : faBars} />
        </div>
        <Fade>
          <div id="dropdown">
            <LangContext.Consumer>
              {(text) => {
                if (text)
                  return (
                    <div id="dropdown-links">
                      <a onClick={() => scroll("#header")}>{text.nav_text_1}</a>
                      <a onClick={() => scroll("#about")}>{text.nav_text_2}</a>
                      <a onClick={() => scroll("#projects")}>{text.nav_text_3}</a>
                      <a onClick={() => scroll(document.body.offsetHeight)}>{text.nav_text_4}</a>
                    </div>
                  );
                else
                  return (<></>);
              }}

            </LangContext.Consumer>
            <LanguageSlider changeLang={props.changeLang} />
          </div>
        </Fade>
      </nav>
    </Fade>
  )
}

export default Nav;
