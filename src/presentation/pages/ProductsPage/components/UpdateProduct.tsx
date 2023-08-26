import { Modal } from "../../../components/global/Modal";
import {
  initialStateProducts,
  ProductStateProps,
} from "../../../types/pages/products.types";
import { useGetCategories } from "../../../hooks/useGetCategories";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import { SuplierSelect } from "./SuplierSelect";
import { CategorySelect } from "./CategorySelect";
import { SubcategorySelect } from "./SubcategorySelect";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../redux/slice/productSlice";
import { updateProductUseCase } from "../../../../application/product.usecase";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import React, { useEffect, useState } from "react";
import { ProductComponentState } from "../../../types/pages/stock.types";
import {
  verifyIfHaveEmptyFields,
  verifyProductEqualNewProduct,
} from "./utils-product";
import { RootState } from "../../../redux/store";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { InputModalWithLabel } from "../../Layout/components/InputModalWithLabel";

export const UpdateProduct: React.FC<ProductStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const { supliers } = useGetSuplier();
  const { categories } = useGetCategories();
  const productItemUpdate = useSelector((stateProduct: RootState) =>
    stateProduct.product.products.filter((item) => item._id === state._id)
  )[0];
  const [productComponentState, setProductComponentState] =
    useState<ProductComponentState>({
      isEmpty: true,
      loading: false,
    });
  const verify = supliers.length === 0 && categories.length === 0;

  useEffect(() => {
    if (
      verifyIfHaveEmptyFields(state) &&
      !verifyProductEqualNewProduct(state, productItemUpdate)
    ) {
      setProductComponentState({ isEmpty: false, loading: false });
    } else {
      setProductComponentState({ isEmpty: true, loading: false });
    }
  }, [state]);

  async function handleCreateProduct() {
    setProductComponentState({ isEmpty: true, loading: true })
    const update = await updateProductUseCase({ ...state });

    if (update.status === 200) {
      dispatch(updateProduct(update.data?.data.updateProduct));
      setState(initialStateProducts);
      setProductComponentState({ isEmpty: true, loading: false })
    }
  }

  return (
    <>
      <Modal state={state} setState={setState}>
        <S.ModalContent>
          <S.TitleModal>
            <S.TitleModalH2>Editar Produto</S.TitleModalH2>
            <CloseIcon onClick={() => setState(initialStateProducts)} />
          </S.TitleModal>
          {verify ? (
            <div>Você precisa criar categorias e adicionar supliers</div>
          ) : (
            <>
              <S.ModalContentText>
                Para Editar o produto, faça as alterações e clique em editar.
              </S.ModalContentText>
              <S.ProductContainerFlex>
                <CategorySelect product={state} setProduct={setState} />
                <SubcategorySelect product={state} setProduct={setState} />
              </S.ProductContainerFlex>
              <S.ProductContainerFlex>
                <SuplierSelect product={state} setProduct={setState} />
                <InputModalWithLabel
                  label="Produto"
                  value={state?.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({ ...state, name: e.target.value })}
                />
              </S.ProductContainerFlex>
              <S.ButtonModal
                disabled={productComponentState.isEmpty}
                onClick={() => handleCreateProduct()}
              >
                {productComponentState.loading ? (
                  <SpinnerIcon />
                ) : (
                  "Editar Produto"
                )}
              </S.ButtonModal>
            </>
          )}
        </S.ModalContent>
      </Modal>
    </>
  );
};
