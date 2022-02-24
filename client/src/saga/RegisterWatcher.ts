import { call, put, takeEvery } from "redux-saga/effects";
import { apiUrl } from "../consts";
import store from "../store";
import { setUserName, TRY_TO_REGISTER } from "../store/reducers/AuthReducer";

const asyncTryToRegister = async (data: {name: string, id: number}) => {
    try {
        const response = await fetch(
            apiUrl + '/auth/createName',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    id: data.id,
                    name: data.name
                })
            }
        )
        
        if (response.status === 200) {
            return true
        } else {
            return false
        }

    } catch(error) {
        console.log(error)
    }
}

function* RegisterWorker( action: any ) {

    const id = store.getState().auth.id

    const isSuccess: boolean = yield call( asyncTryToRegister, {name: action.payload, id: id} )

    if (isSuccess) {
        yield put( setUserName(action.payload) )
    }
}

export function* RegisterWatcher() {
    yield takeEvery(TRY_TO_REGISTER, RegisterWorker)
}