import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as authActions from '../actions/auth.action';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {
    constructor(
        private authService: AuthService,
        private action$: Actions
    ) {  }

    @Effect() authenticate$: Observable<Action> = this.action$.pipe(
        ofType(authActions.AUTHENTICATE),
        switchMap(view => {
            return this.authService.login(view.payload).pipe(
                map(resData => new authActions.AuthenticateSuccess(resData))
            );
        })
    );
}
