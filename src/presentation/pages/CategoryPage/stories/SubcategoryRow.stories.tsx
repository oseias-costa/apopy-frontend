import { Meta, StoryObj } from "@storybook/react";
import { SubcategoryRow } from "../components/SubcategoryRow";

const meta: Meta<typeof SubcategoryRow> = {
    title: 'Design System/Category/SubcategoryRow',
    component: SubcategoryRow
}

export default meta
type Story = StoryObj<typeof SubcategoryRow>

const SubcategoryRowWithProps = () => {
    const category = {
        _id: '001', 
        name: 'Estofado', 
        subcategory: ['Retrátil', 'De Canto']
    }

    function handleFn(){
        return{
            item: { _id: '001', name: 'Estofado' },
            data: {
              type: 'create',
              newSubcategory: '',
              oldSubcategory: '',
            }}
        
    }

    return <SubcategoryRow item={category} handleSetCategory={handleFn} />
}


export const Primary: Story = {
    render: () => <SubcategoryRowWithProps />
}