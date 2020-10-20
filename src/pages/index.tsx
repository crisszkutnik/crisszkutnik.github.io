import React from "react";
import Header from "./header/header";
import Skills from "./skills/skills";
import Projects from "./projects/projects"
import { Helmet } from "react-helmet";
import "./styles.scss";

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cristobal Szkutnik</title>
      </Helmet>
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}
