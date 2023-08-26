import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { initialCategoryValue } from '../../../types/pages/category.types'
import { DeleteCategory } from '../components/DeleteCategory'

const meta: Meta<typeof DeleteCategory> = {
    title: 'Design System/Category/DeleteCategory',
    component: DeleteCategory
}

export default meta
type Story = StoryObj<typeof DeleteCategory>


const DeleteCategoryWithSameValue = () => {
    const [ categoryState, setCategoryState ] = useState({ ...initialCategoryValue, _id: '002', openModal: true, name: 'Nova Categoria'})

    return (
        <Provider store={store}>
            <DeleteCategory setState={setCategoryState} state={categoryState}  />
        </Provider>)
}

const DeleteCategoryWithCompletedField= () => {
    const [ categoryState, setCategoryState ] = useState({ ...initialCategoryValue,  _id: '002', openModal: true, name: 'Nova Categoria'})

    return (
        <Provider store={store}>
            <DeleteCategory setState={setCategoryState} state={categoryState}  />
        </Provider>)
}

export const Primary: Story = {
    render: () => <DeleteCategoryWithSameValue />
}

export const Secundary: Story = {
    render: () => <DeleteCategoryWithCompletedField />
}