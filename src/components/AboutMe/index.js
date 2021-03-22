import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoContainer = styled.div`
  display: flex;
  width: 113px;
  height: 200px;
  
  overflow: hidden;
  background-color: #2E8B57;
  padding: 15px;
`;

const TextContainer = styled.div`
  font-family: Montserrat;
  margin: 0 10%;
  grid-column: 3/5;
  white-space: pre-line;
`
const Text = styled.p`
  color: #00008B;
  opacity: 87%;
  padding: 10px;
`

function AboutMe(props) {
  const { description } = props.section;
  return (
    <TitleDiv>
      <PhotoContainer>
        <img
          src={require("../../assets/photos/me.png").default}
          alt="Mike Lewis piture"
        />
      </PhotoContainer>
      <TextContainer><Text>{description}</Text></TextContainer>
    </TitleDiv>
  );
}
export default AboutMe;
