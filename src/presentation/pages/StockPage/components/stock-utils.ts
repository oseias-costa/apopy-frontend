import { Stock } from "../../../../domain/entities/stock";

export const verifyFieldsStock: (newStockItem: Stock) => boolean = (newStockItem) => {
    const category = newStockItem.category.length >= 3
    const subcategory = newStockItem.subcategory.length >= 3
    const suplier = newStockItem.suplier.length >= 3
    const quantity = newStockItem.quantity 
    const costPrice = newStockItem.costPrice 

    return Boolean(category && subcategory && suplier && quantity && costPrice)
}   
