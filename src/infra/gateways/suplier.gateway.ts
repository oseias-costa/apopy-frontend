import { httpAxiosRequest } from "../http/httpAxiosRequest";
import { CREATE_SUPLIER, DELETE_SUPLIER, GET_SUPLIERS, UPDATE_SUPLIER } from "../queries/suplier.query";

export const getSupliersGateway = async () => {
  return await httpAxiosRequest(GET_SUPLIERS, {})
};

export async function createSuplierGateway(
  { name, userId }: { name: string; userId: string }) {

  const variables = {
        suplierInput: {
          name: name,
          userid: userId,
        }
  }
  return await httpAxiosRequest(CREATE_SUPLIER, variables) 
}

export default async function updateSuplierGateway(
  { _id, name }: { _id: string; name: string }) {

  const variables = {
        suplierInput: {
          _id: _id,
          name: name
        }
    }
  return await httpAxiosRequest(UPDATE_SUPLIER, variables)
}

export async function deleteSuplierGateway(id: string) {
  const variables = { id: id }

  return await httpAxiosRequest(DELETE_SUPLIER, variables)
}
