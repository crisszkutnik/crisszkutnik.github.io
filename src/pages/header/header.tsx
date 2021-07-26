import React from "react";
import "./header.scss";
import LangContext from "../../LangContext";
import Fade from "react-reveal/Slide";

export default function Header() {
  /*
    Better resize that is compatible with mobile devices
  */
  /*React.useEffect(() => {
    window.addEventListener("resize", resizeHeader);
    resizeHeader();
  }, [])

  const resizeHeader = () => {
    document.getElementById("header")
    .style.height = window.innerHeight + "px";

    let bottomsvg = document.getElementById("bottomsvg");
    let height = bottomsvg.getBoundingClientRect().height;

    bottomsvg.style.top = window.innerHeight - height + "px";
  }*/

  const setAge = (text: String) => {
    let bornDate = new Date(2001, 3, 25);
    let ageDate = new Date(Date.now() - bornDate.getTime()).getUTCFullYear() - 1970 + "";
    // JS dates start at 1970

    return text.replace("$AGE", ageDate);
  }

  return (
    <div id="header">
      <Fade left>
      <div id="left-side">
        <LangContext.Consumer>
          {(text) => {
            if(text)
              return (
                <div id="left-content">
                  <div id="name-text">
                    <p>
                      {text.header_top}
                    </p>
                    <h1>CRISTOBAL SZKUTNIK</h1>
                    <h2>{text.header_degree}</h2>
                  </div>
                  <div id="description-text">
                    <p>
                    {setAge(text.header_text)}
                  </p>
                  </div>
                  <div id="header-button">
                    <span onClick={() => window.scrollTo(0, window.innerHeight)}>{text.header_btn}</span>
                  </div>
                </div>
              );
            else
              return (<></>);
          }}
        </LangContext.Consumer>
      </div>
      </Fade>
    </div>
  )
}
