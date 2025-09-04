export interface IUser {
    uuid: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IUserCreate extends Omit<IUser, 'uuid'>{
    Cpassword : string;
}

export interface IUserLogin extends Omit<IUser, 'uuid'|'name'|'lastname'>{}
