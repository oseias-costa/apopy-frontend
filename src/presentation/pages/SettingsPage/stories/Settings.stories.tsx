import { Meta, StoryObj } from "@storybook/react";
import { Settings } from "../Settings";

const meta: Meta<typeof Settings> = {
  title: "Design System/Settings/Settings",
  components: Settings,
};

export default meta;
type Story = StoryObj<typeof Settings>;

export const Primary: Story = {
  render: () => <Settings />,
};
