// entitie
export interface UserProps{
    id?: number;
    name: string;
}

export class User{
    constructor(public props: UserProps){}

    get id(){
        return this.props.id
    }

    get name(){
        return this.props.name
    }

    toJson(){
        return {
            id: this.id,
            name: this.name
        }
    }
}
// gateway entitie
export interface UserGateway{
    findAll(): Promise<User[]>
    addUser(user: UserProps): Promise<User>
}

// Application UserCase

export class FindAllUsersUserCase{
    constructor(private userGate: UserGateway ){}

    async execute(): Promise<User[]> {
        return this.userGate.findAll()
    }
}

// infra 

export class UserHttpGateway implements UserGateway{
    constructor(private http: UserGateway){}

   findAll(): Promise<User[]> {
       return this.http.findAll()
   }

   addUser(user: UserProps): Promise<User> {
       return this.http.addUser(user)
   }
}


const http = [
    { 
        id: 23,
        name: 'Oséias'
    },
    { 
        id: 21,
        name: 'Costa'
    },

]

async function httpFunction(){
    const ht = new Promise(res, rej){
        if(true){
            resolve(http)
        }
    }
    return ht
}

function getUser(){
    const gateway = new UserHttpGateway(httpFunction)
    
}

// export class SuplierListFactory{
//     static async get() {
//         const gateway = new SuplierHttpGateway();
//         const useCase = new ListSupliersUseCase(gateway);
//         const supliers = await useCase.execute();
//         return supliers.map((res) => res.props);
//   };
// }