import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {account_request, account_success, account_failure} from '../reducers/account'
async function accountAPI(action) {
    try{
        const response = await axios.post('http://localhost:4000/account/:idx', action);
        console.log("result",response)
        return response;
    } catch(e){
        console.log(e)
    }

}

function* account(action) {
    console.log("action",action)
    try {
        const result = yield call(accountAPI, action);
        yield put({
            type: account_success.toString(),
            payload: result.data,
        });
    } catch (e) {
        console.log(e)
        yield put({
            type: account_failure.toString(),
            payload: e.response,
        });
    }
}




export default function* accountSaga() {
    yield takeLatest(account_request.toString(), account);
}



