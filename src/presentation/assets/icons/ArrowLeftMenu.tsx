import { styled } from "styled-components"


export const ArrowLeftMenu = () => {
    return(
    <>
        <ArrowLeftMenuContainer>
            <ArrowIcon width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M17.28 11.52a.6.6 0 0 1-.6.6H9.728l2.577 2.575a.6.6 0 0 1-.85.85l-3.6-3.6a.6.6 0 0 1 0-.85l3.6-3.6a.6.6 0 1 1 .85.85L9.728 10.92h6.952a.6.6 0 0 1 .6.6Z" clip-rule="evenodd"></path>
            </ArrowIcon>
        </ArrowLeftMenuContainer>
            <Text>1</Text></>
    )
}

const ArrowLeftMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    position: relative;
    left: 115px;
    top: 25px;
    width: 28px;
    height: 28px;
    padding: 2px;
    cursor: pointer;
    transform: rotate(180deg);   
    transition: .2s linear;
    background-color: #EEF0F2;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    &:hover {
        transform: rotate(0deg);   
    }

 
    `

const ArrowIcon = styled.svg`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    background-color: #fff;
    border-radius: 100px;
`

const Text = styled.p`
    position: relative;
    color: #000;

       &:after: {
        content: "asda";
         border:1px solid #f30;
    }
`