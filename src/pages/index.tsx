import React from "react";
import Header from "./header/header";
import About from "./about/about";
import Projects from "./projects/projects";
import Footer from "./footer/footer";
import Nav from "./nav/nav";
import GitHub from "../assets/github";
import Mail from "../assets/mail";
import { Helmet } from "react-helmet";
import "./styles.scss";
import Langs from "../lang.json";
import LangContext from "../LangContext";
import { scrollTo } from "../helpers/funcHelpers";
import Fade from "react-reveal/Fade";

interface IProps { }
interface IState {
  selected: number,
  headerHeight: number,
  aboutHeight: number,
  footerHeight: number,
  lang: string
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: 0,
      headerHeight: 0,
      aboutHeight: 0,
      footerHeight: 0,
      lang: "en"
    }
    this.dotFill = this.dotFill.bind(this);
    this.itemHeight = this.itemHeight.bind(this);
    this.sidebarControl = this.sidebarControl.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }

  componentDidMount() {
    this.itemHeight();
    document.addEventListener("scroll", this.dotFill);
    document.addEventListener("scroll", this.sidebarControl);
    window.addEventListener("resize", this.itemHeight);
  }

  itemHeight() {
    this.setState({
      headerHeight: document.getElementById("header").offsetHeight,
      aboutHeight: document.getElementById("about").offsetHeight,
      footerHeight: document.getElementById("footer").offsetHeight
    })
  }

  changeLang() {
    let lang = this.state.lang === "en" ? "es" : "en";
    this.setState({ lang });
  }

  sidebarControl() {
    const setBottom = (n) => {
      elems[0].style.bottom = n + "px";
      elems[1].style.bottom = n + "px";
    }

    let scroll = window.pageYOffset;
    let docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    let elems = document.getElementsByClassName("sidebar-content") as HTMLCollectionOf<HTMLElement>;
    let n1 = scroll + window.innerHeight;
    let n2 = docHeight - this.state.footerHeight;

    if (n1 < n2)
      setBottom(0);
    else
      setBottom(n1 - n2);
  }

  dotFill() {
    let scroll = window.pageYOffset;
    let dots = document.getElementsByClassName("dot-sidebar");
    let newIndex;
    let aboutMax = this.state.headerHeight + this.state.aboutHeight

    if (scroll <= this.state.headerHeight && this.state.selected != 0)
      newIndex = 0;
    else if (scroll > this.state.headerHeight && scroll <= aboutMax && this.state.selected != 1)
      newIndex = 1;
    else if (scroll > aboutMax && this.state.selected != 2)
      newIndex = 2;

    if (newIndex != undefined && newIndex != this.state.selected) { // 0 is also falsy so must compare to undefined
      dots[this.state.selected].classList.remove("selected");
      dots[newIndex].classList.add("selected");
      this.setState({ selected: newIndex });
    }
  }

  render() {
    return (
      <LangContext.Provider value={this.state.lang === "en" ? Langs.en : Langs.es}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Cristobal Szkutnik</title>
          </Helmet>
          <Nav changeLang={this.changeLang} />
          <div id="page-content">
            <div className="sidebar">
              <div className="sidebar-content">
                <Fade left>
                  <div id="sidebar-dots">
                    <div onClick={() => scrollTo("#header")} className="dot-sidebar selected"></div>
                    <div onClick={() => scrollTo("#about")} className="dot-sidebar"></div>
                    <div onClick={() => scrollTo("#projects")} className="dot-sidebar"></div>
                  </div>
                </Fade>
              </div>
            </div>
            <div id="center">
              <Header />
              <About />
              <Projects />
            </div>
            <div className="sidebar">
              <div className="sidebar-content">
                <Fade bottom>
                  <a target="_blank" href="https://github.com/crisszkutnik"><GitHub /></a>
                  <a target="_blank" href="mailto:crisszkutnik@gmail.com"><Mail /></a>
                  <hr />
                </Fade>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </LangContext.Provider>
    );
  }
}

export default Home;