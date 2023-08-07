
export const GET_STOCK = `
    query StockList {
        stock {
            _id
            product
            category
            subcategory
            suplier
            costPrice
            quantity
            total
            description
        }
    }
`