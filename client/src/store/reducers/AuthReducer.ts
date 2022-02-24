
export interface ResultInterface {
    token: string;
    phone: string;
    isUserExist: boolean;
    id: number;
    name: string;
}

//auth actions
export const TRY_TO_LOGIN = 'TRY_TO_LOGIN'
export const SET_IS_USER_AUTHORIZED = 'SET_IS_USER_AUTHORIZED'
export const TRY_TO_REGISTER = 'TRY_TO_REGISTER'
export const SET_USER_NAME = 'SET_USER_NAME'

// auth reducer
let initialState: ResultInterface = {
    token: '',
    phone: '',
    isUserExist: false,
    id: 0,
    name: ''
}

if (localStorage.userdata && localStorage.userdata.length && localStorage.userdata.length > 0) {
    let data = JSON.parse(localStorage.userdata)
    if (data.phone && data.id) {
        initialState = data
    }
}

export const AuthReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_IS_USER_AUTHORIZED:
            localStorage.setItem('userdata', JSON.stringify(action.payload))
            return action.payload

        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            }
        default: 
            return state
    }
}

// auth actors
export const tryToLogin = (payload: string) => ({type: TRY_TO_LOGIN, payload})
export const setIsUserAuthotized = (payload: ResultInterface) => ({type: SET_IS_USER_AUTHORIZED, payload})

export const tryToRegister = (payload: string) => ({type: TRY_TO_REGISTER, payload})
export const setUserName = (payload: string) => ({type: SET_USER_NAME, payload})
