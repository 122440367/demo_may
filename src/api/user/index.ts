import request from "@/utils/request"
enum API{
    LOGIN_URL='/user/login'

}

export const reqLogin=(data:any)=>request.post<any,any>(API.LOGIN_URL,data)


