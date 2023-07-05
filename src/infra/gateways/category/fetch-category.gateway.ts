import { httpAxiosRequest } from "../../http/httpAxiosRequest";
import { GET_CATEGORIES } from "./teste";

export async function fetchCategoryGateway(){
    const variables = { userId: '6451a787de4c08d54ed8da35' }

    return await httpAxiosRequest(GET_CATEGORIES, variables)
}