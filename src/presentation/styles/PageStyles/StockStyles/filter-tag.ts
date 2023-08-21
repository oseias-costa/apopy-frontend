import { styled } from "styled-components"

export const FilterTagContainer = styled.div`
    display: flex;
`

export const FilterTagItem = styled.button<{display: boolean}>`
    display: ${props => props.display ? 'block' : 'none'};
    background-color: var( --color-gray-hover);
    color: var(--color-gray-placeholder);
    border: none;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 4px;
    height: 25px;
    transition: .2s ease;
    cursor: pointer;
    margin-right: 5px;

    &:hover{
        background-color: #d9d9d9;
    }
`

export const FilterTagsList = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 15px;
`