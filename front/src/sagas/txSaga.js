import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { individual_tx_request, individual_tx_failure,individual_tx_success } from '../reducers/individual_tx';

async function txAPI(action) {
    try{
        const result = await axios.post('http://localhost:4000/tx/:idx', action);
        console.log("result",result.data)
        return result;
    } catch(e){
        console.log(e)
    }

}


function* tx(action) {
    try {
        const result = yield call(txAPI, action);
        yield put({
            type: individual_tx_success.toString(),
            payload: result.data,
        });
    } catch (e) {
        console.log(e)
        yield put({
            type: individual_tx_failure.toString(),
            payload: e.response,
        });
    }
}

export default function* txSaga() {
    yield takeLatest(individual_tx_request.toString(), tx);
}