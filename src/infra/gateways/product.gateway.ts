import { ProductCreate } from "../../domain/entities/product";
import { httpClient } from "../http/httpClient";
import { CREATE_PRODUCT, GET_PRODUCTS } from "../queries/product.query";

export const getProductGateway = async () => {
  return await httpClient(GET_PRODUCTS, {});
};

export const createProductGateway = async ({
  name,
  category,
  subcategory,
  suplier,
}: ProductCreate) => {
  const variables = {
    productInput: {
      name,
      category,
      subcategory,
      suplier,
    },
  };

  return await httpClient(CREATE_PRODUCT, variables);
};

export const updateProductGateway = async ({
  name,
  category,
  subcategory,
  suplier,
}: ProductCreate) => {
  const variables = {
    productInput: {
      name,
      category,
      subcategory,
      suplier,
    },
  };

  return await httpClient(CREATE_PRODUCT, variables);
};
