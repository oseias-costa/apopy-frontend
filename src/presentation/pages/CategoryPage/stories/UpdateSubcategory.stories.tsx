import { Meta, StoryObj } from "@storybook/react";
import { UpdateSubcategory } from "../components/UpdateSupcategory";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { useState } from "react";
import { initialCategoryValue } from "../../../types/pages/category.types";

const meta: Meta<typeof UpdateSubcategory> = {
  title: "Design System/Category/UpdateSubcategory",
  component: UpdateSubcategory,
};

export default meta;
type Story = StoryObj<typeof UpdateSubcategory>;

const UpdateSubcategoryWhithoudProps = () => {
  const [categoryState, setCategoryState] = useState({
    ...initialCategoryValue,
    _id: "002",
    openModal: true,
    name: "Poltrona",
    newSubcategory: "Giratória",
  });
  return (
    <Provider store={store}>
      <UpdateSubcategory state={categoryState} setState={setCategoryState} />
    </Provider>
  );
};

export const Primary: Story = () => {
  return <UpdateSubcategoryWhithoudProps />;
};
