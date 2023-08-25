import { ProductInterface, ProductState } from "../../../types/pages/products.types";
import { MenuDropdownProduct } from "./MenuDropdownProduct";
import * as S from "../../../styles/GlobalStyles/table.style";
import { SetStateAction } from "react";

interface ProductRowProps {
  productsList: ProductInterface[];
  setState: React.Dispatch<SetStateAction<ProductState>>;
}

export const ProductRow: React.FC<ProductRowProps> = ({ productsList, setState }) => {
  const products = productsList?.map((item: ProductInterface) => {
    return (
      <S.TableRow>
        <S.TableRowItem>{item?.category}</S.TableRowItem>
        <S.TableRowItem>{item?.subcategory}</S.TableRowItem>
        <S.TableRowItem>{item?.suplier}</S.TableRowItem>
        <S.TableRowItem>{item?.name}</S.TableRowItem>
        <S.TableRowItem>
          <MenuDropdownProduct item={item} setState={setState} />
        </S.TableRowItem>
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
