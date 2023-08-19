import { styled } from "styled-components";

export const MessageHeaderMenu = styled.div`
    padding: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MessageHeaderMenuTitle = styled.p`
    font-size: 9.5pt;
    padding-bottom: 12px;
    text-transform: uppercase;
    color: var( --color-blue-light);
`
export const MessageHeaderMenuContent = styled.p`
    width: 90%;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: var(--color-gray-text);
    border-radius: 4px;
    font-size: 10pt;
    padding-top: 5px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
`