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
import { CREATE_STOCK_ITEM, DELETE_STOCK_ITEM, GET_STOCK, UPDATE_STOCK_ITEM } from "../queries/stock.query";
export function getStockGateway() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield httpClient(GET_STOCK, {});
    });
}
export function createStockItemGateway(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            stockItem: data,
        };
        return yield httpClient(CREATE_STOCK_ITEM, variables);
    });
}
export function updateStockItemGateway(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            stockItem: data
        };
        return yield httpClient(UPDATE_STOCK_ITEM, variables);
    });
}
export function deleteStockItemGateway(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            deleteStockItemId: id
        };
        return yield httpClient(DELETE_STOCK_ITEM, variables);
    });
}
