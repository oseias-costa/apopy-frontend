import { CategorySelect } from "../components/CategorySelect";
import { Meta, StoryObj } from '@storybook/react'
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

const meta: Meta<typeof CategorySelect> = {
    title: 'CategorySelect',
    component: CategorySelect
} 

export default meta;
type Story = StoryObj<typeof CategorySelect>

const CategorySelectWithoutProps = () => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        subcategory: "",
        suplier: "",
        _id: "",
      })

      return (
        <Provider store={store}>
            <CategorySelect product={product} setProduct={setProduct} />
        </Provider>
)}

export const Primary: Story = {
    render: () => <CategorySelectWithoutProps /> 
}