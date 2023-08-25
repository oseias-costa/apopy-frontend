import { SetStateAction } from "react";
import { DeleteUserState } from "../../pages/SettingsPage/Settings";

export interface DeleteUserProps {
    state: DeleteUserState;
    setState: React.Dispatch<SetStateAction<DeleteUserState>>;
  }