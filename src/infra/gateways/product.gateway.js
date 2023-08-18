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
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from "../queries/product.query";
export const getProductGateway = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield httpClient(GET_PRODUCTS, {});
});
export const createProductGateway = ({ name, category, subcategory, suplier, }) => __awaiter(void 0, void 0, void 0, function* () {
    const variables = {
        productInput: {
            name,
            category,
            subcategory,
            suplier,
        },
    };
    return yield httpClient(CREATE_PRODUCT, variables);
});
export const updateProductGateway = ({ _id, name, category, subcategory, suplier, }) => __awaiter(void 0, void 0, void 0, function* () {
    const variables = {
        productEdit: {
            _id,
            name,
            category,
            subcategory,
            suplier,
        },
    };
    return yield httpClient(UPDATE_PRODUCT, variables);
});
export function deleteProductGateway(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            id: id
        };
        return yield httpClient(DELETE_PRODUCT, variables);
    });
}
