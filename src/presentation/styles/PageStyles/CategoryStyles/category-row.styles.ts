import { styled } from "styled-components";
import { ButtonCreateItem } from "../../GlobalStyles/titleWithButton.style";


export const CategoryRowText = styled.p`
    color: var(--color-gray-text);
    padding-top: 10px;
    padding-bottom: 10px;
`

export const DropMenu = styled.div<{display: boolean}>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    display: ${props => props.display ? 'flex' : 'none'};
    
`

export const DropMenuButtons = styled.div`
    display: flex;
    flex-direction: column;
`

export const DropMenuContent = styled.div<{left: number | undefined, top: number | undefined}>`
    position: absolute;
    left: ${props => props.left ? props.left - 170  + 'px' : 0};
    top: ${props => props.top ? (props.top) + 10 + 'px' : 0 } ;
    background-color: #FFF;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    width: 150px;
    padding: 10px;
`

export const ButtonCreateSubcategory = styled(ButtonCreateItem)`
    width: 100%;
    margin: 0;
    padding: 6px;
`

export const ButtonUpdate = styled.button`
    background-color: transparent;
    border: 1px solid #ABABAB;
    padding: 4px;
    margin-bottom: 2px;
    border-radius: 4px;
    cursor: pointer;
    color: #2A2829;
    transition: 0.2s linear;
    
    &:hover {
        background-color: #E7E7E7;
    }
`