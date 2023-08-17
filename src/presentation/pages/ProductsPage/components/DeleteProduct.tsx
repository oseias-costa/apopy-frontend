import { Modal } from "../../../components/global/Modal";
import { initialStateProducts, ProductStateProps } from "../../../types/pages/products.types";
import { SuplierSelect } from "./SuplierSelect";
import { CategorySelect } from "./CategorySelect";
import { SubcategorySelect } from "./SubcategorySelect";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/slice/productSlice";
import { deleteProductUseCase } from "../../../../application/product.usecase";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { useState } from "react";
import { ProductComponentState } from "../../../types/pages/stock.types";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const DeleteProduct: React.FC<ProductStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch()
  const [ productComponentState, setProductComponentState ] = useState<ProductComponentState>({
    isEmpty: true,
    loading: false
  })

  async function handleDeleteProduct() {
    const deleteItem = await deleteProductUseCase(state._id);
    setProductComponentState({ isEmpty: true, loading: true })
    if (deleteItem.status === 200) {
      dispatch(deleteProduct(deleteItem.data?.data.deleteProduct));
      setState(initialStateProducts);
    }
  }

  return (
    <>
      <Modal state={state} setState={setState}>
          <S.ModalContent>
            <S.TitleModal>
              <S.TitleModalH2>Excluir Produto</S.TitleModalH2>
              <CloseIcon onClick={() => setState(initialStateProducts)} />
            </S.TitleModal>
            <S.ModalContentText>Se você deseja excluir esse produto clique abaixo. Essa ação não podera ser desfeita.</S.ModalContentText>
            <CategorySelect disabled={true} product={state} setProduct={setState} />
            <SubcategorySelect disabled={true} product={state} setProduct={setState} />
            <SuplierSelect disabled={true} product={state} setProduct={setState} />
            <S.InputModal
              disabled={true}
              value={state?.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            <S.ButtonModal 
              disabled={false} 
              onClick={() => handleDeleteProduct()}
            >
              { productComponentState.loading ?  <SpinnerIcon /> : 'Excluir Produto' }
            </S.ButtonModal>
          </S.ModalContent>
      </Modal>
    </>
  );
};
