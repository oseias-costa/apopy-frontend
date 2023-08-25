import { DootsIcon } from "../../CategoryPage/components/DootsIcon";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { MenuState, PositionItem } from "../../../types/pages/products.types";
import React, { Dispatch, useState } from "react";
import { MenuDropDownSaleProps } from "../../../types/pages/sale.types";

export const MenuDropDownSales: React.FC<MenuDropDownSaleProps> = ({item, setState}) => {

  const [positionItem, setPositionItem] = useState<PositionItem>();
  const [ menuState, setMenuState] = useState<MenuState>({ openMenu: false, item: "" });

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
                Reverter
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