import { useRef, useState } from "react";
import { useGetCategories } from "../../../hooks/useGetCategories";
import * as S from "../../../styles/GlobalStyles/select.style";

export const CategorySelect: React.FC<any> = ({
  product,
  setProduct,
  disabled,
}) => {
  const [selectState, setSelectState] = useState({
    category: "",
    isClicked: false,
  });
  const { categories } = useGetCategories();
  const selectWidth = useRef<any>(null);

  return (
    <div>
      <S.PlaceholderSelect>Categoria</S.PlaceholderSelect>
      <S.ContainerSelect>
        <S.Select
          isActive={selectState.isClicked}
          ref={selectWidth}
          onClick={() =>
            !disabled &&
            setSelectState({
              category: product.category,
              isClicked: !selectState.isClicked,
            })
          }
        >
          {product?.category === "" ? (
            <S.SelectText>Selecione a Categoria</S.SelectText>
          ) : (
            <p>{product?.category}</p>
          )}
        </S.Select>
        <S.OptionsSelect
          isActive={selectState.isClicked}
          width={selectWidth.current?.clientWidth}
        >
          {categories.map((item) => (
            <S.ItemSelect
              key={item._id}
              onClick={() => {
                setSelectState({ category: item.name, isClicked: false });
                setProduct({ ...product, category: item.name });
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
