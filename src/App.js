import React, { Component } from "react";
import styled from "styled-components";

const fields = [
  {
    label: "Company Name",
    type: "text",
    placeholder: "The Chocolate Factory"
  },
  {
    label: "City",
    type: "text",
    placeholder: "The Chocolate Valley"
  },
  {
    label: "Chocolates",
    type: "number",
    placeholder: "How many?"
  }
];

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ff7675;
  border-radius: 2px;
  font-size: 1.25rem;
  color: #ff7675;
  :focus {
    outline: none;
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const Form = styled.form`
  display: flex;
`;

const Root = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding-top: 6rem;
  justify-content: center;
  background-color: #fd9644;
`;

const Label = styled.p`
  padding-bottom: 0.25rem;
  color: white;
  font-size: 1.15rem;
`;

class RenderInputRow extends Component {
  // YOUR CODE HERE
  // ...correct the mistake for the code to work
  render() {
    let label,
      type,
      placeholder = this.props;
    return (
      <InputRow>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} />
      </InputRow>
    );
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
`;

const Bill = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const Content = styled.div`
  border: 1px solid #ff7675;
  border-radius: 1px;
  background-color: white;
  padding: 0.5rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      companyName: "",
      city: "",
      chocolates: null
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    // YOUR CODE HERE
  }

  render() {
    return (
      <Root>
        <Main>
          <Title>
            Welcome to the Chocolate Factory <span role="img">🍫🍫🍫</span>!
          </Title>
          <Form>
            {fields.map(({ label, type, defaultValue }) => (
              <RenderInputRow
                label={label}
                type={type}
                defaultValue={defaultValue}
              />
            ))}
          </Form>
          <Bill>
            <Title>What is my Bill?</Title>
            <Content>{/* YOUR CODE HERE */}</Content>
          </Bill>
        </Main>
      </Root>
    );
  }
}

export default App;
