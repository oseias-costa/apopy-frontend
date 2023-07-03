import { updateSuplierGateway } from "../../infra/gateways/suplier.gateway"

export const updateSuplierUseCase = async (_id: string, name: string) => {
     const [ data, error, loading ] = await updateSuplierGateway({_id, name})
    return [ data, error, loading ]
}