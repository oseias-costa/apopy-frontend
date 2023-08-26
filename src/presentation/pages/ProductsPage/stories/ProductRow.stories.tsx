import { ProductRow } from "../../../pages/ProductsPage/components/ProductRow"; 
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { useState } from 'react'
import { initialStateProducts } from "../../../types/pages/products.types";

const meta: Meta<typeof ProductRow> = {
    component: ProductRow
}

export default meta
type Story = StoryObj<typeof ProductRow>

const ProductRowWithProps = () => {
    const [ state, setState ] = useState(initialStateProducts)
    const product = [{
        _id: '1234',
        name: 'Palermo',
        category: 'Estofado',
        subcategory: 'Retrátil e Reclinável',
        suplier: 'Comiotto',
        userId: '0001'
    }]

    return(
        <Provider store={store}>
            <ProductRow productsList={product} setState={setState} />
        </Provider>
    )
}

 export const Primary: Story = {
    render: () => <ProductRowWithProps />
 }