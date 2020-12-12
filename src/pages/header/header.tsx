import React from "react";
import "./header.scss";
import LangContext from "../../LangContext";

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

  return (
    <div id="header">
      <div id="left-side">
        <LangContext.Consumer>
          {(text) => {
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
                    Hi! I am a 19 year old systems engineering student and full stack
                    developer from Buenos Aires, Argentina. I am most into JavaScript
                    and JS based frameworks like ReactJS, TypeScript and NodeJS.
                    Currently not employed but working on several projects. Keep
                    scrolling to know more about me!
                </p>
                </div>
                <div id="header-button">
                  <span onClick={() => window.scrollTo(0, window.innerHeight)}>Know me</span>
                </div>
              </div>
            );
          }}
        </LangContext.Consumer>
      </div>
    </div>
  )
}
