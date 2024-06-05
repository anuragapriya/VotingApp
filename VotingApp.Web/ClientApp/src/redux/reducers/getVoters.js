import * as actionType from "../actions/actionTypes";

const initialState = {
    voters: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.GOT_VOTERS: {
            return {
                ...state,
                voters: action.payload,
            };
        }
        default: {
            return { ...state };
        }
    }
}
