import { InputModal } from "../../../styles/GlobalStyles/modal.style";
import { PlaceholderSelect } from "../../../styles/GlobalStyles/select.style";

export const InputModalWithLabel = (props) => {
  return (
    <div>
      <PlaceholderSelect>{props.label}</PlaceholderSelect>
      <InputModal {...props} />
    </div>
  );
};
