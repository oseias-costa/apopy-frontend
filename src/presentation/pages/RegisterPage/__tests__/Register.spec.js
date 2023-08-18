import { jsx as _jsx } from "react/jsx-runtime";
import configureStore from "redux-mock-store";
import { Register } from "../Register";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
const mockStore = configureStore();
const mockerdUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => (Object.assign(Object.assign({}, jest.requireActual('react-router-dom')), { useNavigate: () => mockerdUsedNavigate })));
describe("Render Register Page", () => {
    it("should render title", () => {
        const initialState = {
            categories: { _id: "01", name: "Categorias", userId: "001" },
        };
        const store = mockStore(initialState);
        render(_jsx(Provider, { store: store, children: _jsx(Register, {}) }));
        const title = screen.getByText("Criar uma conta");
        expect(title).toBeInTheDocument();
        expect(1).toBe(1);
    });
});
