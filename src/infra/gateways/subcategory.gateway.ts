import { httpAxiosRequest } from "../http/httpAxiosRequest";
import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../queries/subcategory.query";

export async function updateSubcategoryGateway(
  newSubcategory: string,
  category: string,
  subcategory: string
) {
  const variables = {
    subcategoryEdit: {
      newName: newSubcategory,
      name: subcategory,
      category: category,
    },
  };

  return await httpAxiosRequest(UPDATE_SUBCATEGORY, variables);
}

export async function createSubcategoryGateway() {
  {
  }

  return await httpAxiosRequest();
}

export async function deleteSubcategoryGateway(categoryId: string, subcategory: string) {
  const variables = {
    subcategoryEdit: {
      name: subcategory,
      category: categoryId,
    },
  }

  return await httpAxiosRequest(DELETE_SUBCATEGORY, variables);
}
