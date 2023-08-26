import { styled } from "styled-components";
import { ButtonModal } from "../../GlobalStyles/modal.style";
import { InputModalWithLabel } from "../../../pages/Layout/components/InputModalWithLabel";

export const SettingsContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 20px;
  display: block;
  overflow-y: auto;
`;

export const ButtonSettings = styled(ButtonModal)`
  min-width: 200px;
  width: auto;

  @media (max-width: 740px) {
    width: 298px;
    margin-left: 2px;
    margin-right: 2px;
  }
`;

export const InputSettings = styled(InputModalWithLabel)`
  width: 280px;
`;
