import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { CreateSuplier } from '../components/CreateSuplier'

const meta: Meta<typeof CreateSuplier> = {
    title: 'Design System/Suplier/CreateSuplier',
    component: CreateSuplier
}

export default meta
type Story = StoryObj<typeof CreateSuplier>

const CreateSuplierWithProps = () => {
    const [ suplierState, setSuplierState ] = useState({
        id: '001', 
        name: '', 
        type: 'create', 
        openModal: true 
    })
    return(
        <Provider store={store}>
            <CreateSuplier setState={setSuplierState} state={suplierState} />
        </Provider>
    )
}

export const Primary: Story = {
    render: () => <CreateSuplierWithProps />
}