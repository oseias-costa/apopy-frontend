import updateSuplierGateway from "../../infra/gateways/suplier.gateway";

export default async function updateSuplierUseCase(_id: string, name: string) {
  return await updateSuplierGateway({ _id, name });
}
