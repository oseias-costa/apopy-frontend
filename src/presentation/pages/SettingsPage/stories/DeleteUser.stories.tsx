import { Meta, StoryObj } from "@storybook/react";
import { DeleteUser } from "../DeleteUser";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { useState } from "react";
import { DeleteUserState } from "../Settings";

const meta: Meta<typeof DeleteUser> = {
  title: "Design System/Settings/DeleteUser",
  component: DeleteUser,
};

export default meta;
type Story = StoryObj<typeof DeleteUser>;

const state = {
  openModal: true,
  user: {
    _id: "001",
    name: "Oséias Costa",
    phone: "54999817351",
    email: "oseiasc2@gmail.com",
    createAt: "1693075159",
  },
};

const DeleteUserWithProps = ({ state }: { state: DeleteUserState }) => {
  const [deleteUserState, setDeleteUserState] = useState(state);
  return (
    <Provider store={store}>
      <DeleteUser setState={setDeleteUserState} state={deleteUserState} />
    </Provider>
  );
};

export const Primary: Story = {
  render: () => <DeleteUserWithProps state={state} />,
};
