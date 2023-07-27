import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 48px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  width: 100%;
  display: flex;
  margin-bottom: 36px;
  @media (max-width: 740px) {
    display: none;
  }
`;
