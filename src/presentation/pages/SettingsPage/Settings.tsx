import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../../../domain/entities/user";
import { InputModalWithLabel } from "../Layout/components/InputModalWithLabel";
import { RootState } from "../../redux/store";
import { TitleSection } from "../../styles/GlobalStyles/titleWithButton.style";
import {
  ButtonSettings,
  SettingsContainer,
} from "../../styles/PageStyles/SettingsStyles/settings.style";
import { DeleteUser } from "./DeleteUser";
import { initialUserState } from "../../redux/slice/userSlice";
import { formatDate } from "../SalesPage/components/utils-sales";

export type DeleteUserState = {
  openModal: boolean;
  user: User;
};

export const Settings = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [settingsState, setSettingsState] = useState({
    openModal: false,
    user: initialUserState.user,
  });
  const createAccountDate =
    user?.createAt && new Date(Number(user?.createAt)).toString();

  useEffect(() => {
    setSettingsState({ openModal: false, user: user });
  }, [user]);

  return (
    <SettingsContainer>
      <TitleSection>Conta</TitleSection>
      <InputModalWithLabel label="Nome" value={user?.name} disabled={true} />
      <InputModalWithLabel label="Email" value={user?.email} disabled={true} />
      <InputModalWithLabel
        label="Telefone"
        value={user?.phone}
        disabled={true}
      />
      <InputModalWithLabel
        label="Data de Criação"
        value={createAccountDate ? formatDate(createAccountDate) : ""}
        disabled={true}
      />

      <DeleteUser state={settingsState} setState={setSettingsState} />
      <ButtonSettings
        disabled={false}
        onClick={() => setSettingsState({ ...settingsState, openModal: true })}
      >
        Excluir Conta
      </ButtonSettings>
    </SettingsContainer>
  );
};
