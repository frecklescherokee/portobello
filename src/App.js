import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"

import projects from "./projects.json"

import "./index.css";


const MainElement = styled.main`
  background-color: #F5FFFA;
  height: 100vh;
`;
const App = () => {
  const [sections] = useState([
    {
      name: "About Me",
      description: `
        I like to learn new things and accomplish difficult challenges.  I have previously studied pre-med and microbiology, owned a construction company, operated nuclear plants for the Navy, been a semiconductor technician and engineer, and am now a software development manager with hobbies of mountain biking, fantasy football and real estate investing.`,
    },
    {
      name: "Portfolio",
      description: "Check out what I built.",
    },
    {
      name: "Contact",
      description: "Contact me!",
    },
    {
      name: "Resume",
    },
  ]);

  function renderSwitch() {
    switch (sectionSelected) {
      case sections[0].name:
        return <AboutMe section={sections[0]}></AboutMe>;
      case sections[2].name:
        return <Contact></Contact>;

      default:
        return <Portfolio section={sections[1]} projects={projects}></Portfolio>;
    }
  }

  const [sectionSelected, setSectionSelected] = useState("Mike Lewis");

  return (
    <MainElement>
      <Nav
        sections={sections}
        setSectionSelected={setSectionSelected}
        sectionSelected={sectionSelected}
      ></Nav>
      {renderSwitch()}
    </MainElement>
  );
};

export default App;
