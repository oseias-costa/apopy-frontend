import { useSelector } from "react-redux"
import { InputModalWithLabel } from "../../components/global/Input/InputModalWithLabel"
import { RootState } from "../../redux/store"
import { TitleSection } from "../../styles/GlobalStyles/titleWithButton.style"
import { SettingsContainer } from "../../styles/PageStyles/SettingsStyles/settings.style"


export const Settings = () => {
    const user = useSelector((state: RootState) => state.user.user)

    return(
        <SettingsContainer>
            <TitleSection>Conta</TitleSection>
            <InputModalWithLabel label='Nome' value={user?.name} disabled={true} />
            <InputModalWithLabel label='Email' value={user?.email} disabled={true} />
            <InputModalWithLabel label='Telefone' value={user?.phone} disabled={true} />
            <InputModalWithLabel label='Data de Criação' value={user?.createAt} disabled={true} />
        </SettingsContainer>

    )
}