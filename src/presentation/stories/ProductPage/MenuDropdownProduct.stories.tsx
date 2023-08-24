import { MenuDropdownProduct } from "../../pages/ProductsPage/components/MenuDropdownProduct"; 
import { Meta, StoryObj } from '@storybook/react'
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { useState } from "react";
import { initialStateProducts, ProductState } from "../../types/pages/products.types";

const meta: Meta<typeof MenuDropdownProduct> = {
    component: MenuDropdownProduct,
}

export default meta;
type Story = StoryObj<typeof MenuDropdownProduct>

const MenuDropdownProductWithProps = () => {
    const [ state, setState ] = useState<ProductState>(initialStateProducts)
    const item = {
        _id: '1234',
        name: 'Palermo',
        category: 'Estofado',
        subcategory: 'Retrátil e Reclinável',
        suplier: 'Comiotto',
      }

    return(
        <Provider store={store}>
            <MenuDropdownProduct item={item} setState={setState} />
        </Provider>
    )
}

export const Primary: Story = {
    render: () => <MenuDropdownProductWithProps />
}