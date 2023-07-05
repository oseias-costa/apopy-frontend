
export type CategoryState = {
    id: string;
    name: string;
    type: string;
    subcategory: string[]
  };

  export const initialCategoryValue = {
     id: '', 
     name: '', 
     subcategory: [], 
     type: 'create'
  }