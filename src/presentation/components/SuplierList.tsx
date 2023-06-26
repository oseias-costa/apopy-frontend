import { ListSupliersUseCase } from "../../application/suplier/list-supliers.use-case";
import { SuplierHttpGateway } from "../../infra/gateways/suplier-http.gateway";

export const SuplierList = () => {
  const getSupliers = async () => {
    const gateway = new SuplierHttpGateway();
    const useCase = new ListSupliersUseCase(gateway);
    const supliers = await useCase.execute();
    return supliers.map((res) => res.props);
  };
  getSupliers().then((res) => console.log(res));

  return (
    <div>
      <h1>Supliers</h1>
    </div>
  );
};
