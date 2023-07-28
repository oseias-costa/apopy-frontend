import { useSelector } from "react-redux";
import { HeaderContainer, TextName, TextWelcome, HeaderMenu } from "../../../styles/GlobalStyles/header.style"
import { BellIcon } from "./components/Bell.icon";
import { MessageIcon } from "./components/Message.icon";
import { UserIcon } from "./components/User.icon";

export const Header = () => {
    const { name } = useSelector((state: any) => state.user.user);

    return(
        <HeaderContainer>
            <TextWelcome>Bem vindo, <TextName>{name?.split(' ')[0]}</TextName>.</TextWelcome>
            <HeaderMenu>
                <BellIcon />
                <MessageIcon />
                <UserIcon name={name} />
            </HeaderMenu>
        </HeaderContainer>
    )
}