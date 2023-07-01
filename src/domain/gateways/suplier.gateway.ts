import { SuplierProps } from "../entities/suplier";

export interface SuplierGateway {
  getAll(): SuplierProps[];
  addNewSuplier(): SuplierProps;
}
