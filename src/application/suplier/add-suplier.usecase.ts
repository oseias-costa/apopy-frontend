import { createSuplierGateway } from "../../infra/gateways/suplier.gateway";

export async function createSuplierUseCase(name: string) {
  return await createSuplierGateway({ name });
}
