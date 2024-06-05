import * as actionType from "../actions/actionTypes";

const initialState = {
    candidate: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.ADDED_CANDIDATE: {
            return {
                ...state,
                candidate: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}
