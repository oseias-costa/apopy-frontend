import { Suplier } from "../../domain/entities/suplier";
import { SuplierGateway } from "../../domain/gateways/suplier.gateway";
import { SUPLIERS } from "../http/suplier.query";
import { graphqlQuery, ListSupliers } from "./http";

export class SuplierHttpGateway implements SuplierGateway {
  findAll(): Promise<Suplier[]> {
    const { data } = ListSupliers.get(SUPLIERS);
    return data?.supliers.map(
      (data: Suplier) =>
        new Suplier({
          _id: data._id,
          name: data.name,
          userId: data.userId,
        })
    );
  }
}
