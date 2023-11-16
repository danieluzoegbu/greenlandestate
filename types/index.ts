export interface WindowSize {
    width: number;
    height: number;
}

export interface IUser {
    _id?: string;
    email: string;
    fullName: string;
    phonenumber: string;
    ssn: string;
    available: string;
    savings: string;
    current: string;
    accountNo: string;
    routingNo: string;
    history: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
}