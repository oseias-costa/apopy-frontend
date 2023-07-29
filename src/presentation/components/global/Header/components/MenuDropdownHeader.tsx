import { DropMenuHeaderBody, MenuDropdownHeaderContainer } from "../../../../styles/GlobalStyles/header.style";

type MenuDropProps = {
  distanceFromRight: string;
  display: boolean;
  id?: string;
  onClick?: React.ReactEventHandler;
};

// export const MenuDropdownHeader = (props: MenuDropProps) => {
export const MenuDropdownHeader = ({distanceFromRight, display, id, onClick} : MenuDropProps) => {
  return (
    <DropMenuHeaderBody display={display} id={id} onClick={onClick}>
      <MenuDropdownHeaderContainer  distanceFromRight={distanceFromRight}></MenuDropdownHeaderContainer>
    </DropMenuHeaderBody>
  );
};
