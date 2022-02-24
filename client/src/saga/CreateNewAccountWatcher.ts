import { call, put, takeEvery } from "redux-saga/effects";
import { apiUrl } from "../consts";
import store from "../store";
import { setCurrentAccountId, TRY_TO_CREATE_NEW_ACCOUNT } from "../store/reducers/AccountReducer";

const asyncTryToCreateAccount = async (data: {currentValue: string; accountName: string}) => {
    try {

        const id = store.getState().auth.id

        const response = await fetch(
            apiUrl + '/createBankbook/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    id: id,
                    accountName: data.accountName,
                    currentValue: data.currentValue,
                })
            }
        )

        if (response.status === 200) {
            const result = await response.json()
            return result.accountId
        }
        
    } catch(error) {
        console.log(error)
    }
}

function* CreateNewAccountWorker(action: any) {
    const data: number | null = yield call( asyncTryToCreateAccount, action.payload )

    if (typeof data === 'number') {
        yield put( setCurrentAccountId(data) )
    }
}

export function* CreateNewAccountWatcher() {
    yield takeEvery(TRY_TO_CREATE_NEW_ACCOUNT, CreateNewAccountWorker)
}