import { createSubcategoryGateway, deleteSubcategoryGateway, updateSubcategoryGateway } from "../../infra/gateways/subcategory.gateway";

export async function updateSubcategoryUseCase(newSubcategory: string, category: string, subcatogory: string) {
  return await updateSubcategoryGateway(newSubcategory, category, subcatogory);
}

export async function createSubcategoryUseCase() {
  return await createSubcategoryGateway();
}

export async function deleteSubcategoryUseCase(categoryId: string, subcategory: string) {
  return await deleteSubcategoryGateway(categoryId, subcategory);
}
