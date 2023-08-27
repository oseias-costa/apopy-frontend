import { useState } from "react";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { ProductContainer } from "../../styles/PageStyles/ProductStyles/products.style";
import { ProductRow } from "./components/ProductRow";
import { ProductModal } from "./components/ProductModal";
import { useGetProducts } from "../../hooks/useGetProducts";
import { initialStateProducts, ProductState } from "../../types/pages/products.types";
import { LoadingComponent } from "../Layout/components/Loading/LoadingComponent";

export const Product = () => {
  const { products, loading } = useGetProducts();
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
      { loading ? (
         <LoadingComponent />
      ):(
      <ProductRow productsList={products} setState={setState}  />
      )}
      <ProductModal state={state} setState={setState} />
    </ProductContainer>
  );
};
