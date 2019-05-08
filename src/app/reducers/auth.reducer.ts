import * as authActions from '../actions/auth.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Token } from '../models/user';

export interface AuthState {
    token: Token;
}

const initialState: AuthState = {
    token: null,
};

export function authReducer(
    state = initialState,
    action: authActions.Action
) {
    switch (action.type) {
        case authActions.AUTHENTICATE_SUCCESS:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}

export const getAuthState = createSelector(
    createFeatureSelector('auth'),
    (state: any) => state
);

export const getToken = createSelector(
    getAuthState,
    (state: AuthState) => state.token
);

export const isAuthenticated = createSelector(
    getAuthState,
    (state: AuthState) => state.token === null || state.token === undefined
);
