import React from "react";
import styled from "styled-components";

interface ModalPropps {
  children: React.ReactNode;
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

export const Modal: React.FC<ModalPropps> = ({ children, state, setState }) => {
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target.id === "modal") {
      setState({ ...state, openModal: false });
    }
  }

  return (
    <ModalContainer
      openModal={state?.openModal}
      id="modal"
      onClick={(e) => handleClick(e)}
    >
      <ModalChildren>{children}</ModalChildren>
    </ModalContainer>
  );
};

const ModalContainer = styled("div")<{ openModal: boolean }>`
  display: ${(props) => (props.openModal === true ? "flex" : "none")};
  opacity: ${(props) => (props.openModal === true ? "1" : "0")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 100;
  transition: opacity 1s ease-in-out;
`;

const ModalChildren = styled.div`
  background-color: #fff;
  min-width: 400px;
  border-radius: 5px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(.5);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to{
        opacity: initial;
        transform: initial;
    }
}
`;
