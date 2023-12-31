import { useSelector } from "react-redux";
import {
  HeaderContainer,
  TextName,
  TextWelcome,
  HeaderMenu
} from "../../../../styles/GlobalStyles/header.style";
import { BellIcon } from "./components/Bell.icon";
import { MessageIcon } from "./components/Message.icon";
import { UserIcon } from "./components/User.icon";
import { MenuDropdownHeader } from "./components/MenuDropdownHeader";
import React, { useReducer } from "react";
import { ActionMenuHeader, ActionMenuHeaderType, initialStateMenuHeader, StateMenuHeader } from "../../../../types/components/header.types";
import { UserHeader } from "./components/UserHeader";
import { MessageHeaderMenu, MessageHeaderMenuContent, MessageHeaderMenuTitle } from "../../../../styles/ComponentsStyles/notification-header.style";
import { RootState } from "../../../../redux/store";

export const Header = () => {

  function reducer(state: StateMenuHeader, action: ActionMenuHeaderType){
    switch(action.type){
      case 'notificationChange': 
        return { notification: !state.notification }
      
      case 'messageChange': 
        return { message: !state.message }
      
      case 'userChange': 
        return { user: !state.user }

      case 'resetState': 
        return initialStateMenuHeader
      
      default: 
        console.error(`Unhandled action type ${action.type}`);
        return state;
    }
  }

  const [state, dispatch] = useReducer<any>(reducer, initialStateMenuHeader)
  const { name } = useSelector((state: RootState) => state.user.user);


  return (
    <>
      <HeaderContainer>
        <TextWelcome>
          Bem vindo, <TextName>{name?.split(" ")[0]}</TextName>.
        </TextWelcome>
        <HeaderMenu>
          <BellIcon
            onClick={() => dispatch({type: 'notificationChange'})}
            isCliked={state?.notification}
          />
          <MessageIcon
            onClick={() => dispatch({type: 'messageChange'})}
            isCliked={state?.message}
          />
          <UserIcon
            name={name}
            onClick={() => dispatch({type: 'userChange'})}
            isCliked={state?.user}
          />
        </HeaderMenu>
      </HeaderContainer>
      <MenuDropdownHeader
        distanceFromRight="74px"
        display={state?.user}
        onClick={() => dispatch({type: 'resetState'})}
      >
        <UserHeader />
      </MenuDropdownHeader>
      <MenuDropdownHeader
        distanceFromRight="130px"
        display={state?.message}
        onClick={() => dispatch({type: 'resetState'})}
      >
        <MessageHeaderMenu>
          <MessageHeaderMenuTitle>Mensagens</MessageHeaderMenuTitle>
          <MessageHeaderMenuContent>Você não tem mensagens</MessageHeaderMenuContent> 
        </MessageHeaderMenu>
      </MenuDropdownHeader>
      <MenuDropdownHeader
        distanceFromRight="194px"
        display={state?.notification}
        onClick={() => dispatch({type: 'resetState'})}
      >
        <MessageHeaderMenu>
          <MessageHeaderMenuTitle>Notificações</MessageHeaderMenuTitle>
          <MessageHeaderMenuContent>Você não tem notificações</MessageHeaderMenuContent> 
        </MessageHeaderMenu>
      </MenuDropdownHeader>
    </>
  );
};
