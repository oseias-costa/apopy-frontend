import { useState } from "react";
import { Modal } from "../../../components/global/Modal";
import { ProductCreate } from "../../../types/pages/products.types";
import { useGetCategories } from "../../../hooks/useGetCategories";
import { useGetSuplier } from "../../../hooks/useGetSupliers";

export const CreateProduct = ({ state, setState }) => {
  const { supliers } = useGetSuplier();
  const { categories } = useGetCategories();
  const [product, setProduct] = useState<ProductCreate>({
    name: "",
    category: "",
    subcategory: "",
    suplier: "",
    _id: "",
  });

  const verify = supliers.length === 0 && categories.length === 0;

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
          </div>
        )}
      </Modal>
    </>
  );
};
