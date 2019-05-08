import { Action } from '@ngrx/store';
import { LoginView } from '../models/user';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

export const AUTHENTICATE = '[Auth] Login';
export const AUTHENTICATE_SUCCESS = '[Auth] Login Success';

export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    constructor(public payload: LoginView) {  }
}

export class AuthenticateSuccess implements Action {
    readonly type = AUTHENTICATE_SUCCESS;
    constructor(public payload: Token) {  }
}

export type Action =
    | Authenticate
    | AuthenticateSuccess;
