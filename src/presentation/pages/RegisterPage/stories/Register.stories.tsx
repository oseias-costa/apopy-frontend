import { Meta, StoryObj } from "@storybook/react";
import { Register } from "../Register";

const meta: Meta<typeof Register> = {
  title: "Design System/Register/Register",
  component: Register,
};

export default meta;
type Story = StoryObj<typeof Register>;

export const Primary: Story = {
  render: () => <Register />,
};
