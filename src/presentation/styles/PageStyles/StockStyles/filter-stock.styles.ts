import { styled } from "styled-components"
import { TitleModalH2 } from "../../GlobalStyles/modal.style"
import { ButtonCreateItem } from "../../GlobalStyles/titleWithButton.style"

export const FilterDropDowFullBody = styled.div<{display: boolean}>`
    display: ${ props => props.display ? 'block' : 'none'};
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2000;
`

export const FilterDropdownContainer = styled.div<{ left: number, top: number}>`
    background-color: #fff;
    position: relative;
    width: 600px;
    left: ${ props => `${props.left}px`};
    top: ${ props => `${props.top + 32}px`};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    animation: growDown 0.25s ease-in-out forwards;
    transform-origin: top center;

    @media(max-width: 740px){
        max-width: 300px;
    }

  @keyframes growDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
      visibility: hidden;
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
      visibility: visible;
    }
  }
`

export const FilteredDropDowTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

export const FilterDropDowTitle = styled(TitleModalH2)`
`

export const FilterContainer = styled.div`
    display: flex;
    overflow-y: auto;
    padding: 20px;
    @media(max-width: 740px){
        flex-direction: column;
        max-height: 350px;
    }
`

export const FilterTypeContainer = styled.div`
    @media(max-width: 740px){
            padding-bottom: 20px; 
        }

`

export const FilterTypeTitle = styled.h3`
    font-family: var(--font-primary);
    color: var(--color-green-strong);
    font-weight: 200;
    padding-bottom: 15px;
    font-size: 16px;
`

export const FilterList = styled.div`   
    padding-right: 30px;
`

export const FilterListItem = styled.div`
    display: flex;
    padding-bottom: 5px;
`

export const FilterListItemInput = styled.input`
    margin-right: 15px;
    border: 1px solid black;
    display: inline-block;
    accent-color: var(--color-blue-light);

`

export const FilterListItemText = styled.p`
    font-size: 14px;
    color: var(--color-gray-text);
    cursor: pointer;
`

export const ButtonFilterContainer = styled.div`
    display: flex;
    justify-content: end;
    padding-right: 20px;
    padding-bottom: 20px;
`

export const ButtonFilter = styled(ButtonCreateItem)`
    margin-left: 5px;
    width: 100px;
`

export const ButtonFilterClean = styled(ButtonCreateItem)`
    margin-left: 5px;
    background-color: transparent;
    color: #000;
    width: 100px;
`

export const ButtonOpenFilter = styled(ButtonCreateItem)`
    display: flex;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 4px;
    height: 25px;
    margin-top: 0px;
`

export const ButtonCleanFilters = styled.button`
  background-color: transparent;
  border: 1px solid #ababab;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 2px;
  border-radius: 4px;
  cursor: pointer;
  color: #2a2829;
  transition: 0.2s linear;


  &:hover {
    background-color: #e7e7e7;
  }
`;