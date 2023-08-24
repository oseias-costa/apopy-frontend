import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Provider } from "react-redux";
import { CreateProduct } from "../../pages/ProductsPage/components/CreateProduct";
import { store } from "../../redux/store";
import { initialStateProducts } from "../../types/pages/products.types"; 

const meta: Meta<typeof CreateProduct> = {
    component: CreateProduct
}

export default meta
type Story = StoryObj<typeof CreateProduct> 

const CreateProductWhithoudProps = () => {
    const [ state, setState ] = useState({ ...initialStateProducts, openModal: true})

    return(
        <Provider store={store}>
            <CreateProduct state={state} setState={setState}  />
        </Provider>
    )
}

export const Primary: Story = {
    render: () => <CreateProductWhithoudProps />
}