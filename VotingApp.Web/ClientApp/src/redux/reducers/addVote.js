import * as actionType from "../actions/actionTypes";

const initialState = {
    vote: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.ADDED_VOTE: {
            return {
                ...state,
                vote: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}
