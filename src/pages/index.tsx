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

export default function Home() {
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
