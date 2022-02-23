
export interface ResultInterface {
    token: string;
    phone: string;
    isUserExist: boolean
}

//auth actions
export const TRY_TO_LOGIN = 'TRY_TO_LOGIN'
export const SET_IS_USER_AUTHORIZED = 'SET_IS_USER_AUTHORIZED'

// auth reducer
const initialState: ResultInterface = {
    token: '',
    phone: '',
    isUserExist: false
}

export const AuthReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_IS_USER_AUTHORIZED:
            return action.payload

        default: 
            return state
    }
}

// auth actors
export const tryToLogin = (payload: string) => ({type: TRY_TO_LOGIN, payload})
export const setIsUserAuthotized = (payload: ResultInterface) => ({type: SET_IS_USER_AUTHORIZED, payload})
