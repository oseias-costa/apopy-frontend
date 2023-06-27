import { Suplier } from "./suplier";

export type SuplierProps = {
  supliers: Suplier[];
};

export class Supliers {
  constructor(public props: SuplierProps) {}

  addSuplier(suplier: Suplier) {
    return this.props.supliers.push(suplier);
  }

  updateSuplier(suplier: Suplier) {
    const item = this.props.supliers.findIndex(
      (id) => id.toString() === suplier._id
    );
    return (this.props.supliers[item].name = suplier.name);
  }

  deleteSuplier(suplierId: string) {
    this.props.supliers = this.props.supliers.filter(
      (sup) => sup.toString() !== suplierId
    );
  }
}
