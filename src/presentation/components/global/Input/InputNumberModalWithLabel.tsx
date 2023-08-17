import { InputModalNumber } from "../../../styles/GlobalStyles/modal.style";
import { PlaceholderSelect } from "../../../styles/GlobalStyles/select.style";

export const InputNumberModalWithLabel = (props) => {
  return (
    <div>
      <PlaceholderSelect>{props.label}</PlaceholderSelect>
      <InputModalNumber {...props} />
    </div>
  );
};
