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

interface IProps {}
interface IState {
  selected:number,
  headerHeight:number,
  aboutHeight:number
}

class Home extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
      selected: 0,
      headerHeight: 0,
      aboutHeight: 0
    }
    this.dotFill = this.dotFill.bind(this);
    this.itemHeight = this.itemHeight.bind(this);
  }

  componentDidMount() {
    this.itemHeight();
    document.addEventListener("scroll", this.dotFill);
    window.addEventListener("resize", this.itemHeight);
  }

  itemHeight() {
    this.setState({
      headerHeight: document.getElementById("header").offsetHeight,
      aboutHeight: document.getElementById("about").offsetHeight
    })
  }

  dotFill() {
    let scroll = window.pageYOffset;
    let dots = document.getElementsByClassName("dot-sidebar");
    let newIndex;
    let aboutMax = this.state.headerHeight + this.state.aboutHeight

    if(scroll <= this.state.headerHeight && this.state.selected != 0)
      newIndex = 0;
    else if(scroll > this.state.headerHeight && scroll <= aboutMax && this.state.selected != 1)
      newIndex = 1;
    else if(scroll > aboutMax && this.state.selected != 2)
      newIndex = 2;

    if(newIndex != undefined && newIndex != this.state.selected) { // 0 is also falsy so must compare to undefined
      dots[this.state.selected].classList.remove("selected");
      dots[newIndex].classList.add("selected");
      this.setState({ selected: newIndex });
    }
  }

  scrollTo(css_selector:string) {
    let elem:HTMLElement = document.querySelector(css_selector);
    window.scrollTo(0, elem.offsetTop + 1);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cristobal Szkutnik</title>
        </Helmet>
        <Nav />
        <div id="page-content">
          <div className="sidebar">
            <div className="sidebar-content">
              <div id="sidebar-dots">
                <div onClick={() => this.scrollTo("#header")} className="dot-sidebar selected"></div>
                <div onClick={() => this.scrollTo("#about")} className="dot-sidebar"></div>
                <div onClick={() => this.scrollTo("#projects")} className="dot-sidebar"></div>
              </div>
            </div>
          </div>
          <div id="center">
            <Header />
            <About />
            <Projects />
          </div>
          <div className="sidebar">
            <div className="sidebar-content">
              <a target="_blank" href="https://github.com/crisszkutnik"><GitHub /></a>
              <a target="_blank" href="mailto:crisszkutnik@gmail.com"><Mail /></a>
              <hr />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

/*export default function Home() {
  //const [selected, setSelected] = useState(0);

  const scrollTo = (css_selector) => {
    let elem = document.querySelector(css_selector);
    window.scrollTo(0, elem.offsetTop);
  }

  const dotFill = () => {
    let headerHeight = document.getElementById("header").offsetHeight;
    let aboutHeight = document.getElementById("about").offsetHeight
    let scroll = window.pageYOffset;
    let dots = document.getElementsByClassName("dot-sidebar");
    let newIndex;

    if(scroll <= headerHeight && selected != 0)
      newIndex = 0;
    else if(scroll > headerHeight && scroll <= aboutHeight && selected != 1)
      newIndex = 1;
    else if(selected != 2)
      newIndex = 2;

    if(newIndex != undefined) { // 0 is also falsy so must compare to undefined
      dots[selected].classList.remove("selected");
      dots[newIndex].classList.add("selected");
      //setSelected(newIndex);
      selected = newIndex;
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", dotFill);
  }, [])

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cristobal Szkutnik</title>
      </Helmet>
      <Nav />
      <div id="page-content">
        <div className="sidebar">
          <div className="sidebar-content">
            <div id="sidebar-dots">
              <div onClick={() => scrollTo("#header")} className="dot-sidebar selected"></div>
              <div onClick={() => scrollTo("#about")} className="dot-sidebar"></div>
              <div onClick={() => scrollTo("#projects")} className="dot-sidebar"></div>
            </div>
          </div>
        </div>
        <div id="center">
          <Header />
          <About />
          <Projects />
        </div>
        <div className="sidebar">
          <div className="sidebar-content">
            <a target="_blank" href="https://github.com/crisszkutnik"><GitHub /></a>
            <a target="_blank" href="mailto:crisszkutnik@gmail.com"><Mail /></a>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}*/
