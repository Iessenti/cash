import { call, put, takeEvery } from "redux-saga/effects";
import { apiUrl } from "../consts";
import { ResultInterface, setIsUserAuthotized, TRY_TO_LOGIN } from "../store/reducers/AuthReducer";

const asyncTryToLogin = async (phone: string) => {
    try {
        
        const response = await fetch(
            apiUrl + '/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({phone: phone})
            }
        )

        if (response.status === 200) {
            const result: ResultInterface = await response.json()
            console.log(result)
            return result
        }
        
    } catch(error) {
        console.log(error)
    }
}

function* AuthWorker(action: {type: string, payload: string}) {
    const data: ResultInterface | null = yield call(asyncTryToLogin, action.payload)

    if (data && data.phone) {
        yield put( setIsUserAuthotized(data) )
    }
}

export function* AuthWatcher() {
    yield takeEvery(TRY_TO_LOGIN, AuthWorker)
}