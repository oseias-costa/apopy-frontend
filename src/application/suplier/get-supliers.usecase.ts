import { SuplierProps } from "../../domain/entities/suplier";
import { getSupliersGateway } from "../../infra/gateways/suplier.gateway";

type Suplier = {
  supliers: SuplierProps[];
};

export default async function getSupliersUseCase() {
  const data = await getSupliersGateway();
  return data;
}
