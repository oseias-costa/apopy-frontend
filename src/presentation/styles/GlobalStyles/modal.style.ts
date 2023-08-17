import { styled } from "styled-components";

export const ModalContent = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
`

export const ModalContentText = styled.p`
    color: #36454F;
    padding-bottom: 8px;
    max-width: 300px;
    font-size: 11pt;
    margin-bottom: 5px;
`

export const TitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`

export const TitleModalH2 = styled.h2`
    font-weight: 400;
    color: #36454F;
`

export const InputModal = styled.input<{ error?: boolean, disabled?: boolean }>`
  background-color: ${props => props.disabled ? '#D9D9D9' : '#f8f8f8'};
  border-radius: 3px;
  border: 1px solid #c0b4ad;
  padding: 8px;
  font-family: var(--font-primary);
  margin-bottom: 7px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8a8887;
    font-family: var(--font-primary);
  }
  :-ms-input-placeholder {
    color: #8a8887;
    font-family: var(--font-primary);
  }

  &:focus {
    outline: none;
    border: 2px solid var(--color-blue-light);
    padding: 7px;
    transition: border-color 0.4s ease-in-out;
  }
  border: ${(props) => (props.error ? "2px solid #BF1F2C" : "")};
  padding: ${(props) => (props.error ? "7px" : "8px")};

  @media (max-width: 740px) {
    width: 80%;
  }
`;

export const InputModalNumber = styled(InputModal)<{second?: boolean}>`
  width: 96px;
  margin-left: ${ props => props.second && '5px' };
  margin-right: ${ props => props.second && '5px' };
`

export const ButtonModal = styled.button<{disabled: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.disabled ? '#828282' : 'var(--color-blue-light)' };
  height: 34px;
  color: #fff;
  border-radius: 3px;
  border: transparent;
  text-align: center;
  font-size: 14px;
  font-family: var(--font-primary);
  font-weight: 500;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.disabled ? '#828282' : '#026773' };
  }
`