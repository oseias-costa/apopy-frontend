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
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY, } from "../queries/category.query";
export function fetchCategoryGateway() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield httpClient(GET_CATEGORIES, {});
    });
}
export function createCategoryGateway(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            categoryInput: { name: name },
        };
        return yield httpClient(CREATE_CATEGORY, variables);
    });
}
export function updateCategoryGateway(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            categoryEdit: {
                _id: id,
                name: name,
            },
        };
        return yield httpClient(UPDATE_CATEGORY, variables);
    });
}
export function deleteCategoryGateway(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { categoryEdit: { _id: id } };
        return yield httpClient(DELETE_CATEGORY, variables);
    });
}
