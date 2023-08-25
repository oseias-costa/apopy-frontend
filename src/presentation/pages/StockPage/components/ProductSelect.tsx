import { useRef, useState } from "react";
import { Product } from "../../../../domain/entities/product";
import { useGetProducts } from "../../../hooks/useGetProducts";
import * as S from "../../../styles/GlobalStyles/select.style";
import { ProductSelectProps } from "../../../types/pages/stock.types";

export const ProductSelect: React.FC<ProductSelectProps> = ({
  newStockItem,
  setNewStockItem,
  disabled,
}) => {
  const { products } = useGetProducts();
  const selectWidth = useRef<any>(null);
  const [selectState, setSelectState] = useState({
    product: "",
    isClicked: false,
  });

  const filterItem = (id: string): Product =>
    products.filter((item) => item._id === id)[0];

  return (
    <div>
      <S.PlaceholderSelect>Produto</S.PlaceholderSelect>
      <S.ContainerSelect>
        <S.Select
          ref={selectWidth}
          isActive={selectState.isClicked}
          onClick={() =>
            !disabled &&
            setSelectState({
              product: "",
              isClicked: !selectState.isClicked,
            })
          }
        >
          {newStockItem?.product ? (
            <p>{newStockItem?.product}</p>
          ) : (
            <S.SelectText>Selecione o Produto</S.SelectText>
          )}
        </S.Select>
        <S.OptionsSelect
          isActive={selectState.isClicked}
          width={selectWidth.current?.clientWidth}
        >
          {products?.map((item: Product) => (
            <S.ItemSelect
              key={item._id}
              onClick={() => {
                const product = filterItem(item._id);
                setNewStockItem({
                  ...newStockItem,
                  _id: product._id,
                  category: product.category,
                  subcategory: product.subcategory,
                  suplier: product.suplier,
                  product: product.name,
                });
                setSelectState({ product: "", isClicked: false });
              }}
            >
              {item.name}
            </S.ItemSelect>
          ))}
        </S.OptionsSelect>
      </S.ContainerSelect>
    </div>
  );
};
