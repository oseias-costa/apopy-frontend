import { Suplier } from "../../domain/entities/suplier";
import { SuplierGateway } from "../../domain/gateways/suplier.gateway";

export class ListSupliersUseCase {
  constructor(private suplierGateway: SuplierGateway) {}

  async execute(): Promise<Suplier[]> {
    return await this.suplierGateway.findAll();
  }
}
