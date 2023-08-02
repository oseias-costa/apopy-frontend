import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/slice/modalSlice";

export const Modal = ({
  children,
  state,
  setState,
}: {
  children: React.ReactNode;
  state: { openModal: boolean };
  setState: () => void;
}) => {
  const dispatch = useDispatch();

  function handleClick(e: HTMLDivElement) {
    if (e.target.id === "modal") {
      setState({ ...state, openModal: false });
    }
  }

  return (
    <ModalContainer
      openModal={state?.openModal}
      id="modal"
      name="oseias"
      onClick={(e: HTMLDivElement) => handleClick(e)}
    >
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
  z-index: 100;
`;

const ModalChildren = styled.div`
  background-color: #fff;
  width: 400px;
  height: 400px;
`;
