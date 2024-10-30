import { LoginModel } from "../registration/Model/login.model";

export interface Authresponse {
    token: string;
    user: LoginModel;
}
