// operations list interface dto
export interface OperationInterface {
    name: string; 
    category: string; 
    type: string; 
    color: string; 
    value: string; 
    date: string; 
    bankbookId: number
}

// operations list actions
export const GET_ALL_OPERATIONS = 'GET_ALL_OPERATIONS'
export const SET_OPERATIONS_LIST = 'SET_OPERATIONS_LIST'
export const TRY_TO_CREATE_OPERATION = 'TRY_TO_CREATE_OPERATION'
export const ADD_OPERATION_TO_LIST = 'ADD_OPERATION_TO_LIST'

// operations list reducer

const initialState: OperationInterface[] = []

export const OperationsListReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_OPERATIONS_LIST:
            return action.payload

        case ADD_OPERATION_TO_LIST:
            return [
                action.payload,
                ...state
            ]

        default:
            return state
    }

}


// operations list actors
export const getAllOperations = () => ({type: GET_ALL_OPERATIONS})
export const setOperationsList = (payload: OperationInterface[]) => ({type: SET_OPERATIONS_LIST, payload})
export const tryToCreateOperation = (payload: OperationInterface) => ({type: TRY_TO_CREATE_OPERATION, payload})
export const addOperationToList = (payload: OperationInterface) => ({type: ADD_OPERATION_TO_LIST, payload})