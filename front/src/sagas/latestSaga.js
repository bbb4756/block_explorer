import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { block_list_request, block_list_failure, block_list_success } from '../reducers/latest';

async function latestAPI(action) {
    try{
        const result = await axios.post('http://localhost:4000', action);
        return result;
    } catch(e){
        console.log(e.error)
    }

}


function* latest(action) {
    try {
        const result = yield call(latestAPI, action);
        yield put({
            type: block_list_success.toString(),
            payload: result.data,
        });
    } catch (e) {
        console.log(e)
        yield put({
            type: block_list_failure.toString(),
            payload: e.response,
        });
    }
}

export default function* latestSaga() {
    yield takeLatest(block_list_request.toString(), latest);
}