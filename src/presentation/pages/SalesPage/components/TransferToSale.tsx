import { useState } from "react"
import { transferSaleUseCase } from "../../../../application/sale.usecase";
import { StockStateProps } from "../../../types/pages/stock.types"

interface NewSale {
    quantity: number;
    price: number;
    profit: number;
    percentage: number;
    createAt: string
}

const initialStateNewSale: NewSale = {
    quantity: 0,
    price: 0,
    profit: 0,
    percentage: 0,
    createAt: ''
}

export const TransferToSale: React.FC<StockStateProps> = ({ stockState, setStockState }) => {
    const [ newSale, setNewSale ] = useState<NewSale>(initialStateNewSale)
    
    async function handleTransferSale(){
        const saleVariables = {
            stockId: stockState._id,
            category: stockState.category,
            product: stockState.product,
            subcategory: stockState.subcategory,
            suplier: stockState.suplier,
            quantity: newSale.quantity,
            price: newSale.price,
            total: newSale.price * newSale.quantity,
            costPrice: 1200,
            description: "Descrição",
            profit: 4000,
            percentage: 8,
            date: null
        }

        const data = await transferSaleUseCase(stockState)

        if(data.status === 200){
            console.log(data)
        }
    }

    return (
            <div>Transfer Modal
                <input type='number' value={newSale.quantity} onChange={(e) => setNewSale({ ...newSale, quantity: Number(e.target.value)})} />
                <input type='number' value={newSale.price} onChange={(e) => setNewSale({ ...newSale, price: Number(e.target.value)})} />
                <input type='number' value={newSale.price} onChange={(e) => setNewSale({ ...newSale, price: Number(e.target.value)})} />
                <input type='number' value={newSale.profit} onChange={(e) => setNewSale({ ...newSale, profit: Number(e.target.value)})} />
                <input type='text' value={newSale.createAt} onChange={(e) => setNewSale({ ...newSale, createAt: e.target.value})} />
                <button>Nova Venda</button>
            </div>
    )
}