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
`;

export const CREATE_STOCK_ITEM = `
    mutation Mutation($stockItem: StockItem) {
        createStockItem(stockItem: $stockItem) {
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
`;
