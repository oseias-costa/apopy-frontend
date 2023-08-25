import { SetStateAction } from "react";
import { CategoryState } from "../../../types/pages/category.types";
import { CreateCategory } from "./CreateCategory";
import { CreateSubcategory } from "./CreateSubcategory";
import { DeleteCategory } from "./DeleteCategory";
import { DeleteSubcategory } from "./DeleteSubcategory";
import { UpdateCategory } from "./UpdateCategory";
import { UpdateSubcategory } from "./UpdateSupcategory";

type typeModal = {
    [key: string]: React.ReactNode;
  };

interface CategoryCallModalProps {
    categoryState: CategoryState,
    setCategoryState: React.Dispatch<SetStateAction<CategoryState>>
}

export const CategoryCallModal: React.FC<CategoryCallModalProps> = ({ categoryState, setCategoryState }) => {
   
        const typeModal: typeModal = {
            create: <CreateCategory state={categoryState} setState={setCategoryState} />,
            update: <UpdateCategory state={categoryState} setState={setCategoryState} />,
            delete: <DeleteCategory state={categoryState} setState={setCategoryState} />,
            updateSubcategory: <UpdateSubcategory state={categoryState} setState={setCategoryState} />,
            deleteSubcategory: <DeleteSubcategory state={categoryState} setState={setCategoryState} />,
            createSubcategory: <CreateSubcategory state={categoryState} setState={setCategoryState} />,
        };
          return <>{categoryState?.type && typeModal[categoryState?.type]}</> 
}