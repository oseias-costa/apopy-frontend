import { useDispatch, useSelector } from "react-redux";
import { fetchUser, initialUserState } from "../../../../../redux/slice/userSlice";
import { RootState } from "../../../../../redux/store";
import * as S from "../../../../../styles/ComponentsStyles/user-header.style";
import { ButtonModal } from "../../../../../styles/GlobalStyles/modal.style";

export const UserHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const sizeName = user.name?.split(" ").length - 1;
  const firstName = user.name?.split(" ")[0]
  const lastName = user.name?.split(" ")[sizeName]

  function handleLogout() {
    localStorage.removeItem("apopyToken");
    dispatch(fetchUser(initialUserState.user));
  }

  return (
    <S.UserHeaderContainer>
      <S.UserAbreviation>
        <S.UserIconCircle>
          {firstName[0]}
          {lastName[0]}
        </S.UserIconCircle>
      </S.UserAbreviation>
      <S.UserNameText>{firstName} {lastName}</S.UserNameText>
      <S.UserEmailText>{user.email}</S.UserEmailText>
      <S.ButtonUserHeader disabled={false} onClick={handleLogout}>
        Sair
      </S.ButtonUserHeader>
    </S.UserHeaderContainer>
  );
};
