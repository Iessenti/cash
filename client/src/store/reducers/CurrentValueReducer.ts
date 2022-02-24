
export const SET_CURRENT_VALUE = 'SET_CURRENT_VALUE'


const initialState: number = 0

export const CurrentValueReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_CURRENT_VALUE:
            return action.payload

        default: 
            return state
    }
}

export const setCurrentValue = (payload: number) => ({type: SET_CURRENT_VALUE, payload})