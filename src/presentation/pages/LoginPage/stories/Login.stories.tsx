import { Meta, StoryObj } from '@storybook/react'
import { Login } from '../Login'

const meta: Meta<typeof Login> = {
    title: 'Design System/Login/Login',
    component:  Login
}

export default meta
type Story = StoryObj<typeof Login> 

export const Primary: Story = {
    render: () => <Login />
}