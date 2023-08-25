import * as S from "../../../styles/PageStyles/StockStyles/filter-tag"

interface FilterTagProps {
    filteredStock: any, 
    setFilteredStock: any
}

export const FilterTag: React.FC<FilterTagProps> = ({ filteredStock, setFilteredStock}) => {

    const filteredList =  [
        { type: 'category', content: filteredStock.category }, 
        { type: 'product', content: filteredStock.product }, 
        { type: 'suplier', content: filteredStock.suplier },
        { type: 'month', content: filteredStock.month},
        { type: 'year', content: filteredStock.year}
    ]

    const filterTags = filteredList.map(item =>             
        <S.FilterTagItem key={item.type} display={Boolean(item.content !== '')} onClick={() =>setFilteredStock({...filteredStock, [item.type]: ''})}># {item.content}</S.FilterTagItem>)

    return <S.FilterTagContainer>{filterTags}</S.FilterTagContainer>
}
