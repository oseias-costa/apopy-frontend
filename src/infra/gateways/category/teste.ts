
export const GET_CATEGORIES = `
    query Categories($userId: ID!) {
        categories(userId: $userId) {
        _id
        name
        subcategory
        userId
        }
    }
`