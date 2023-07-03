import { makeVar } from "@apollo/client";

export const initialValue = {
    type: 'create',
    id: '',
    name: ''
}

export const dispatchSuplier = makeVar(initialValue)