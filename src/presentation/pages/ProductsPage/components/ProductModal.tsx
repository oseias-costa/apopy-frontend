import { CreateProduct } from "./CreateProduct";

type typeModal = {
    [key: string]: React.ReactNode;
  };

export const ProductModal = ({state, setState}) => {
    
    const typeModal: typeModal = {
        create: <CreateProduct  state={state} setState={setState} />
    }
    
    return typeModal[state.type]
}
