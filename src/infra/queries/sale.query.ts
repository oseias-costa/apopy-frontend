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
            date
        }
    }
`;

export const TRANSFER_SALE = `
    mutation Mutation($saleInputTransfer: SaleInputTransfer) {
        transferSale(saleInputTransfer: $saleInputTransfer) {
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
            date
        }
    }
`;

export const REVERSE_SALE = `
    mutation ReverseSale($saleInputTransfer: SaleInputTransfer) {
        reverseSale(saleInputTransfer: $saleInputTransfer) {
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
            date
        }
    }
`;
