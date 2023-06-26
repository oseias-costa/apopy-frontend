export type SuplierProps = {
  _id: string;
  name: string;
  userId: string;
};

export class Suplier {
  constructor(public props: SuplierProps) {}

  get _id() {
    return this.props._id;
  }

  get name() {
    return this.props.name;
  }

  get userId() {
    return this.props.userId;
  }

  toJson() {
    return {
      _id: this._id,
      name: this.name,
      userId: this.userId,
    };
  }
}
