import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MenuContainer = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  width: 230px;
  margin-right: 2px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  position: fixed;

  @media (max-width: 740px) {
    height: 20px;
    width: 100%;
    background-color: #fff;
  }
`;

export const ImgLogo = styled.img`
  width: 62px;
  height: auto;
  padding-bottom: 40px;
  @media (max-width: 740px) {
    display: none;
  }
`;

export const ImgLogoMobile = styled.img`
  display: none;
  @media (max-width: 740px) {
    display: block;
    width: 90px;
    position: relative;
    bottom: 25px;
  }
`;

export const MenuBlock = styled.div<{ isOpen: boolean }>`
  @media (max-width: 740px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: end;
    position: absolute;
    right: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: pink;
    margin-top: 20px;
    background-color: rgba(1, 46, 64, 0.8);
  }
`;

export const MenuBlockMobile = styled.div`
  .settings {
    padding-top: 40px;
  }

  @media (max-width: 740px) {
    width: 200px;
    // margin-top: 20px;
    margin-right: 20px;
    background-color: #fff;
    padding: 30px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;

    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }

      100% {
        transform: scaleY(1);
      }
    }
  }
`;

export const MenuItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "#EAE5E5" : "#fff")};
  border-radius: 3px;
  width: 130px;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-bottom: 7px;
  transition: 0.3s linear;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;

export const IconMenu = styled("svg")<{ fill: boolean }>`
  color: #fff;
  fill: ${(props) => (props.fill ? "#012E40" : "#828282")};
  transition: 0.3s linear;
`;

export const LinkMenu = styled(Link)<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "#012E40" : "#828282")};
  text-decoration: none;
  font-family: var(--font-primary);
  padding-left: 6px;
  transition: 0.3s linear;
  font-size: 15px;
  font-weight: 500;
`;

export const ButtonMenuMobile = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 740px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px;
    margin-top: 5px;
    margin-right: 7px;
    cursor: pointer;
  }
`;
