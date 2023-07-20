import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { CategoryList } from "../CategoryList";

const mockStore = configureStore([]);

describe("CategoryList Component", () => {
  it("hello word", () => {
    const initialState = {
      categories: { _id: "01", name: "Categorias", userId: "001" },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CategoryList />
      </Provider>
    );

    const nova = screen.getByText("Categorias");
    expect(nova).toBeInTheDocument();
  });
});
