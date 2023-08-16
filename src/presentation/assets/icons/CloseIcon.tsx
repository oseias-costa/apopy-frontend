import { styled } from "styled-components"

export const CloseIcon = ({onClick} : {onClick: () => void}) => {
    return(
        <CloseSvgContainer>
            <CloseSvg onClick={onClick} width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z" clipRule="evenodd"></path> 
            </CloseSvg>
        </CloseSvgContainer>
    )
}


const CloseSvgContainer = styled.div`
    border-radius: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    transition: 0.2s linear;

    &:hover{
        background-color: #EAE5E5;
        transform: rotate(90deg);
    }
`

const CloseSvg = styled.svg`
    background-color: transparent;
    fill: #828282;
    cursor: pointer;  
`