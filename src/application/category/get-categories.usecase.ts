import {
  createCategoryGateway,
  deleteCategoryGateway,
  fetchCategoryGateway,
  updateCategoryGateway,
} from "../../infra/gateways/category.gateway";

export async function getCategoriesUseCase() {
  return await fetchCategoryGateway();
}

export async function createCategoryUseCase(name: string) {
  return await createCategoryGateway(name);
}

export async function updateCategoryUseCase(id: string, name: string) {
  return await updateCategoryGateway(id, name);
}

export async function deleteCategoryUseCase(id: string) {
  return await deleteCategoryGateway(id);
}
