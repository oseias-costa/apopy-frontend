import { Product } from "../../../../domain/entities/product";
import { ProductCreateState } from "../../../types/pages/stock.types";

export const verifyIfHaveEmptyFields = (
  product: ProductCreateState
): boolean => {
  const category = product.category.length >= 3;
  const subcategory = product.subcategory.length >= 3;
  const suplier = product.suplier.length >= 3;
  const productName = product.name.length >= 3;

  return Boolean(category && subcategory && suplier && productName);
};

export const verifyProductEqualNewProduct = (
  state: ProductCreateState,
  product: Product
) => {
  const category = product.category === state.category;
  const subcategory = product.subcategory === state.subcategory;
  const suplier = product.suplier === state.suplier;
  const productName = product.name === state.name;

  return Boolean(category && subcategory && suplier && productName);
};
