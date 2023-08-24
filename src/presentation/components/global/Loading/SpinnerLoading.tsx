import { styled } from "styled-components";

export const SpinnerLoading = () => {
  return (
    <SpinnerContainer
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 50 50"
    >
      <path d="M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm84,84H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.25977,48.76953a12.0001,12.0001,0,0,0-16.9707,16.9707l22.62695,22.627a12.0001,12.0001,0,0,0,16.97071-16.97071ZM128,180a12.0006,12.0006,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12.0006,12.0006,0,0,0,128,180ZM74.25977,164.76953l-22.627,22.62695a12.0001,12.0001,0,0,0,16.97071,16.97071l22.62695-22.627a12.0001,12.0001,0,0,0-16.9707-16.9707ZM76,128a12.0006,12.0006,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12.0006,12.0006,0,0,0,76,128ZM68.60352,51.63281A12.0001,12.0001,0,0,0,51.63281,68.60352l22.627,22.62695a12.0001,12.0001,0,0,0,16.9707-16.9707Z" />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.svg`
  width: 134px;
  height: 134px;
  fill: #000;
  animation: rotateIcon 1s linear infinite;

  @keyframes rotateIcon {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
