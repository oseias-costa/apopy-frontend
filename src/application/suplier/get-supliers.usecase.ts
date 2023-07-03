import { getSupliersGateway } from "../../infra/gateways/suplier.gateway";

export default function getSupliersUseCase(){
  const [data, loading, error ] = getSupliersGateway()
  return [ data, loading, error]
}
