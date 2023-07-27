import { IconMenu } from "../../../../styles/GlobalStyles/menu.style";

export function ProductIcon({isSelected} : {isSelected: boolean}) {
  return (
    <IconMenu
        width="24" 
        height="24" 
        fill={isSelected} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
       <path d="M5.28 4.32a1.2 1.2 0 0 1 1.2-1.2h5.503a1.2 1.2 0 0 1 .849.352l8.4 8.4a1.2 1.2 0 0 1 0 1.697l-5.503 5.503a1.2 1.2 0 0 1-1.697 0l-8.4-8.4a1.2 1.2 0 0 1-.352-.849V4.32Zm4.2 4.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"></path>
       <path d="M4.431 11.272a1.2 1.2 0 0 1-.351-.848V4.32a1.2 1.2 0 0 0-1.2 1.2v5.504c0 .318.126.623.351.848l8.4 8.4a1.2 1.2 0 0 0 1.697 0l.052-.052-8.949-8.948Z"></path>
    </IconMenu>
  );
}