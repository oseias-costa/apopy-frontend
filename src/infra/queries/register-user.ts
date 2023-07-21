export const REGISTER_USER = `
  mutation RegisterUser($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      name
      email
      password
      phone
      token
    }
  }
`;
