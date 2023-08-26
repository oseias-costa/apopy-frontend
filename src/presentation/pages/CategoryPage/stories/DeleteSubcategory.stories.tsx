import { Meta, StoryObj } from "@storybook/react";
import { DeleteSubcategory } from "../components/DeleteSubcategory";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { useState } from "react";
import { initialCategoryValue } from "../../../types/pages/category.types";

const meta: Meta<typeof DeleteSubcategory> = {
  title: "Design System/Category/DeleteSubcategory",
  component: DeleteSubcategory,
};

export default meta;
type Story = StoryObj<typeof DeleteSubcategory>;

const DeleteSubcategoryWhithoudProps = () => {
  const [categoryState, setCategoryState] = useState({
    ...initialCategoryValue,
    _id: "002",
    openModal: true,
    name: "Poltrona",
    oldSubcategory: "Giratória",
  });
  return (
    <Provider store={store}>
      <DeleteSubcategory state={categoryState} setState={setCategoryState} />
    </Provider>
  );
};

export const Primary: Story = () => {
  return <DeleteSubcategoryWhithoudProps />;
};
