import { styled } from "styled-components"

export const ContainerSelect = styled.div`
  position: relative;
`

export const Select = styled.div<{isActive: boolean}>`
  background-color: #f8f8f8;
  border-radius: 3px;
  border: ${props => props.isActive 
    ? '2px solid var(--color-blue-light)'
    : '1px solid #c0b4ad'};
  padding: ${props => props.isActive ? '7px' : '8px'};
  font-family: var(--font-primary);
  margin-bottom: 7px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--color-blue-light);
    padding: 7px;
    transition: border-color 0.4s ease-in-out;
  }
`

export const SelectText = styled.p`
    color: var(--color-gray-placeholder);
`

export const OptionsSelect = styled.div<{width: number, isActive: boolean}>`
  z-index: 400;
  padding-top: 15px;
  padding-bottom: 15px;
  width: ${props => props.width ? `${props?.width}px` : '252px'};
  display: block;
  position: absolute;
  background-color: #fff;
  color: #2A2829;
  top: 40px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  max-height: 180px;
  overflow: auto;
  display: ${props => props.isActive ? 'block' : 'none' };
  animation: growDown 0.25s ease-in-out forwards;
  transform-origin: top center;

    @keyframes growDown {
      0% {
        opacity: 0;
        transform: translateY(-20px);
        visibility: hidden;
      }

      100% {
        opacity: 1;
        transform: translateY(0%);
        visibility: visible;
      }
    }
`

export const ItemSelect = styled.p`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  transition: .15s linear;
  cursor: pointer;
  font-size: 12pt;

  &:hover{
    background: var(--color-gray-hover);
  }
`