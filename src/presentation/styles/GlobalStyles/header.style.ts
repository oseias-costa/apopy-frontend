import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 48px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  justify-content: space-between;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const TextWelcome = styled.p`
  font-size: 14px;
  padding-left: 30px;
  color: var(--color-green-strong);
`

export const TextName = styled.p`
  font-size: 14px;
  display: inline;
  font-weight: 600;
`

export const HeaderMenu = styled.div`
  padding-right: 60px;
  display: flex;
  align-items: center;
`

export const HeaderMenuIcon = styled.svg`
  fill: #D9D9D9;
  transition: 0.2s linear;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 50px;
  padding: 5px;

  &:hover {
    fill: #828282;
    background-color: #E7E7E7;
  }
`

export const HeaderMenuUser = styled.div`
  width: 26px;
  height: 26px;
  padding: 5px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: #E7E7E7;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #D9D9D9;
  }
`

export const Abbreviation = styled.p`
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s linear;
`