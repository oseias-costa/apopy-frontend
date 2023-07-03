import { useReactiveVar } from '@apollo/client'
import styled from "styled-components";
import { dispatchModal, initialValue } from '../../../infra/context/modal-reactiveVar';

export const Modal = ({ children }: { children: React.ReactNode }) => {
const state = useReactiveVar(dispatchModal)

function handleClick(e: HTMLDivElement){
  if(e.target.id === 'modal'){
    return dispatchModal(initialValue)
  }
}

  return (
    <ModalContainer openModal={state.openModal} id="modal" name='oseias' onClick={(e: HTMLDivElement) => handleClick(e)}>
      <ModalChildren>{children}</ModalChildren>
    </ModalContainer>
  );
};

const ModalContainer = styled("div")<{ openModal: boolean }>`
  display: ${(props) => (props.openModal === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
`;

const ModalChildren = styled.div`
  background-color: #fff;
  width: 400px;
  height: 400px;
`;