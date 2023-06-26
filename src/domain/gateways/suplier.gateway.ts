import { Suplier } from "../entities/suplier";

export interface SuplierGateway {
  findAll(): Promise<Suplier[]>;
  // findById(id: string): Promise<Suplier>
}
