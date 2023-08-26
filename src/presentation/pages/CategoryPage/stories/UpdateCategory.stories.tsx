import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { initialCategoryValue } from '../../../types/pages/category.types'
import { UpdateCategory } from '../components/UpdateCategory'

const meta: Meta<typeof UpdateCategory> = {
    title: 'Design System/Category/UpdateCategory',
    component: UpdateCategory
}

export default meta
type Story = StoryObj<typeof UpdateCategory>


const UpdateCategoryWithSameValue = () => {
    const [ categoryState, setCategoryState ] = useState({ ...initialCategoryValue, _id: '002', openModal: true, name: 'Nova Categoria'})

    return (
        <Provider store={store}>
            <UpdateCategory setState={setCategoryState} state={categoryState}  />
        </Provider>)
}

const UpdateCategoryWithCompletedField= () => {
    const [ categoryState, setCategoryState ] = useState({ ...initialCategoryValue,  _id: '002', openModal: true, name: 'Nova Categoria'})

    return (
        <Provider store={store}>
            <UpdateCategory setState={setCategoryState} state={categoryState}  />
        </Provider>)
}

export const Primary: Story = {
    render: () => <UpdateCategoryWithSameValue />
}

export const Secundary: Story = {
    render: () => <UpdateCategoryWithCompletedField />
}