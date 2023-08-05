import { useState } from "react";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { ProductContainer } from "../../styles/PageStyles/ProductStyles/products.style";
import { ProductRow } from "./components/ProductRow";
import { ProductModal } from "./components/ProductModal";
import { useGetProducts } from "../../hooks/useGetProducts";
import { initialStateProducts, ProductState } from "../../types/pages/products.types";

export const Product = () => {
  const { products } = useGetProducts();
  const [ state, setState ] = useState<ProductState>(initialStateProducts);

  return (
    <ProductContainer>
      <S.TitleWithButton>
        <S.TitleSection>Produtos</S.TitleSection>
          <S.ButtonCreateItem
            onClick={() => setState({ ...initialStateProducts, type: "create", openModal: true })}
          >
            Adicionar
        </S.ButtonCreateItem>
      </S.TitleWithButton>
      <ProductRow productsList={products} state={state} setState={setState}  />
      <ProductModal state={state} setState={setState} />
    </ProductContainer>
  );
};
