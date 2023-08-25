import { MouseEventHandler } from "react"
import { IconSvgSubcategory } from "../../../styles/PageStyles/CategoryStyles/subcategory-row.styles"

export const DootsIconSubcategory= ({ onClick }: { onClick: MouseEventHandler }) => {
  return(
    <div onClick={onClick}>
      <IconSvgSubcategory 
        width="22" 
        height="22" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.32 18.48a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Zm0-6a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Zm0-6a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"></path>
      </IconSvgSubcategory>
    </div>
  )
}
