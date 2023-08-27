import { IconMenu } from "../../../../../styles/GlobalStyles/menu.style";

export function SuplierIcon({isSelected} : {isSelected: boolean}) {
  return (
    <IconMenu
        width="24" 
        height="24" 
        fill={isSelected} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
         <path d="M13.552 2.4H7.2a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4V8.05a1.2 1.2 0 0 0-.352-.849L14.4 2.752a1.2 1.2 0 0 0-.848-.352Zm.248 4.2V4.2l3.6 3.6H15a1.2 1.2 0 0 1-1.2-1.2Zm-6 6.6a.6.6 0 1 1 0-1.2h8.4a.6.6 0 1 1 0 1.2H7.8ZM7.2 15a.6.6 0 0 1 .6-.6h8.4a.6.6 0 1 1 0 1.2H7.8a.6.6 0 0 1-.6-.6Zm.6 3a.6.6 0 1 1 0-1.2h4.8a.6.6 0 1 1 0 1.2H7.8Z"></path>
    </IconMenu>
  );
}