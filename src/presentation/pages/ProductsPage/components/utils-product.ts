import { ProductCreateState } from "../../../types/pages/stock.types"

export const verifyIfHaveEmptyFields = (product: ProductCreateState): boolean => {
    const category = product.category.length >= 3
    const subcategory = product.subcategory.length >= 3
    const suplier = product.suplier.length >= 3
    const productName = product.name.length >= 3

    return Boolean(category && subcategory && suplier && productName)
} 