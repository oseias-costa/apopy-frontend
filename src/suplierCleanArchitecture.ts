import { ListSupliers } from "./infra/gateways/http";
import { SUPLIERS } from "./infra/http/suplier.query";

export interface Suplier {
    _id: string,
    name: string,
    userId: string 
}

export type SuplierProps = {
    supliers: Suplier[]
}

export class Supliers {
  constructor(public props: SuplierProps) {}
    
  getSupliers(){
      return this.props.supliers
  }

  addSuplier(suplier: Suplier) {
    return this.props.supliers.push(suplier);
  }
}

export interface SuplierGateway {
  findAll(): Promise<Suplier[]>;
  // findById(id: string): Promise<Suplier>
}

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

