import { useEffect } from "react";
import { getProductsUseCase } from "../../../application/product.usecase";
import { fetchProducts } from "../../redux/slice/productSlice";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { ProductContainer } from "../../styles/PageStyles/ProductStyles/products.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductRow } from "./components/ProductRow";

export const Product = () => {
  const products = getProductsUseCase();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state?.product.products);

  useEffect(() => {
    products.then((res) => dispatch(fetchProducts(res.data.data.products)));
  });

  return (
    <ProductContainer>
      <S.TitleWithButton>
        <S.TitleSection>Produtos</S.TitleSection>
        <S.ButtonCreateItem>Adicionar</S.ButtonCreateItem>
      </S.TitleWithButton>
      <ProductRow state={state} />
    </ProductContainer>
  );
};
