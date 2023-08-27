import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { SuplierRow } from '../components/SuplierRow'

const meta: Meta<typeof SuplierRow> = {
    title: 'Design System/Suplier/SuplierRow',
    component: SuplierRow
}

export default meta
type Story = StoryObj<typeof SuplierRow>

const SuplierRowWithProps = () => {
    const [ suplierState, setSuplierState ] = useState({
        id: '',  name: '',  type: '',  openModal: true  })

    const data = [
        {
            _id: '002', 
            name: 'Taska', 
            type: 'create', 
            openModal: true 
        }
    ]

    return(
        <Provider store={store}>
            <SuplierRow data={data} setSuplierState={setSuplierState} />
        </Provider>
    )
}

export const Primary: Story = {
    render: () => <SuplierRowWithProps />
}