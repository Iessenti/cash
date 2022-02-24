import { call, put, takeEvery } from "redux-saga/effects";
import { apiUrl } from "../consts";
import store from "../store";
import { GET_ALL_OPERATIONS, OperationInterface, setOperationsList } from "../store/reducers/OperationsListReducer";

const asyncGetAllOperations = async (accountId: number) => {
    try {

        const response = await fetch(
            apiUrl + `/getAllOperations/${accountId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        )

        if (response.status === 200) {
            const result = await response.json()
            return result.operationsList
        } 
        
    } catch(error) {
        console.log(error)
    }
}

function* OperationsListWorker() {

    const accountId: number = store.getState().account

    const operationsList: OperationInterface[] | null = yield call(asyncGetAllOperations, accountId)

    if (operationsList) {
        yield put( setOperationsList(operationsList) )
    }

}

export function* OperationsListWatcher() {
    yield takeEvery(GET_ALL_OPERATIONS, OperationsListWorker)
}