import { ListSupliersUseCase } from "../../application/suplier/list-supliers.use-case";
import { SuplierHttpGateway } from "../gateways/suplier-http.gateway";

export class SuplierListFactory{
        static async get() {
            const gateway = new SuplierHttpGateway();
            const useCase = new ListSupliersUseCase(gateway);
            const supliers = await useCase.execute();
            return supliers.map((res) => res.props);
      };
}