import React from "react";
import styled from "styled-components";

const PortfolioDiv = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, 40vw);
  grid-template-rows: repeat(3, 25vh);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  border: 1px soild #ccc;
  @media only screen and (max-width: 750px) {
      grid-template-columns: repeat(2, 50vw);
      grid-template-rows: repeat(5, 25vh);
  };
  @media only screen and (max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(9, 30vh)
  }
`;

const Project = styled.a`
  color: #F0FFF0;
  font-family: Montserrat;
  background-size: cover;
  padding: 8px;
  text-decoration: none;
  border: 1px soild #ccc;
`;

const ProjectHeader = styled.h4`
  background-color: #DC143C;
  opacity: 80%;
  display: flex;
  text-decoration: none;
  padding: 5px 5px;

`

const ProjectText = styled.p`
  background-color: #000080;
  opacity: 80%;
  display: flex;
  padding: 0 5px;
`

function Portfolio(props) {
  const { projects } = props;
  return (
    <PortfolioDiv>
      {projects.map((project, i) => {
        const { name, description, screenshot, link } = project;
        const background = require(`../../assets/photos/${screenshot}`).default
        return (
          <Project
            href={link}
            key={i}
            style={{
              backgroundImage: `url(${background})`
            }}
          >
            <ProjectHeader>{name}</ProjectHeader>
            <ProjectText>{description}</ProjectText>
          </Project>
        );
      })}
    </PortfolioDiv>
  );
}

export default Portfolio;
