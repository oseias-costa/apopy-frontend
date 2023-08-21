import { SetStateAction } from "react";
import { styled } from "styled-components";

export const Eye = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <IconContainer onClick={() => setIsVisible(!isVisible)}>
      <EyeIcon
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!isVisible ? (
          <>
            <path d="M21.6 11.64S18 5.04 12 5.04s-9.6 6.6-9.6 6.6 3.6 6.6 9.6 6.6 9.6-6.6 9.6-6.6Zm-17.792 0A15.764 15.764 0 0 1 5.8 9.188C7.344 7.642 9.456 6.24 12 6.24s4.655 1.402 6.202 2.948c.744.749 1.412 1.57 1.992 2.452-.07.104-.146.22-.234.346a15.831 15.831 0 0 1-1.758 2.106C16.655 15.638 14.543 17.04 12 17.04c-2.544 0-4.654-1.402-6.201-2.948a15.755 15.755 0 0 1-1.991-2.452Z"></path>
            <path d="M12 8.64a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-4.2 3a4.2 4.2 0 1 1 8.4 0 4.2 4.2 0 0 1-8.4 0Z"></path>
          </>
        ) : (
          <>
            <path d="M18.431 15.461c2.041-1.821 3.17-3.885 3.17-3.885s-3.6-6.6-9.6-6.6a8.434 8.434 0 0 0-3.349.705l.924.925A7.133 7.133 0 0 1 12 6.176c2.544 0 4.655 1.401 6.202 2.948.744.748 1.412 1.57 1.992 2.452-.07.104-.146.22-.234.345a15.826 15.826 0 0 1-1.758 2.106 13.1 13.1 0 0 1-.62.583l.85.851Z"></path>
            <path d="M15.957 12.987a4.2 4.2 0 0 0-5.369-5.369l.988.988A3 3 0 0 1 14.97 12l.986.986Zm-3.532 1.559.987.986a4.2 4.2 0 0 1-5.369-5.369l.988.988a3 3 0 0 0 3.394 3.395Z"></path>
            <path d="M6.42 8.539a14.53 14.53 0 0 0-.621.584 15.759 15.759 0 0 0-1.992 2.452l.234.346c.402.576.996 1.344 1.758 2.106 1.547 1.546 3.659 2.948 6.201 2.948.86 0 1.668-.16 2.424-.432l.924.926a8.436 8.436 0 0 1-3.348.706c-6 0-9.6-6.6-9.6-6.6S3.527 9.51 5.57 7.689l.85.851Zm12.356 10.66L4.376 4.8l.85-.849 14.4 14.4-.85.85Z"></path>
          </>
        )}
      </EyeIcon>
      <EyeText>{!isVisible ? "Esconder" : "Mostrar"}</EyeText>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 49px;
  left: 115px;
  width: 100px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    svg {
      fill: var(--color-green-strong);
    }
    p {
      color: var(--color-green-strong);
    }
  }

  @media (max-width: 740px) {
    left: 238px;
  }
`;

const EyeText = styled.p`
  font-size: 12px;
  margin-left: 5px;
  color: #828282;
  min-width: 50px;
  transition: 0.2s linear;
`;

const EyeIcon = styled.svg`
  fill: #828282;
  transition: 0.2s linear;
`;
