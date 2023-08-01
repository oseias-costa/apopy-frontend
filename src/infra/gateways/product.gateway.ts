import { httpClient } from "../http/httpClient";
import { GET_PRODUCTS } from "../queries/product.query";

export const getProductGateway = async () => {
  return await httpClient(GET_PRODUCTS, {});
};
