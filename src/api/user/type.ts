interface Response {
    code: number;
    msg: string;
}

export interface LoginResponse extends Response {
    data: string;
}
