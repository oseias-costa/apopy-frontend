export const USER = `
    query User{
        user {
            _id
            email
            name
            phone
            createAt
        }
    }
`;
export const REGISTER = `
    mutation Register($registerInput: RegisterInput) {
        registerUser(registerInput: $registerInput) {
            _id
            email
            name
            phone
            token
        }
    }
`;
