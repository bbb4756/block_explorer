import { createAction } from "redux-actions";

const initialState = {
    individual_tx: {},
};

const INDIVIDUAL_TX = {
    REQUEST: "INDIVIDUAL_TX/REQUEST",
    SUCCESS: "INDIVIDUAL_TX/SUCCESS",
    FAILURE: "INDIVIDUAL_TX/FAILURE"
}

export const individual_tx_request = createAction(INDIVIDUAL_TX.REQUEST, payload => payload)
export const individual_tx_success = createAction(INDIVIDUAL_TX.SUCCESS, payload => payload)
export const individual_tx_failure = createAction(INDIVIDUAL_TX.FAILURE, payload => payload)

const individual_tx_info = (state = initialState, action) => {
    switch (action.type){
        case INDIVIDUAL_TX.REQUEST:
            return {
                ...state,
            }
        case INDIVIDUAL_TX.SUCCESS:
            console.log("asdf",action.payload)
            return{
                ...state,
                individual_tx:{...action.payload},
            }
        case INDIVIDUAL_TX.FAILURE:
            return{
                ...state,
            }
        default :
            return state

    }
    
}

export default individual_tx_info;