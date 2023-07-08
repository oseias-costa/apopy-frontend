import { httpAxiosRequest } from "../http/httpAxiosRequest";
import { CREATE_SUBCATEGORY } from "../queries/subcategory.query";

export async function createSubcategoryGateway(
  newSubcategory: string,
  category: string,
  subcategory: string
) {
  const variables = {
    subcategoryEdit: {
      newName: subcategory,
      name: newSubcategory,
      category: category,
    },
  };

  return await httpAxiosRequest(CREATE_SUBCATEGORY, variables);
}

export async function updateSubcategoryGateway() {
  {
  }

  return await httpAxiosRequest();
}

export async function deleteSubcategoryGateway() {
  {
  }

  return await httpAxiosRequest();
}
