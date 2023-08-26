import { jsx as _jsx } from "react/jsx-runtime";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { Category } from "../../Category";
const mockStore = configureStore([]);
describe("Render CategoryList Component", () => {
    const renderComponent = () => {
        const initialState = {
            categories: { _id: "01", name: "Categorias", userId: "001" },
        };
        const store = mockStore(initialState);
        return render(_jsx(Provider, { store: store, children: _jsx(Category, {}) }));
    };
    it("should render correctly", () => {
        renderComponent();
        const nova = screen.getByText("Categorias");
        expect(nova).toBeInTheDocument();
    });
});
