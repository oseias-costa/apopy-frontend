import { SetStateAction } from "react"
import * as S from "../../../styles/PageStyles/StockStyles/filter-stock.styles"
import { InitialFilterStock } from "../../../types/pages/stock.types"

interface FilterType {
    arr: string[], 
    type: string, 
    filterState: any, 
    setFilterState: React.Dispatch<SetStateAction<any>>
}

export const FilterType: React.FC<FilterType> = ({arr, type, filterState, setFilterState}) => {
  
    const filterItem = arr?.sort().map((item: string) => {
    return(
        <S.FilterListItem key={item}>
            <S.FilterListItemInput 
                type='checkbox' 
                disabled={false}
                checked={filterState[type] === item} 
                onChange={() => {
                    if(item !== filterState[type]){ 
                        setFilterState({...filterState, [type]: item})
                    } else {
                        setFilterState({...filterState, [type]: ""}) }
                    }}
            />
            <S.FilterListItemText>
                {item}
            </S.FilterListItemText>
        </S.FilterListItem>
    )
    })
    return <>{filterItem}</>
}