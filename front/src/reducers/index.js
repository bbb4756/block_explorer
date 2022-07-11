
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import block_total from "./latest";
import individual_block_info from "./individual_block";
import individual_tx_info from "./individual_tx";
import account_info from "./account";
import create from "./create";

const persist = {
    key: 'gyuri',
    storage,
};

const rootReducer = combineReducers({
    block_total, individual_block_info, individual_tx_info, create, account_info

})

export default persistReducer(persist, rootReducer);