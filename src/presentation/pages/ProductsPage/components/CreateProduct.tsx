import { useState } from "react";
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
import { initialCreateProduct, ProductComponentState, ProductCreateState } from "../../../types/pages/stock.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";

export const CreateProduct: React.FC<ProductStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductCreateState>(initialCreateProduct);
  const [ productComponentState, setProductComponentState ] = useState<ProductComponentState>({
    isEmpty: false,
    loading: false
  })

  const { supliers } = useGetSuplier();
  const { categories } = useGetCategories();
  const verify = supliers.length === 0 && categories.length === 0;

  async function handleCreateProduct() {
    const create = await createProductUseCase({ ...product });

    if (create.status === 200) {
      dispatch(createProduct(create.data.data.createProduct));
      return setProduct(initialCreateProduct);
    }
  }

  return (
    <>
      <Modal state={state} setState={setState}>
        <S.ModalContent>
          <S.TitleModal>
            <S.TitleModalH2>Criar Produto</S.TitleModalH2>
            <CloseIcon onClick={() => setState(initialStateProducts)} />
          </S.TitleModal>
        {verify ? (
          <div>Você precisa criar categorias e adicionar supliers</div>
        ) : (
            <>
              <CategorySelect product={product} setProduct={setProduct} />
              <SubcategorySelect product={product} setProduct={setProduct} />
              <SuplierSelect product={product} setProduct={setProduct} />
              <S.InputModal
                value={product?.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
              />
              <S.ButtonModal 
                disabled={false}
                onClick={() => handleCreateProduct()}
              >
                Criar Produto
              </S.ButtonModal>
            </>
            )}
        </S.ModalContent>
      </Modal>
    </>
  );
};
