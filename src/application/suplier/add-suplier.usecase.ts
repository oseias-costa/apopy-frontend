import { createSuplierGateway } from "../../infra/gateways/suplier.gateway";

export async function createSuplierUseCase(name: string, userId: string) {
  return await createSuplierGateway({ name, userId });
}
