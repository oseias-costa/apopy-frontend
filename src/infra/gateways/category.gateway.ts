import { httpAxiosRequest } from "../http/httpAxiosRequest";
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY } from "../queries/category.query";

export async function fetchCategoryGateway(){
    const variables = { userId: '6451a787de4c08d54ed8da35' }

    return await httpAxiosRequest(GET_CATEGORIES, variables)
}

export async function createCategoryGateway(name: string, userId: string){
    const variables = {
            categoryInput: { name: name, userId: userId  }
    }
    return await httpAxiosRequest(CREATE_CATEGORY, variables)
}

export async function updateCategoryGateway(id: string, name: string) {
    const variables = {
        categoryInput: {
            _id: id,
            name: name,
        }
    }
    return await httpAxiosRequest(UPDATE_CATEGORY, variables)
}

export async function deleteCategoryGateway(id: string){
    const variables = { categoryEdit: { _id: id } }

    return await httpAxiosRequest(DELETE_CATEGORY, variables)
}
