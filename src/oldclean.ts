
// entitie
export interface UserProps {
  id?: number;
  name: string;
}

export class User {
  constructor(public props: UserProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
// gateway entitie
export interface UserGateway {
  findAll(): Promise<User[]>;
  addUser(user: UserProps): Promise<User>;
}

// Application UserCase

export class FindAllUsersUserCase {
  constructor(private userGate: UserGateway) {}

  async execute(): Promise<User[]> {
    return this.userGate.findAll();
  }
}

// infra

export class UserHttpGateway implements UserGateway {
  constructor(private http: User[]) {}

  async findAll(): Promise<User[]> {
    return this.http.map(
      (item) =>
        new User({
          name: item.name,
          id: item.id,
        })
    );
  }

  addUser(user: UserProps): Promise<User> {
    return this.http.addUser(user);
  }
}

const http = [
  {
    id: 23,
    name: "Oséias",
  },
  {
    id: 21,
    name: "Costa",
  },
];

export async function getUser() {
  const gateway = new UserHttpGateway(http);
  const useCase = new FindAllUsersUserCase(gateway);
  const user = await useCase.execute();
  return user;
}

console.log("test clean archi", getUser());

// export class SuplierListFactory{
//     static async get() {
//         const gateway = new SuplierHttpGateway();
//         const useCase = new ListSupliersUseCase(gateway);
//         const supliers = await useCase.execute();
//         return supliers.map((res) => res.props);
//   };
// }
