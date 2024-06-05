import * as actionType from "../actions/actionTypes";

const initialState = {
    candidates: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.GOT_CANDIDATES: {
            return {
                ...state,
                candidates: action.payload,
            };
        }
        default: {
            return { ...state };
        }
    }
}
