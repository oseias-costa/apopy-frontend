import { createSuplierGateway } from '../../infra/gateways/suplier.gateway'

export const createSuplierUseCase = () => {
    const [ data, error, loading ] = createSuplierGateway()
    return [ data, error, loading ]
}