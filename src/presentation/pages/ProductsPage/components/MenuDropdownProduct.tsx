import { DootsIcon } from "../../CategoryPage/components/DootsIcon";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { MenuDropdownProps, MenuState, PositionItem } from "../../../types/pages/products.types";
import { useState } from "react";

export const MenuDropdownProduct: React.FC<MenuDropdownProps> = ({state, item, setState}) => {

  const [positionItem, setPositionItem] = useState<PositionItem>();
  const [ menuState, setMenuState] = useState<MenuState>({
      openMenu: false,
      item: "",
    });

    return(
        <S.ContainerDropMenu>
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
        onClick={(e) => {
          setMenuState({openMenu: !menuState, item: item?._id });
          setPositionItem(e);
            }}
        />
        </S.ContainerDropMenu>
    )
 }