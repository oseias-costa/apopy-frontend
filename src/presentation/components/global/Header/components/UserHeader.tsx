import { useDispatch, useSelector } from "react-redux"
import { fetchUser, initialUserState } from "../../../../redux/slice/userSlice"
import { RootState } from "../../../../redux/store"
import * as S from "../../../../styles/ComponentsStyles/userHeader"

export const UserHeader = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState)=> state.user.user)
    const sizeName = user.name?.split(" ").length - 1;

    function handleLogout() {
        localStorage.removeItem("apopyToken");
        dispatch(fetchUser(initialUserState.user));
      }


    return(
        <S.UserHeaderContainer>
            <S.UserAbreviation>
                <S.UserIconCircle>
                    {user.name?.split(" ")[0][0]}
                    {user.name?.split(" ")[sizeName][0]}
                </S.UserIconCircle>
            </S.UserAbreviation>
            <S.UserNameText>{user.name}</S.UserNameText>
            <S.UserEmailText>{user.email}</S.UserEmailText>
            <button onClick={() => handleLogout()}>Logout</button>
        </S.UserHeaderContainer>
    )
}

