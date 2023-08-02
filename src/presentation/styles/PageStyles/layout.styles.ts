import { styled } from "styled-components";

export const ContentMain = styled.section`
  margin-left: 231px;

  @media (max-width: 740px) {
    margin-left: 0px;
    padding-top: 60px;
  }
`;

export const ContainerContentLayout = styled.div`
  margin-left: 17px;
  margin-right: 17px;
  margin-top: 68px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  background-color: #fff;
  min-height: 300px;
  border-radius: 5px;
  padding: 32px;

  @media (max-width: 740px) {
    margin-top: 0px;
  }
`;
