export interface AuthInterface {
    access_token: string,
    role: "admin" | "user" | "guest",
    username: string,
    id: number,
    fullname: string,
    image: string
}

export class AuthUpdate {
    static readonly type = '[Auth]: Auth Update';
    constructor(public payload: AuthInterface) { }
}