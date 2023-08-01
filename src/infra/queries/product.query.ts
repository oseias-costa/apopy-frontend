
export const GET_PRODUCTS = `
    query Products {
            products {
                _id
                name
                category
                subcategory
                suplier
                userId
        }
    }
`;