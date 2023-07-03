import { useMutation, ApolloCache, DefaultContext, OperationVariables, useQuery } from "@apollo/client";
import { insertItemOnCache } from "../cache/add-item.cache";
import { updateItemOnCache } from "../cache/update-item.cache";
import { CREATE_SUPLIER, SUPLIERS, UPDATE_SUPLIER } from "../http/suplier.query";
import { SUPLIER_FRAGMENT } from "../queries/suplier";


export const getSupliersGateway = () => {
    const { data, loading, error } = useQuery(SUPLIERS)
    return [data, loading, error]
}

export const createSuplierGateway = () => {
    const [createSuplier, { error, data, loading }] =
        useMutation<any, OperationVariables, DefaultContext, ApolloCache<any>>(
            CREATE_SUPLIER, {
            update: (cache, { data }) =>
                insertItemOnCache(cache, data, createSuplier, 'supliers')
        })
    return [data, loading, error]
}

export const updateSuplierGateway = async ({_id, name} : { _id: string, name: string}) => {
    const [ updateSuplier, { error, data, loading } ] = useMutation(UPDATE_SUPLIER, {
        update: (_, { data: { updateSuplier } }) =>  
            updateItemOnCache(updateSuplier, 'Suplier', SUPLIER_FRAGMENT)
         })

         await updateSuplier({
            variables: {
                suplierInput: {
                    _id: _id,
                    name: name
                }
            },
         })
    
    return [ error, data, loading]
}
