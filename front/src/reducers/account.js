import { createAction } from "redux-actions";

const initialState = {
    transactions: [],
    value:[]
};

const ACCOUNT = {
    REQUEST: "ACCOUNT/REQUEST",
    SUCCESS: "ACCOUNT/SUCCESS",
    FAILURE: "ACCOUNT/FAILURE"
}

export const account_request = createAction(ACCOUNT.REQUEST, payload => payload)
export const account_success = createAction(ACCOUNT.SUCCESS, payload => payload)
export const account_failure = createAction(ACCOUNT.FAILURE, payload => payload)


const account_info = (state = initialState, action) => {
    switch (action.type){
        case ACCOUNT.REQUEST:
            return {
                ...state,
            }
        case ACCOUNT.SUCCESS:
            console.log("asdf",action.payload)
            return{
                ...state,
                transactions:[...action.payload.result],
                value:action.payload.value
            }
        case ACCOUNT.FAILURE:
            return{
                ...state,
            }
        default :
            return state

    }
    
}

export default account_info;