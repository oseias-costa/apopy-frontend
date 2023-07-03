import { makeVar } from "@apollo/client";

export const initialValue = {
    openModal: false
}

export const dispatchModal = makeVar(initialValue)