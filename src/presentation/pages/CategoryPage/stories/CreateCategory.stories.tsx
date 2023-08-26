import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { initialCategoryValue } from '../../../types/pages/category.types'
import { CreateCategory } from '../components/CreateCategory'

const meta: Meta<typeof CreateCategory> = {
    title: 'Design System/Category/CreateCategory',
    component: CreateCategory
}

export default meta
type Story = StoryObj<typeof CreateCategory>


const CreateCategoryWithProps = () => {
    const [ categoryState, setCategoryState ] = useState({ ...initialCategoryValue, openModal: true})

    return (
        <Provider store={store}>
            <CreateCategory setState={setCategoryState} state={categoryState}  />
        </Provider>)
}

const CreateCategoryWithCompletedField= () => {
    const [ categoryState, setCategoryState ] = useState({ ...initialCategoryValue, openModal: true, name: 'Nova Categoria'})

    return (
        <Provider store={store}>
            <CreateCategory setState={setCategoryState} state={categoryState}  />
        </Provider>)
}

export const Primary: Story = {
    render: () => <CreateCategoryWithProps />
}

export const Secundary: Story = {
    render: () => <CreateCategoryWithCompletedField />
}