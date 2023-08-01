import { httpClient } from "../http/httpClient";
import { GET_PRODUCTS } from "../queries/product.query";

export async function getProductGateway(){
    await httpClient(GET_PRODUCTS, {})
}

