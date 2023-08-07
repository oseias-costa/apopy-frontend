import { ProductStateProps } from "../../../types/pages/products.types";
import { CreateProduct } from "./CreateProduct";
import { DeleteProduct } from "./DeleteProduct";
import { UpdateProduct } from "./UpdateProduct";

type typeModal = {
    [key: string]: React.ReactNode;
  };

export const ProductModal: React.FC<ProductStateProps> = ({state, setState}) => {
    
    const typeModal: typeModal = {
        create: <CreateProduct state={state} setState={setState} />,
        update: <UpdateProduct state={state} setState={setState} />,
        delete: <DeleteProduct state={state} setState={setState} />
    }
    
    return typeModal[state.type]
}
