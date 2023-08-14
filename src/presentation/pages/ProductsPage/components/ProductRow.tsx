import { ProductInterface } from "../../../types/pages/products.types";
import { MenuDropdownProduct } from "./MenuDropdownProduct";
import { Product } from "../../../../domain/entities/product";
import * as S from "../../../styles/GlobalStyles/table.style";

interface ProductRowProps {
  productsList: ProductInterface[];
  state: Product;
  setState: (state: Product) => void;
}

export const ProductRow: React.FC<ProductRowProps> = ({
  productsList,
  state,
  setState,
}) => {
  const products = productsList?.map((item: ProductInterface) => {
    return (
      <S.TableRow>
        <S.TableRowItem>{item?.category}</S.TableRowItem>
        <S.TableRowItem>{item?.subcategory}</S.TableRowItem>
        <S.TableRowItem>{item?.suplier}</S.TableRowItem>
        <S.TableRowItem>{item?.name}</S.TableRowItem>
        <MenuDropdownProduct state={state} item={item} setState={setState} />
      </S.TableRow>
    );
  });

  return (
    <S.Table>
      <S.TableRow>
        <S.TableRowTh position="left">Categoria</S.TableRowTh>
        <S.TableRowTh position="left">Subcategoria</S.TableRowTh>
        <S.TableRowTh position="left">Fornecedor</S.TableRowTh>
        <S.TableRowTh position="left">Produto</S.TableRowTh>
        <S.TableRowTh position="left"></S.TableRowTh>
      </S.TableRow>
      {products}
    </S.Table>
  );
};
