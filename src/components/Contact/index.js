import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #F0F8FF;
  font-family: Montserrat;
`;

const TextArea = styled.textarea`
  width: 500px;
  height: 50px;
  border: 1px soild #ccc;
  background-color: #F0F8FF;
  font-family: Montserrat;
`

const Button = styled.button`
  width: 505px;
  height: 35px;
  background-color: #DC143C;
  color: #fff;
  font-family: Montserrat;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-weight: 600;
  color: #00008B;
  font-size: 2.2em;
`;

function Contact() {
  return(
    <FormWrapper>
    <Title>Contact Me</Title>
    <Form>
      <Input type="text" name="email" placeholder="Email" />
      <TextArea type="text" name="messgae" placeholder="Message" />
      <Button type="submit">Submit</Button>
    </Form>
  </FormWrapper>
  )
}

export default Contact;