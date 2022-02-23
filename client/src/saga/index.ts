import {all} from "redux-saga/effects"

import { AuthWatcher } from './AuthWatcher'

export function* rootWatcher() {
    yield all([
        AuthWatcher()
    ])
}