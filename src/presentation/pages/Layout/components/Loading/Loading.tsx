import { styled } from "styled-components";
import Logo from "../../../../assets/logo/logo-menu.svg";

export const Loading = ({ disabled }: { disabled: boolean }) => {
  return (
    <LoadingContainer disabled={disabled}>
      <LoadingLogoWithSpinner>
        <ImgLogo src={Logo} />
        <SpinnerIcon />
      </LoadingLogoWithSpinner>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div<{ disabled: boolean }>`
  background-color: rgba(255, 255, 255);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
  display: ${(props) => (props.disabled ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;

const LoadingLogoWithSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 62px;
  height: auto;
  @media (max-width: 740px) {
    display: none;
  }
`;

export const SpinnerIcon = () => {
  return (
    <SpinnerContainer viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="m25 18c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z" />
      <path
        d="m25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"
        opacity=".3"
      />
      <path
        d="m29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"
        opacity=".3"
      />
      <path
        d="m17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"
        opacity=".3"
      />
      <path
        d="m21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3s1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"
        opacity=".93"
      />
      <path
        d="m33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3s1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"
        opacity=".3"
      />
      <path
        d="m17 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"
        opacity=".65"
      />
      <path
        d="m41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"
        opacity=".3"
      />
      <path
        d="m18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"
        opacity=".86"
      />
      <path
        d="m38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"
        opacity=".3"
      />
      <path
        d="m11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3s.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"
        opacity=".44"
      />
      <path
        d="m31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3s.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"
        opacity=".3"
      />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.svg`
  width: 56px;
  height: 56px;
  fill: var(--color-green-strong);
  animation: rotateIcon 0.7s linear infinite;

  @keyframes rotateIcon {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const Spinner2 = () => {
  return (
    <SpinnerContainer
      width="46"
      height="46"
      fill="#000"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2v4" opacity=".2"></path>
      <path d="M12 18v4" opacity=".3"></path>
      <path d="m4.93 4.93 2.83 2.83" opacity=".4"></path>
      <path d="m16.24 16.24 2.83 2.83" opacity=".5"></path>
      <path d="M2 12h4" opacity=".6"></path>
      <path d="M18 12h4" opacity=".7"></path>
      <path d="m4.93 19.07 2.83-2.83" opacity=".8"></path>
      <path d="m16.24 7.76 2.83-2.83" opacity=".9"></path>
    </SpinnerContainer>
  );
};
