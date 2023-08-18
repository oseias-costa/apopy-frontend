var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpClient } from "../http/httpClient";
import { CREATE_SUPLIER, DELETE_SUPLIER, GET_SUPLIERS, UPDATE_SUPLIER } from "../queries/suplier.query";
export const getSupliersGateway = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield httpClient(GET_SUPLIERS, {});
});
export function createSuplierGateway({ name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            suplierInput: {
                name: name,
            }
        };
        return yield httpClient(CREATE_SUPLIER, variables);
    });
}
export default function updateSuplierGateway({ _id, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            suplierInput: {
                _id: _id,
                name: name
            }
        };
        return yield httpClient(UPDATE_SUPLIER, variables);
    });
}
export function deleteSuplierGateway(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { id: id };
        return yield httpClient(DELETE_SUPLIER, variables);
    });
}
