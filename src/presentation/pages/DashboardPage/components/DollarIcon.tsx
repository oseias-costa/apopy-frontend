import { styled } from "styled-components";

export const DollarIcon = () => {
    return(
        <IconDashboardContainer>
            <svg width='26px' height='26px' fill="none" stroke="#8a8887" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1v22"></path>
                <path d="M17.5 3H10a4.5 4.5 0 1 0 0 9"></path>
                <path d="M6.5 21H14a4.5 4.5 0 1 0 0-9h-4"></path>
            </svg>
        </IconDashboardContainer>
    )
}

export const IconDashboardContainer = styled.div`
    background-color: var(--color-gray-hover);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1040px){
        padding: 8px;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`
