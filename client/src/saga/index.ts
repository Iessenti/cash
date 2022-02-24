import {all} from "redux-saga/effects"

import { AuthWatcher } from './AuthWatcher'
import { RegisterWatcher } from './RegisterWatcher'
import { CreateNewAccountWatcher } from './CreateNewAccountWatcher'
import { OperationsListWatcher } from './OperationsListWatcher'
import { CreatingOperationWatcher } from './CreatingOperationWatcher'

export function* rootWatcher() {
    yield all([
        AuthWatcher(),
        RegisterWatcher(),
        CreateNewAccountWatcher(),
        OperationsListWatcher(),
        CreatingOperationWatcher(),
    ])
}