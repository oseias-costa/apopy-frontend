import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { DeleteSuplier } from '../components/DeleteSuplier'

const meta: Meta<typeof DeleteSuplier> = {
    title: 'Design System/Suplier/DeleteSuplier',
    component: DeleteSuplier
}

export default meta
type Story = StoryObj<typeof DeleteSuplier>

const DeleteSuplierWithProps = () => {
    const [ suplierState, setSuplierState ] = useState({
        id: '001', 
        name: 'Taska', 
        type: 'create', 
        openModal: true 
    })
    return(
        <Provider store={store}>
            <DeleteSuplier setState={setSuplierState} state={suplierState} />
        </Provider>
    )
}

export const Primary: Story = {
    render: () => <DeleteSuplierWithProps />
}