import { Product } from "./product";

export type OrderProps = {
  id?: number;
  products: Product[];
  credit_card_number: string;
};

export class Order {
  constructor(public props: OrderProps) {}

  get id() {
    return this.props.id;
  }

  get products() {
    return this.props.products;
  }

  get credit_card_number() {
    return this.props.credit_card_number;
  }

  get total() {
    return this.props.products.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  toJSON() {
    return {
      id: this.id,
      products: this.products.map((product) => product.toJSON()),
      credit_card_number: this.credit_card_number,
    };
  }
}

export interface OrderGateway {
  insert(order: Order): Promise<Order>;
  findById(id: number): Promise<Order>;
}

export class GetOrderUseCase {
  constructor(private orderGate: OrderGateway) {}

  async execute(id: number): Promise<Order> {
    return this.orderGate.findById(id);
  }
}

export class ProcessOrderUseCase {
  constructor(private orderGate: OrderGateway, private cartGate: CartGateway) {}

  async execute({
    products,
    credit_card_number,
  }: {
    products: Product[];
    credit_card_number: string;
  }) {
    const order = new Order({
      products,
      credit_card_number,
    });
    const newOrder = await this.orderGate.insert(order);
    const cart = this.cartGate.get();
    cart.clear();
    this.cartGate.save(cart);
    return newOrder;
  }
}


export class OrderHttpGateway implements OrderGateway {
  constructor(private readonly http: AxiosInstance) {}

  insert(order: Order): Promise<Order> {
    return this.http.post("/orders", order.toJSON()).then((response) => {
      order.props.id = response.data.id;
      return order;
    });
  }

  findById(id: number): Promise<Order> {
    return this.http.get(`/orders/${id}`).then(
      (response) =>
        new Order({
          id: response.data.id,
          products: response.data.products.map(
            (product: any) =>
              new Product({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
              })
          ),
          credit_card_number: response.data.credit_card_number,
        })
    );
  }
}