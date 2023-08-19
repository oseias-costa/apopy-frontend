export type StateMenuHeader = {
    notification: boolean;
    message: boolean;
    user: boolean;
  }

export type ActionMenuHeader = 
      { type: 'notificationChange' } 
    | { type: 'messageChange' } 
    | { type: 'userChange' } 
    | { type: 'resetState' }

export type ActionMenuHeaderType =  { type: string }

export const initialStateMenuHeader = { notification: false, message: false, user: false }

export type IconMenuType = {
    name: string;
    onClick: () => void;
    isCliked: boolean;
}