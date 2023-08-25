import { IconMenu } from "../../../../styles/GlobalStyles/menu.style";

export function SaleIcon({isSelected} : {isSelected: boolean}) {
  return (
    <IconMenu
        width="24" 
        height="24" 
        fill={isSelected} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3.48 3.12a.6.6 0 1 0 0 1.2h1.332l.481 1.929 1.798 9.582a.6.6 0 0 0 .589.49h1.2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8h8.4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8h1.2a.6.6 0 0 0 .59-.49l1.8-9.6a.599.599 0 0 0-.59-.71H6.348l-.486-1.946a.6.6 0 0 0-.582-.455h-1.8Zm6.6 15.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm8.4 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm-7.8-8.4h4.8a.6.6 0 1 1 0 1.2h-4.8a.6.6 0 1 1 0-1.2Z"></path>
    </IconMenu>
  );
}