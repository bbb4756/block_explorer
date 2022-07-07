import { createAction } from "redux-actions";

const initialState = {
    blocks: [],
    txs:[]
};

const BLOCK_LIST = {
    REQUEST: "BLOCK_LIST/REQUEST",
    SUCCESS: "BLOCK_LIST/SUCCESS",
    FAILURE: "BLOCK_LIST/FAILURE"
}

export const block_list_request = createAction(BLOCK_LIST.REQUEST, payload => payload)
export const block_list_success = createAction(BLOCK_LIST.SUCCESS, payload => payload)
export const block_list_failure = createAction(BLOCK_LIST.FAILURE, payload => payload)

const block_total = (state = initialState, action) => {
    switch (action.type){
        case BLOCK_LIST.REQUEST:
            return {
                ...state,
            }
        case BLOCK_LIST.SUCCESS:
            return{
                ...state,
                blocks:[...action.payload.block],
                txs:[...action.payload.tx]
            }
        case BLOCK_LIST.FAILURE:
            return{
                ...state,
            }
        default :
            return state

    }
    
}

export default block_total;
