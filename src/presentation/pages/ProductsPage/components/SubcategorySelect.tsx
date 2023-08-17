import { useRef, useState } from "react";
import { useGetCategories } from "../../../hooks/useGetCategories";
import * as S from "../../../styles/GlobalStyles/select.style";

export const SubcategorySelect: React.FC<any> = ({
  product,
  setProduct,
  disabled,
}) => {
  const { categories } = useGetCategories();
  const selectWidth = useRef<any>(null);
  const [selectState, setSelectState] = useState({
    subcategory: "",
    isClicked: false,
  });

  const subcategory = categories.filter(
    (item) => item?.name === product.category
  )[0]?.subcategory;

  const subcategorySelect = (
    <S.ContainerSelect>
      <S.Select
        isActive={selectState.isClicked}
        ref={selectWidth}
        onClick={() =>
          !disabled &&
          setSelectState({
            subcategory: selectState.subcategory,
            isClicked: !selectState.isClicked,
          })
        }
      >
        {product?.subcategory === "" ? (
          <S.SelectText>Selecione a Subcategoria</S.SelectText>
        ) : (
          <p>{product?.subcategory}</p>
        )}
      </S.Select>
      <S.OptionsSelect
        isActive={selectState.isClicked}
        width={selectWidth.current?.clientWidth}
      >
        {subcategory?.map((sub: string) => (
          <S.ItemSelect
            key={sub}
            onClick={() => {
              setProduct({ ...product, subcategory: sub });
              setSelectState({
                subcategory: sub,
                isClicked: false,
              });
            }}
          >
            {sub}
          </S.ItemSelect>
        ))}
      </S.OptionsSelect>
    </S.ContainerSelect>
  );

  return (
    <div>
      <S.PlaceholderSelect>Subategoria</S.PlaceholderSelect>
      {subcategorySelect}
    </div>
  );
};
