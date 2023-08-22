import { styled } from "styled-components";

export const DashboardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media(max-width: 740px){
        flex-direction: column;
    }
`

export const DashboarItem = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 30%;
    height: 140px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
    margin: 5px;
    padding-top: 25px;
    border-radius: 4px;
    display: flex;
    @media(max-width: 740px){
        width: 100%;
    }

`

export const DashboardNumber = styled.h2`
    font-size: 32px;
    font-weight: 500;
    color: #4C4A51;
    padding-bottom: 8px;
`

export const DashboardSubTitle = styled.p`
    color: var(--color-blue-light);
    padding-bottom: 18px;
`

export const DashboardItemText = styled.p`
    color: #92929F;
    font-size: 15px;
    font-weight: 100;
`

export const DashboardNumberBlock = styled.div`
        display: flex;
        flex-direction: column;
        align-items: space-between;
        padding-right: 50px;
`

export const ChartContainer = styled.div`
    height: 300px;
    width: 100%;
    margin-top: 1em;
    border-radius: 0.4em;
    text-align: center;
`

export const ChartResponsive = styled.div`
    width: 100%;
    height: 100%;
`

