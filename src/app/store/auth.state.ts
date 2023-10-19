import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthInterface, AuthUpdate } from "./model/auth.model";
import { Injectable } from "@angular/core";

@State<AuthInterface>({
    name: 'AuthState',
    defaults: {
        access_token: '',
        role: 'guest',
        username: 'guest',
        id: -1,
        fullname: 'guest',
        image: ''
    }
})
@Injectable()
export class AuthState {
    @Selector()
    static getAuthObject(state: AuthInterface) {
        return state
    }
    @Selector()
    static getAuthToken(state: AuthInterface) {
        return state.access_token
    }
    @Action(AuthUpdate)
    updateAuthState(context: StateContext<AuthInterface>, action: AuthUpdate) {
        context.patchState({
            access_token: action.payload.access_token,
            role: action.payload.role,
            username: action.payload.username,
            id: action.payload.id,
            fullname: action.payload.fullname,
            image: action.payload.image
        })
    }
}