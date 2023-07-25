import { styled } from "styled-components";

export const Input = styled.input`
  background-color: #f8f8f8;
  border-radius: 3px;
  border: 1px solid #c0b4ad;
  padding: 8px;
  margin-top: 5px;
  width: 200px;
  font-family: var(--font-primary);

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
    border: 2px solid #049dd9;
    padding: 7px;
    transition: border-color 0.4s ease-in-out;
  }
`;
