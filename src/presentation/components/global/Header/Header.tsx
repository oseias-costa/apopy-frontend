import { useSelector } from "react-redux";
import {
  HeaderContainer,
  TextName,
  TextWelcome,
  HeaderMenu,
} from "../../../styles/GlobalStyles/header.style";
import { BellIcon } from "./components/Bell.icon";
import { MessageIcon } from "./components/Message.icon";
import { UserIcon } from "./components/User.icon";
import { MenuDropdownHeader } from "./components/MenuDropdownHeader";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState({
    userMenu: false,
    msgMenu: false,
    notificationMenu: false,
  });
  const { name } = useSelector((state: any) => state.user.user);
  const bellRef = useRef(null);

  function handleCloseMenu(id, state) {
    document.addEventListener("click", (e) => {
      if (id !== e.target.id) {
        setOpenMenu({ ...openMenu, [state]: false });
      }
    });
  }

  return (
    <>
      <HeaderContainer>
        <TextWelcome>
          Bem vindo, <TextName>{name?.split(" ")[0]}</TextName>.
        </TextWelcome>
        <HeaderMenu>
          <BellIcon
            onClick={() => {
              setOpenMenu({
                userMenu: false,
                msgMenu: false,
                notificationMenu: !openMenu.notificationMenu,
              });
              console.log(bellRef);
            }}
            isCliked={openMenu.notificationMenu}
            id="notificationMenu"
          />
          <MessageIcon
            onClick={() =>
              setOpenMenu({
                userMenu: false,
                msgMenu: !openMenu.msgMenu,
                notificationMenu: false,
              })
            }
            isCliked={openMenu.msgMenu}
            id="msgMenu"
          />
          <UserIcon
            name={name}
            onClick={() =>
              setOpenMenu({
                notificationMenu: false,
                msgMenu: false,
                userMenu: !openMenu.userMenu,
              })
            }
            isCliked={openMenu.userMenu}
            id="userMenu"
          />
        </HeaderMenu>
      </HeaderContainer>
      <MenuDropdownHeader
        distanceFromRight="74px"
        display={openMenu.userMenu}
        id="notificationMenu"
        onClick={(e) => handleCloseMenu("notificationMenu", openMenu.userMenu)}
      />
      <MenuDropdownHeader
        distanceFromRight="130px"
        display={openMenu.msgMenu}
      />
      <MenuDropdownHeader
        distanceFromRight="194px"
        display={openMenu.notificationMenu}
      />
    </>
  );
};
