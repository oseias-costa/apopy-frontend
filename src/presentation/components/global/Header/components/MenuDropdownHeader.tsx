import { MenuDropdownHeaderContainer } from "../../../../styles/GlobalStyles/header.style";

type MenuDropProps = {
  distanceFromRight: string;
  display: boolean;
  id?: string;
  onClick?: React.ReactEventHandler;
};

export const MenuDropdownHeader = (props: MenuDropProps) => {
  return (
    <MenuDropdownHeaderContainer
      {...props}
    ></MenuDropdownHeaderContainer>
  );
};
