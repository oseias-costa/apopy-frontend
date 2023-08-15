import { styled } from "styled-components";

export const DashboardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export const DashboarNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    margin: 5px;
    padding: 5px;

    h2 {
        font-size: 32px;
        font-weight: 300;
        color: var(--color-gray-title);
    }

    p {
        text-align: center;
    }
`