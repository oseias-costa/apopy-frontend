import * as S from "../../../styles/PageStyles/CategoryStyles/subcategory-row.styles";


export const SubcategoryRow = ({item, handleSetCategory}) => {
        {item.subcategory?.map((sub) => {
            return (
              <S.SubcategoryRowContainer key={sub}>
                <p>{sub}</p>
                <a onClick={() => handleSetCategory(item, {
                      type: "updateSubcategory",
                      newSubcategory: sub,
                      oldSubcategory: sub,
                    })}>
                  Update subcategoria
                </a>
                <a onClick={() => handleSetCategory(item,{
                      type: "deleteSubcategory",
                      oldSubcategory: sub
                })}>
                  Delete subcategoria
                </a>
              </S.SubcategoryRowContainer>
            );
          })}
    }
