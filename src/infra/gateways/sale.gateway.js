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
import { GET_SALES, REVERSE_SALE, TRANSFER_SALE } from "../queries/sale.query";
export function getSalesGateway() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield httpClient(GET_SALES, {});
    });
}
export function transferSaleGateway(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            saleInputTransfer: data,
        };
        return yield httpClient(TRANSFER_SALE, variables);
    });
}
export function reverseSaleGateway(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            saleInputTransfer: data
        };
        return yield httpClient(REVERSE_SALE, variables);
    });
}
