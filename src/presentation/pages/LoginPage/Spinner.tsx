import { styled } from "styled-components"

export const Spinner = () => {
    return (
        <SpinnerDiv></SpinnerDiv>
    )
}

const SpinnerDiv = styled.div`
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 0px;
    width: 10px;
    height: 10px;
    border-top-color: #fff;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg)
        }
    }
`