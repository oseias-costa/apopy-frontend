import { ChangeEventHandler, useEffect, useState } from "react";
import { Modal } from "../../Layout/components/Modal";
import {
  initialStateProducts,
  ProductStateProps,
} from "../../../types/pages/products.types";
import { useGetCategories } from "../../../hooks/useGetCategories";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import { SuplierSelect } from "./SuplierSelect";
import { CategorySelect } from "./CategorySelect";
import { SubcategorySelect } from "./SubcategorySelect";
import { createProductUseCase } from "../../../../application/product.usecase";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/slice/productSlice";
import {
  initialCreateProduct,
  ProductComponentState,
  ProductCreateState,
} from "../../../types/pages/stock.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import { verifyIfHaveEmptyFields } from "./utils-product";
import { InputModalWithLabel } from "../../Layout/components/InputModalWithLabel";

export const CreateProduct: React.FC<ProductStateProps> = ({
  state,
  setState,
}) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductCreateState>(initialCreateProduct);
  const [productComponentState, setProductComponentState] = useState<ProductComponentState>({
      isEmpty: true,
      loading: false,
    });

  const { supliers } = useGetSuplier();
  const { categories } = useGetCategories();
  const verify = supliers.length === 0 && categories.length === 0;

  useEffect(() => {
    if (verifyIfHaveEmptyFields(product)) {
      setProductComponentState({ isEmpty: false, loading: false });
    } else {
      setProductComponentState({ isEmpty: true, loading: false });
    }
  }, [product]);

  async function handleCreateProduct() {
    setProductComponentState({ isEmpty: true, loading: true });
    const create = await createProductUseCase({ ...product });

    if (create.status === 200) {
      dispatch(createProduct(create.data.data.createProduct));
      setProductComponentState({ isEmpty: true, loading: false });
      setState(initialStateProducts);
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
            <div>
              <S.ModalContentText>
                Você precisa criar categorias e adicionar fornecedores para criar
                produtos.
              </S.ModalContentText>
            </div>
          ) : (
            <>
              <S.ModalContentText>
                Complete os campos abaixos e clique em criar produto.
              </S.ModalContentText>
              <S.ProductContainerFlex>
                <CategorySelect product={product} setProduct={setProduct} />
                <SubcategorySelect product={product} setProduct={setProduct} />
              </S.ProductContainerFlex>
              <S.ProductContainerFlex>
                <SuplierSelect product={product} setProduct={setProduct} />
                <InputModalWithLabel
                  label="Produto"
                  value={product?.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  placeholder="Digite o nome do produto"
                />
              </S.ProductContainerFlex>
              <S.ButtonModal
                disabled={productComponentState.isEmpty}
                onClick={() => handleCreateProduct()}
              >
                {productComponentState.loading ? (
                  <SpinnerIcon />
                ) : (
                  "Criar Produto"
                )}
              </S.ButtonModal>
            </>
          )}
        </S.ModalContent>
      </Modal>
    </>
  );
};
