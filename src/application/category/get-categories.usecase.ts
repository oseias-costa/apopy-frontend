import { fetchCategoryGateway } from "../../infra/gateways/category/fetch-category.gateway";

export async function getCategoriesUseCase(){
    return await fetchCategoryGateway()
}