
// account actions
export const TRY_TO_CREATE_NEW_ACCOUNT = 'TRY_TO_CREATE_NEW_ACCOUNT'
export const SET_ACCOUNT_ID = 'SET_ACCOUNT_ID'

// account reducers
let initialState: number = 0

if (localStorage.currentAccountId && localStorage.currentAccountId.length && localStorage.currentAccountId.length > 0) {
    const num = parseFloat(localStorage.currentAccountId)
    initialState = num
}

export const AccountReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_ACCOUNT_ID:
            localStorage.setItem('currentAccountId', action.payload.toString())
            return action.payload

        default:
            return state
    }
}


// account actors

export const tryToCreateNewAccount = (payload: {currentValue: string; accountName: string}) => ({type: TRY_TO_CREATE_NEW_ACCOUNT, payload})
export const setCurrentAccountId = (payload: number) => ({type: SET_ACCOUNT_ID, payload})