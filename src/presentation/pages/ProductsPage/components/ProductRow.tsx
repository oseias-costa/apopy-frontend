import { ProductInterface } from "../../../types/pages/products.types";
import * as S from "../../../styles/PageStyles/ProductStyles/products.style";
import { MenuDropdownProduct } from "./MenuDropdownProduct";
import { Product } from "../../../../domain/entities/product";

interface ProductRowProps {
  productsList: ProductInterface[];
  state: Product;
  setState: (state: Product) => void
}

export const ProductRow: React.FC<ProductRowProps> = ({ 
  productsList, state, setState 
}) => {

  const products = productsList?.map((item: ProductInterface) => {
    return (
      <S.ProductRowContainer>
        <S.ProductRowText>{item.category}</S.ProductRowText>
        <S.ProductRowText>{item.subcategory}</S.ProductRowText>
        <S.ProductRowText>{item.suplier}</S.ProductRowText>
        <S.ProductRowText>{item.name}</S.ProductRowText>
        <MenuDropdownProduct state={state} item={item} setState={setState} />
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
