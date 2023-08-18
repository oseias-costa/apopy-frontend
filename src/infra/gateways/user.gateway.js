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
import { REGISTER, USER } from "../queries/user.query";
export function registerGateway({ name, email, password, phone }) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = {
            registerInput: {
                name: name,
                email: email,
                password: password,
                phone: phone
            }
        };
        return yield httpClient(REGISTER, variables);
    });
}
export function userGateway() {
    return __awaiter(this, void 0, void 0, function* () {
        return httpClient(USER, {});
    });
}
