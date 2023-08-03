import { useState } from "react";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { ProductContainer } from "../../styles/PageStyles/ProductStyles/products.style";
import { ProductRow } from "./components/ProductRow";
import { ProductModal } from "./components/ProductModal";
import { useGetProducts } from "../../hooks/useGetProducts";

export const Product = () => {
  const { products } = useGetProducts();
  const [productState, setProductState] = useState({
    type: "",
    openModal: false,
  });

  return (
    <ProductContainer>
      <S.TitleWithButton>
        <S.TitleSection>Produtos</S.TitleSection>
        <S.ButtonCreateItem
          onClick={() => setProductState({ type: "create", openModal: true })}
        >
          Adicionar
        </S.ButtonCreateItem>
      </S.TitleWithButton>
      <ProductRow state={products} />
      <ProductModal state={productState} setState={setProductState} />
    </ProductContainer>
  );
};
