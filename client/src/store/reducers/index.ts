import { combineReducers } from "redux"

import { ModalReducer } from './ModalReducer'
import { AuthReducer } from './AuthReducer'
import { AccountReducer } from './AccountReducer'
import { OperationsListReducer } from './OperationsListReducer'
import { CurrentValueReducer } from './CurrentValueReducer'

const rootReducer = combineReducers({

    modal: ModalReducer,

    auth: AuthReducer,

    account: AccountReducer,

    operationsList: OperationsListReducer,

    currentValue: CurrentValueReducer,
    
})

export { rootReducer }