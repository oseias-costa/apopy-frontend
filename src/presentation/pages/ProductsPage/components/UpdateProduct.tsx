import { Modal } from "../../../components/global/Modal";
import { initialStateProducts, ProductStateProps } from "../../../types/pages/products.types";
import { useGetCategories } from "../../../hooks/useGetCategories";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import { SuplierSelect } from "./SuplierSelect";
import { CategorySelect } from "./CategorySelect";
import { SubcategorySelect } from "./SubcategorySelect";
import { createProductUseCase } from "../../../../application/product.usecase";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/slice/productSlice";

export const UpdateProduct: React.FC<ProductStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const { supliers } = useGetSuplier();
  const { categories } = useGetCategories();
  const verify = supliers.length === 0 && categories.length === 0;

  async function handleCreateProduct() {
    const update = await createProductUseCase({ ...state });

    if (update.status === 200) {
      dispatch(createProduct(data.data.createProduct));
      return setState(initialStateProducts);
    }
  }

  return (
    <>
      <Modal state={state} setState={setState}>
        {verify ? (
          <div>Você precisa criar categorias e adicionar supliers</div>
        ) : (
          <div>
            <h1>Editar Produto</h1>
            <input
              value={state?.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            <CategorySelect product={state} setProduct={setState} />
            <SubcategorySelect product={state} setProduct={setState} />
            <SuplierSelect product={state} setProduct={setState} />
            <button onClick={() => handleCreateProduct()}>Criar Produto</button>
          </div>
        )}
      </Modal>
    </>
  );
};
