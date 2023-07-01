import { useMutation, ApolloCache, DefaultContext, OperationVariables } from "@apollo/client";
import { insertItemOnCache } from "../cache/add-item.cache";
import { CREATE_SUPLIER } from "../http/suplier.query";

export const [ createSuplier ] = useMutation<any, OperationVariables, DefaultContext, ApolloCache<any>>(
    CREATE_SUPLIER, {
        update: (cache, { data }) => 
            insertItemOnCache(cache, data, createSuplier, 'supliers')
})