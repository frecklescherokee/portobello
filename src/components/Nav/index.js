import React, { useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.header`
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0;
  }
`;

const HeaderText = styled.h1`
  color: #00008B;
  cursor: pointer;
`;

const NavElement = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #808080;
`;
const ButtonWrapper = styled.div`
  display: flex;
  min-width: 75%;
  max-width: 50vw;
  justify-content: space-around;

`;

function Nav(props) {
  const { sections = [], sectionSelected, setSectionSelected } = props;

  useEffect(() => {
    document.title = sectionSelected === "Mike Lewis" ? sectionSelected : `Mike Lewis/${sectionSelected}`;
  }, [sectionSelected]);

  return (
    <NavBar>
      <HeaderText
        onClick={() => document.location = "/"}
      >Mike Lewis</HeaderText>
      <ButtonWrapper>
        {sections.map((selection) => {
          return (
            <NavElement
              active={false}
              key={selection.name}
              onClick={(e) => setSectionSelected(e.target.textContent)}
              className={ sectionSelected === selection.name ? "active" : ""}
              href={ selection.name === "Resume" ? "https://drive.google.com/file/d/1NETfUe87cM0AzMKocvCe4LRoeEI9CElu/view?usp=sharing" : "#"}
              target={ selection.name === "Resume" ? 
            "_blank" : "_self"}
            >
              {selection.name}
            </NavElement>
          );
        })}
      </ButtonWrapper>
    </NavBar>
  );
}

export default Nav;
