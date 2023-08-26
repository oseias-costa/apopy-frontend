
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CategoryRow } from "../components/CategoryRow";
import { initialCategoryValue } from "../../../types/pages/category.types";

const meta: Meta<typeof CategoryRow> = {
    title: 'Design System/Category/CategoryRow',
    component: CategoryRow
}

export default meta
type Story = StoryObj<typeof CategoryRow>


const CategoryWithProps = () => {
    const [ categoryState, setCategoryState ] = useState(initialCategoryValue)

    const state = [
        {
            _id: '001', 
            name: 'Estofado', 
            subcategory: ['Retrátil', 'De Canto']
        }, 
        {
            _id: '002', 
            name: 'Poltrona', 
            subcategory: ['Giratória', 'Fixa']
    }]

    return(
        <CategoryRow state={state}  setCategoryState={setCategoryState} />
    )
}

export const Primary: Story = {
    render: () => <CategoryWithProps />
}
