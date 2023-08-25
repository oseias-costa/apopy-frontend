import { Stock } from "../../../../domain/entities/stock";
import { InitialFilterStock, StockState } from "../../../types/pages/stock.types";

export const verifyFieldsStock: (newStockItem: Stock) => boolean = (newStockItem) => {
    const category = newStockItem.category.length >= 3
    const subcategory = newStockItem.subcategory.length >= 3
    const suplier = newStockItem.suplier.length >= 3
    const quantity = newStockItem.quantity 
    const costPrice = newStockItem.costPrice 

    return Boolean(category && subcategory && suplier && quantity && costPrice)
}   

export const uniqueData = (stock: Stock[]) => {
    let category: string[] = []
    let product: string[] = []
    let suplier: string[] = [] 
    for (let stockItem of stock){
        suplier.includes(stockItem.suplier) ? null : suplier.push(stockItem.suplier)
        product.includes(stockItem.product) ? null : product.push(stockItem.product)
        category.includes(stockItem.category) ? null : category.push(stockItem.category)
    }
    return  { category, product, suplier }
}

export const filterStock = (stock: Stock[], filteredStock: InitialFilterStock): Stock[] =>  {
    let list: Stock[] = []
    for (let i = 0; i < stock.length; i++) {
       const verifyFilter = stock[i].category.includes(filteredStock.category) &&
            stock[i].suplier.includes(filteredStock.suplier) &&
            stock[i].product.includes(filteredStock.product)

        if(verifyFilter){
            list.push(stock[i])
        }
    }
    return list
}

export interface StockRowProps {
    setStockState: React.Dispatch<React.SetStateAction<StockState>>;
    stockList: Stock[];
  }