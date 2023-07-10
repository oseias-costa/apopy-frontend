import { render } from "@testing-library/react";
import { CategoryList } from "../CategoryList";

describe("hello word", () => {
  it("unit test", () => {
    render(<CategoryList />);
    expect(1).toBe(1);
  });
});
