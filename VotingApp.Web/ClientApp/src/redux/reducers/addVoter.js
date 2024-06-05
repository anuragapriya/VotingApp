import * as actionType from "../actions/actionTypes";

const initialState = {
    voter: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.ADDED_VOTER: {
            return {
                ...state,
                voter: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}
