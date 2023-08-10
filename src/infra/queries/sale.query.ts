
export const GET_SALES = `
    query Sales {
        sales {
            _id
            userId
            stockId
            category
            product
            subcategory
            suplier
            quantity
            price
            total
            costPrice
            description
            profit
            percentage
            createAt
        }
    }
`

export const TRANSFER_SALE = `
    mutation Mutation($saleInputCreate: SaleInputCreate) {
        transferSale(saleInputCreate: $saleInputCreate) {
            _id
            category
            userId
            stockId
            subcategory
            product
            suplier
            quantity
            price
            total
            costPrice
            description
            profit
            percentage
            createAt
        }
    }
`

export const REVERSE_SALE = `
    mutation ReverseSale($saleInput: SaleInput) {
        reverseSale(saleInput: $saleInput) {
            _id
            userId
            stockId
            category
            subcategory
            product
            suplier
            quantity
            price
            total
            costPrice
            description
            profit
            percentage
            createAt
        }
    }
`