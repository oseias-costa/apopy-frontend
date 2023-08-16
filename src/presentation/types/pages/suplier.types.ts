
export interface SuplierState {
    id: string; 
    name: string; 
    type: string; 
    openModal: boolean 
}
  
export interface SuplierStateProps {
   state: SuplierState;
   setState: React.Dispatch<React.SetStateAction<SuplierState>>;
}

export const suplierInitialState: SuplierState = {
    id: "",
    name: "",
    type: "",
    openModal: false,
}

export type SuplierComponentState = {
    isEmpty: boolean,
    loading: boolean
} 