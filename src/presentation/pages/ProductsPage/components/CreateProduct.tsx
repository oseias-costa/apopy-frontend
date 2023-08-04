import { useState } from "react";
import { Modal } from "../../../components/global/Modal";
import { ProductCreate } from "../../../types/pages/products.types";
import { useGetCategories } from "../../../hooks/useGetCategories";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import { SuplierSelect } from "./SuplierSelect";
import { CategorySelect } from "./CategorySelect";
import { SubcategorySelect } from "./SubcategorySelect";
import { createProductUseCase } from "../../../../application/product.usecase";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/slice/productSlice";

export const CreateProduct = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductCreate>({
    name: "",
    category: "",
    subcategory: "",
    suplier: "",
    _id: "",
  });

  const { supliers } = useGetSuplier();
  const { categories } = useGetCategories();
  const verify = supliers.length === 0 && categories.length === 0;

  async function handleCreateProduct() {
    const create = await createProductUseCase({ ...product });

    if (create.status === 200) {
      dispatch(createProduct(data.data.createProduct));
      return setProduct({
        name: "",
        category: "",
        subcategory: "",
        suplier: "",
        _id: "",
      });
    }
  }

  return (
    <>
      <Modal state={state} setState={setState}>
        {verify ? (
          <div>Você precisa criar categorias e adicionar supliers</div>
        ) : (
          <div>
            <h1>Criar Produto</h1>
            <input
              value={product?.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <CategorySelect product={product} setProduct={setProduct} />
            <SubcategorySelect product={product} setProduct={setProduct} />
            <SuplierSelect product={product} setProduct={setProduct} />
            <button onClick={() => handleCreateProduct()}>Criar Produto</button>
          </div>
        )}
      </Modal>
    </>
  );
};
