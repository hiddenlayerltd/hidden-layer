import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../images/dot-pattern.svg"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-sm mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-12 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`


export default class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      stock: "",
      USD: 0,
      days: 0,
      m1: false,
      m2: false,
      m3: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log(name)
    console.log(value)
  }

  render() {
    return (
        <Container>
          <Content>
            <FormContainer>
              <div tw="mx-auto max-w-4xl">
                <h2>Predict</h2>
                <form onSubmit={this.handleSubmit}>
                  <TwoColumn>
                    <Column>
                      <InputContainer>
                        <label htmlFor="email-input">Your Email</label>
                        <input
                            id="email-input"
                            type="text"
                            name="email"
                            placeholder="E.g. user@user.com"
                            onChange={this.handleInputChange} />
                      </InputContainer>
                      <InputContainer>
                        <label htmlFor="input">Your Chosen Stock</label>
                        <input
                            id="stock-input"
                            type="text"
                            name="stock"
                            placeholder="E.g. IBM"
                            onChange={this.handleInputChange} />
                      </InputContainer>
                    </Column>

                    <Column>
                      <InputContainer>
                        <label htmlFor="input">USD amount</label>
                        <input
                            id="usd-input"
                            type="decimal"
                            name="USD"
                            placeholder="E.g.  560.23 or 10000"
                            onChange={this.handleInputChange} />
                      </InputContainer>
                      <InputContainer>
                        <label htmlFor="input">Days to Review</label>
                        <input id="days-input"
                               type="number"
                               name="days"
                               placeholder="E.g. 3"
                               onChange={this.handleInputChange} />
                      </InputContainer>
                    </Column>
                  </TwoColumn>
                  <label>
                    Model 1: <input
                      name="m1"
                      type="checkbox"
                      checked={this.state.m1}
                      onChange={this.handleInputChange} />
                  </label>

                  <label>
                    Model 2: <input
                      name="m2"
                      type="checkbox"
                      checked={this.state.m2}
                      onChange={this.handleInputChange} />
                  </label>

                  <label>
                    Model 3: <input
                      name="m3"
                      type="checkbox"
                      checked={this.state.m3}
                      onChange={this.handleInputChange} />
                  </label>

                  <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
                </form>
              </div>
              <SvgDotPattern1/>
            </FormContainer>
          </Content>
        </Container>
    );
  }
}