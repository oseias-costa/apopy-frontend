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

export const CREATE_PRODUCT = `
    mutation Mutation($productInput: ProductInput) {
        createProduct(productInput: $productInput) {
            _id
            category
            name
            subcategory
            suplier  
        }
}
`;
