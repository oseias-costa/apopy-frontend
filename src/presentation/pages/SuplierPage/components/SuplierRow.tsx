import { useState } from "react";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { DootsIcon } from "../../CategoryPage/components/DootsIcon";

export const SuplierRow = ({ data, setSuplierState }) => {
  const [menuSuplier, setMenuSuplier] = useState({
    openMenu: false,
    item: ""
  });

  // console.log('eeeee', window.innerHeight)
  const [positionSuplier, setPositionSuplier] = useState(null);

  const supliersList = data?.map((item) => {
    return (
      <S.CategoryRowContainer key={item._id}>
        <S.CategoryRowText>{item.name}</S.CategoryRowText>
        <S.DropMenu
          height={window.innerHeight}
          display={menuSuplier.item === item?._id}
          onClick={() => setMenuSuplier({ openMenu: false, item: ""})}
        >
          <S.DropMenuContent
            left={positionSuplier?.pageX}
            top={positionSuplier?.pageY}
          >
            <S.DropMenuButtons>
              <S.ButtonUpdate
                onClick={() => {
                  setSuplierState({
                    id: item._id,
                    name: item.name,
                    type: "update",
                    openModal: true,
                  });
                }}
              >
                Editar
              </S.ButtonUpdate>
              <S.ButtonUpdate
                onClick={() => {
                  setSuplierState({
                    id: item._id,
                    name: item.name,
                    type: "delete",
                    openModal: true,
                  });
                }}
              >
                Excluir
              </S.ButtonUpdate>
            </S.DropMenuButtons>
          </S.DropMenuContent>
        </S.DropMenu>
        <DootsIcon
          onClick={(e) => {
            setMenuSuplier({ openMenu: !menuSuplier, item: item?._id });
            setPositionSuplier(e);
          }}
        />
      </S.CategoryRowContainer>
    );
  });

  return supliersList;
};
