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
import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../queries/subcategory.query";
export function updateSubcategoryGateway(newSubcategory, category, subcategory) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            subcategoryEdit: {
                newName: newSubcategory,
                name: subcategory,
                category: category,
            },
        };
        return yield httpClient(UPDATE_SUBCATEGORY, variables);
    });
}
export function createSubcategoryGateway(categoryId, subcategory) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            subcategoryInput: {
                name: subcategory,
                category: categoryId,
            }
        };
        return yield httpClient(CREATE_SUBCATEGORY, variables);
    });
}
export function deleteSubcategoryGateway(categoryId, subcategory) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            subcategoryEdit: {
                name: subcategory,
                category: categoryId,
            },
        };
        return yield httpClient(DELETE_SUBCATEGORY, variables);
    });
}
