import { useRef, useState } from "react";
import { Product } from "../../../../domain/entities/product";
import { Suplier } from "../../../../domain/entities/suplier";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import * as S from "../../../styles/GlobalStyles/select.style";

interface SuplierSelectProps {
  product: Product;
  setProduct: (product: Product) => void;
  disabled?: boolean;
}

export const SuplierSelect: React.FC<SuplierSelectProps> = ({
  product,
  setProduct,
  disabled,
}) => {
  const { supliers } = useGetSuplier();
  const selectWidth = useRef<any>(null);
  const [selectState, setSelectState] = useState({
    suplier: "",
    isClicked: false,
  });

  return (
    <div>
      <S.PlaceholderSelect>Fornecedor</S.PlaceholderSelect>
      <S.ContainerSelect>
        <S.Select
          isActive={selectState.isClicked}
          ref={selectWidth}
          onClick={() =>
            !disabled &&
            setSelectState({
              suplier: selectState.suplier,
              isClicked: !selectState.isClicked,
            })
          }
        >
          {product?.suplier === "" ? (
            <S.SelectText>Selecione a Fornecedor</S.SelectText>
          ) : (
            <p>{product?.suplier}</p>
          )}
        </S.Select>
        <S.OptionsSelect
          isActive={selectState.isClicked}
          width={selectWidth.current?.clientWidth}
        >
          {supliers?.map((item: Suplier) => (
            <S.ItemSelect
              key={item._id}
              onClick={() => {
                setProduct({ ...product, suplier: item.name });
                setSelectState({
                  suplier: item.name,
                  isClicked: false,
                });
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
