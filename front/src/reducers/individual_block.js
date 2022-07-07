import { createAction } from "redux-actions";

const initialState = {
    individual_block: {},
};

const INDIVIDUAL_BLOCK = {
    REQUEST: "INDIVIDUAL_BLOCK/REQUEST",
    SUCCESS: "INDIVIDUAL_BLOCK/SUCCESS",
    FAILURE: "INDIVIDUAL_BLOCK/FAILURE"
}

export const individual_block_request = createAction(INDIVIDUAL_BLOCK.REQUEST, payload => payload)
export const individual_block_success = createAction(INDIVIDUAL_BLOCK.SUCCESS, payload => payload)
export const individual_block_failure = createAction(INDIVIDUAL_BLOCK.FAILURE, payload => payload)

const individual_block_info = (state = initialState, action) => {
    switch (action.type){
        case INDIVIDUAL_BLOCK.REQUEST:
            return {
                ...state,
            }
        case INDIVIDUAL_BLOCK.SUCCESS:
            console.log("asdf",action.payload)
            return{
                ...state,
                individual_block:{...action.payload},
            }
        case INDIVIDUAL_BLOCK.FAILURE:
            return{
                ...state,
            }
        default :
            return state

    }
    
}

export default individual_block_info;