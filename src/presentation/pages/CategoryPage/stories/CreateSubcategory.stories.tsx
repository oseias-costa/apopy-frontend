import { Meta, StoryObj } from "@storybook/react";
import { CreateSubcategory } from "../components/CreateSubcategory";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { useState } from "react";
import { initialCategoryValue } from "../../../types/pages/category.types";

const meta: Meta<typeof CreateSubcategory> = {
  title: "Design System/Category/CreateSubcategory",
  component: CreateSubcategory,
};

export default meta;
type Story = StoryObj<typeof CreateSubcategory>;

const CreateSubcategoryWhithoudProps = () => {
  const [categoryState, setCategoryState] = useState({
    ...initialCategoryValue,
    _id: "002",
    openModal: true,
    name: "Nova Categoria",
  });
  return (
    <Provider store={store}>
      <CreateSubcategory state={categoryState} setState={setCategoryState} />
    </Provider>
  );
};

export const Primary: Story = () => {
  return <CreateSubcategoryWhithoudProps />;
};
