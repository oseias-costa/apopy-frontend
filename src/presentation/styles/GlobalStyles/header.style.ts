import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 48px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: calc(100% - 231px);
  z-index: 40;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const TextWelcome = styled.p`
  font-size: 14px;
  padding-left: 30px;
  color: var(--color-green-strong);
`;

export const TextName = styled.p`
  font-size: 14px;
  display: inline;
  font-weight: 600;
`;

export const HeaderMenu = styled.div`
  padding-right: 60px;
  display: flex;
  align-items: center;
`;

export const HeaderMenuIcon = styled.svg<{ isCliked: boolean }>`
  transition: 0.2s linear;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 50px;
  padding: 5px;
  background-color: ${(props) => (props.isCliked ? "#e7e7e7" : "#fff")};
  fill: ${(props) => (props.isCliked ? "#828282" : "#d9d9d9")};

  &:hover {
    fill: #828282;
    background-color: #e7e7e7;
  }
`;

export const HeaderMenuUser = styled.div<{ isClicked: boolean }>`
  width: 26px;
  height: 26px;
  padding: 5px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${(props) => (props.isClicked ? "#d9d9d9" : "#e7e7e7")};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }
`;

export const Abbreviation = styled.p`
  font-weight: 600;
  font-size: 15px;
  transition: 0.2s linear;
`;

export const MenuDropdownHeaderContainer = styled.div<{
  distanceFromRight: string;
}>`
  width: 200px;
  height: auto;
  background-color: #fff;
  position: fixed;
  right: ${(props) => props.distanceFromRight};
  top: 55px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
`;

export const DropMenuHeaderBody = styled.div<{
  display: boolean;
}>`
  display: ${(props) => (props.display ? "block" : "none")};
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;
