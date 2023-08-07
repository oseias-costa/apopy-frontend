import { Modal } from "../../../components/global/Modal";
import { initialStateProducts, ProductStateProps } from "../../../types/pages/products.types";
import { SuplierSelect } from "./SuplierSelect";
import { CategorySelect } from "./CategorySelect";
import { SubcategorySelect } from "./SubcategorySelect";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/slice/productSlice";
import { deleteProductUseCase } from "../../../../application/product.usecase";

export const DeleteProduct: React.FC<ProductStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch()

  async function handleDeleteProduct() {
    const deleteItem = await deleteProductUseCase(state._id);

    if (deleteItem.status === 200) {
      
      dispatch(deleteProduct(deleteItem.data?.data.deleteProduct));
      setState(initialStateProducts);
    }
  }

  return (
    <>
      <Modal state={state} setState={setState}>
          <div>
            <h1>Excluir Produto</h1>
            <input
              value={state?.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              disabled={true}
            />
            <CategorySelect product={state} setProduct={setState} />
            <SubcategorySelect product={state} setProduct={setState} />
            <SuplierSelect product={state} setProduct={setState} />
            <button onClick={() => handleDeleteProduct()}>Excluir Produto</button>
          </div>
      </Modal>
    </>
  );
};
