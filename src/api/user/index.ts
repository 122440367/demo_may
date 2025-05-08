import request from "../../utils/request"
import type { LoginResponse } from "./type"

const API = {
    LOGIN_URL: '/user/login'
};

export const reqLogin = (data: any) => request.post<any, LoginResponse>(API.LOGIN_URL, data)


