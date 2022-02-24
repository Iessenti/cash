import { call, put, takeEvery } from "redux-saga/effects";
import { apiUrl } from "../consts";
import { addOperationToList, OperationInterface, TRY_TO_CREATE_OPERATION } from "../store/reducers/OperationsListReducer";

import { getDate } from '../consts'
import { setCurrentValue } from "../store/reducers/CurrentValueReducer";

const asyncTryToCreateOperation = async (form: OperationInterface) => {
    try {

        const response = await fetch(
            apiUrl + '/makeOperation/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ...form,
                    name: '',
                    value: parseFloat(form.value),
                    date: getDate()
                })
            }
        )

        if (response.status === 200) {
            const result = await response.json()
            return {
                operation: {
                    ...form,
                    date: getDate() 
                },
                currentValue: result.currentValue 
            }
        }
        
    } catch(error) {
        console.log(error)
    }
}

function* CreatingOperationWorker(action: any) {
    const data: {operation: OperationInterface, currentValue: number} = yield call(asyncTryToCreateOperation, action.payload)

    if (data && data.currentValue) {
        yield put( addOperationToList(data.operation) )
        yield put( setCurrentValue(data.currentValue) )
    } 
}

export function* CreatingOperationWatcher() {
    yield takeEvery(TRY_TO_CREATE_OPERATION, CreatingOperationWorker)
}