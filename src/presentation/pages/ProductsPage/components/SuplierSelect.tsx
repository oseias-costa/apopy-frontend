import { useRef, useState } from "react";
import { Product } from "../../../../domain/entities/product";
import { Suplier } from "../../../../domain/entities/suplier";
import { useGetSuplier } from "../../../hooks/useGetSupliers";
import * as S from "../../../styles/GlobalStyles/select.style";

interface SuplierSelectProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export const SuplierSelect: React.FC<SuplierSelectProps> = ({
  product,
  setProduct,
}) => {
  const { supliers } = useGetSuplier();
  const selectWidth = useRef<any>(null);
  const [selectState, setSelectState] = useState({
    suplier: "",
    isClicked: false,
  });

  return (
    <S.ContainerSelect>
      <S.Select
        isActive={selectState.isClicked}
        ref={selectWidth}
        onClick={() =>
          setSelectState({
            suplier: selectState.suplier,
            isClicked: !selectState.isClicked,
          })
        }
      >
        {selectState?.suplier === "" ? (
          <S.SelectText>Selecione a Fornecedor</S.SelectText>
        ) : (
          <p>{selectState?.suplier}</p>
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
  );
};
