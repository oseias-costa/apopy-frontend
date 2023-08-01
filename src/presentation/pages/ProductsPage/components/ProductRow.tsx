import { ProductInterface } from "../../../types/pages/products.types";
import * as S from "../../../styles/PageStyles/ProductStyles/products.style";
import { DootsIcon } from "../../CategoryPage/components/DootsIcon";

export const ProductRow = ({ state }: { state: ProductInterface[] }) => {
  const products = state?.map((item: ProductInterface) => {
    return (
      <S.ProductRowContainer>
        <S.ProductRowText>{item.category}</S.ProductRowText>
        <S.ProductRowText>{item.subcategory}</S.ProductRowText>
        <S.ProductRowText>{item.suplier}</S.ProductRowText>
        <S.ProductRowText>{item.name}</S.ProductRowText>
        <DootsIcon />
      </S.ProductRowContainer>
    );
  });

  return (
    <>
      <S.ProductRowContainerHeader>
        <S.ProductRowTextHeader>Categoria</S.ProductRowTextHeader>
        <S.ProductRowTextHeader>Subcategoria</S.ProductRowTextHeader>
        <S.ProductRowTextHeader>Fornecedor</S.ProductRowTextHeader>
        <S.ProductRowTextHeader>Produto</S.ProductRowTextHeader>
        <S.Adjuste />
      </S.ProductRowContainerHeader>
      {products}
    </>
  );
};
