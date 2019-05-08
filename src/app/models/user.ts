export interface User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profilePictureUrl: string;
}

export interface LoginView {
    username: string;
    password: string;
}

export interface Token {
    token: string;
    user: User;
}
