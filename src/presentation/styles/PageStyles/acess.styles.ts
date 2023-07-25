import { styled } from "styled-components";
import { Button } from "../GlobalStyles/button.style";
import { Input } from "../GlobalStyles/input.style";

export const Container = styled.section`
  background-color: #012e40;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;

  @media(max-width: 740px){
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  background-color: #fff;
  min-height: 300px;
  width: 400px;
  margin-left: 120px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  padding-top: 42px;
  padding-bottom: 42px;

  @media(max-width: 740px){
    margin-left: 0px;
    margin-top: 78px;
    width: 96%;
  }
`;

export const IconLogo = styled.img`
  width: 100px;
  height: auto;

  @media(max-width: 740px){
    width: 86px;
    height: auto;
  }
`;

export const Text = styled.p`
  color: #1d4859;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 19px;
`;

export const Link = styled.a`
  color: #2a2829;
  font-size: 12px;
  font-family: var(--font-primary);
  padding-top: 5px;
  cursor: pointer;
`;

export const InputLogin = styled(Input)`
    @media(max-width: 740px){
        width: 80%;
    }
`

export const ButtonLogin = styled(Button)`
    @media(max-width: 740px){
        width: 80%;
    }
`

export const ContainerErrorLogin = styled("div")`
    border: 1px solid #BF1F2C;
    background-color: #fff;
    border-radius: 4px;
    width: 200px;
    padding: 8px;
    transition: 0.5s linear;
    
    p{
        color: #BF1F2C;
        font-size: 12px;
        text-align: center;
    }
`

export const Terms = styled.p`
  font-size: 12px;
  text-align: center;
  width: 250px;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #31333B;
  display: inline;
`

export const TermsLink = styled.a`
  cursor: pointer;
  color: #049dd9;
`