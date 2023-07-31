import { useRef, useState } from "react";
import { ButtonCreateItem } from "../../../styles/GlobalStyles/titleWithButton.style";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { DootsIcon } from "./DootsIcon";
import { EditIcon } from "./EditIcon";
import { PlusIcon } from "./PlusIcon";

export const CategoryRow = ({state, setCategoryState}) => {
const [ menuCategory, setMenuCategory ] = useState({ openMenu: false, item: ''})
const [ positionCategory, setPositionCategory ] = useState()

    const handleSetCategory = (item, data) => {
        return setCategoryState({
            _id: item._id,
            name: item.name,
            openModal: true,
            ...data
        })
    }

    const listCategories = state?.map(
        (item: { _id: string; name: string; subcategory: string[] }) => {
          return (
            <>
              <div key={item?._id} style={{ display: "flex", justifyContent: 'space-between' }}>
                <S.CategoryRowText>{item?.name}</S.CategoryRowText>
                  <S.DropMenu 
                    display={menuCategory.item === item?._id} 
                    onClick={() => setMenuCategory({ openMenu: false, item: '' })}
                  >
                    <S.DropMenuContent left={positionCategory?.pageX} top={positionCategory?.pageY}>
                      <S.DropMenuButtons>
                        <S.ButtonUpdate onClick={() => handleSetCategory(item, { type: "update" })}> 
                          Editar
                        </S.ButtonUpdate>
                        <S.ButtonUpdate onClick={() => handleSetCategory(item, { type: "delete" })}>
                            Excluir
                        </S.ButtonUpdate>
                      </S.DropMenuButtons>
                      <S.ButtonCreateSubcategory onClick={() => handleSetCategory(item, { type: "createSubcategory", newSubcategory: "", })}>
                        Adicionar Subcategoria
                      </S.ButtonCreateSubcategory>
                    </S.DropMenuContent>
                  </S.DropMenu>
              <DootsIcon 
                onClick={(e) => { 
                  setMenuCategory({ openMenu: !menuCategory, item: item?._id })
                  setPositionCategory(e)
                }} 
              />
              </div>
            </>
          );
        }
      );
      return listCategories
}