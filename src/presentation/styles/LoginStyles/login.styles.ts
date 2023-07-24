import { styled } from "styled-components";

export const Container = styled.section`
  background-color: #012e40;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  height: 300px;
  width: 400px;
  margin-left: 120px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconLogo = styled.img`
  width: 100px;
  height: auto;
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
