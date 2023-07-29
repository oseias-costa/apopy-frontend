import { MenuDropdownHeaderContainer, NotificationDropMenuContainer } from "../../../../styles/GlobalStyles/header.style"

type MenuDropProps = {
    distanceFromRight: string;
    display: boolean;
    id?: string;
    onClick?: React.ReactEventHandler;
  };

export const NotificationDropMenu = ({display, id, onClick, distanceFromRight}: MenuDropProps) => {
    return(
        <NotificationDropMenuContainer
            display={display}
            id={id}
            onClick={onClick}
        >
            <MenuDropdownHeaderContainer
                distanceFromRight={distanceFromRight}
            >
                <p>Notificação</p>
            </MenuDropdownHeaderContainer>
        </NotificationDropMenuContainer>
    )
}