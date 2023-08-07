import { DootsIcon } from "../../CategoryPage/components/DootsIcon";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { MenuState, PositionItem } from "../../../types/pages/products.types";
import React, { useState } from "react";
import { MenuDropdownStockProps } from "../../../types/pages/stock.types";

export const MenuDropdownStock: React.FC<MenuDropdownStockProps> = ({item, setState}) => {

  const [positionItem, setPositionItem] = useState<PositionItem>();
  const [ menuState, setMenuState] = useState<MenuState>({
      openMenu: false,
      item: "",
    });

    return(
        <>
        <S.DropMenu
          height={document.body.scrollHeight}
          display={menuState.item === item?._id}
          onClick={() => setMenuState({openMenu: false, item: "" })}
        >
          <S.DropMenuContent
            left={positionItem?.pageX}
            top={positionItem?.pageY}
          >
            <S.DropMenuButtons>
              <S.ButtonUpdate
                onClick={() => setState({...item, type: "moviment", openModal: true })}
              >
                Movimentar
              </S.ButtonUpdate>
              <S.ButtonUpdate
                onClick={() => setState({...item, type: "update", openModal: true })}
              >
                Editar
              </S.ButtonUpdate>
              <S.ButtonUpdate
                onClick={() => setState({...item, type: "delete", openModal: true })}
              >
                Excluir
              </S.ButtonUpdate>
            </S.DropMenuButtons>
          </S.DropMenuContent>
        </S.DropMenu>
        <DootsIcon
          onClick={(e: React.MouseEvent<HTMLHeadingElement>) => {
            setMenuState({openMenu: !menuState, item: item?._id });
            setPositionItem(e);
              }}
        />
        </>
    )
 }