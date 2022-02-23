import { combineReducers } from "redux"

import { ModalReducer } from './ModalReducer'
import { AuthReducer } from './AuthReducer'

const rootReducer = combineReducers({

    modal: ModalReducer,

    auth: AuthReducer,
})

export { rootReducer }