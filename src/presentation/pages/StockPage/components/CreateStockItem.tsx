import { useState } from "react"
import { Product } from "../../../../domain/entities/product"
import { Stock } from "../../../../domain/entities/stock"
import { Modal } from "../../../components/global/Modal"
import { useGetProducts } from "../../../hooks/useGetProducts"
import { StockStateProps } from "../../../types/pages/stock.types"

export const CreateStockItem: React.FC<StockStateProps> = ({stockState, setStockState}) => {
    const { products } = useGetProducts()
    const [ newStockItem, setNewStockItem ] = useState<Stock>()

    return(
        <Modal state={stockState} setState={setStockState}>
            <select 
                value={newStockItem?.product}
                onChange={(e) => {
                    // setNewStockItem({ ...newStockItem, product: e.target.value})
                    console.log(e.target.value)
                }}
            >
                <option disabled={true}>Selecione</option>

                { products?.map((item: Product) => 
                    <option key={item._id} value={item._id}>{item.name}</option>) 
                }

            </select>
        </Modal>
    )
}