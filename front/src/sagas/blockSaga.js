import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { individual_block_request, individual_block_failure,individual_block_success } from '../reducers/individual_block';

async function blockAPI(action) {
    try{
        const result = await axios.post('http://localhost:4000/block/:idx', action);
        console.log("result",result.data)
        return result;
    } catch(e){
        console.log(e)
    }

}


function* block(action) {
    try {
        const result = yield call(blockAPI, action);
        yield put({
            type: individual_block_success.toString(),
            payload: result.data,
        });
    } catch (e) {
        console.log(e)
        yield put({
            type: individual_block_failure.toString(),
            payload: e.response,
        });
    }
}

export default function* blockSaga() {
    yield takeLatest(individual_block_request.toString(), block);
}