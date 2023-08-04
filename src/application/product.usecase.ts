import { Product, ProductCreate } from "../domain/entities/product";
import {
  createProductGateway,
  getProductGateway,
  updateProductGateway,
} from "../infra/gateways/product.gateway";

export async function getProductsUseCase() {
  return await getProductGateway();
}

export async function createProductUseCase({
  name,
  category,
  subcategory,
  suplier,
}: ProductCreate) {
  return await createProductGateway({ name, category, subcategory, suplier });
}

export async function updateProductUseCase({
  _id,
  name,
  category,
  subcategory,
  suplier,
}: Product) {
  return await updateProductGateway({
    _id,
    name,
    category,
    subcategory,
    suplier,
  });
}
