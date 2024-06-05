import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";

export default function* addVoteSaga() {
    yield takeEvery(actionType.ADD_VOTE, addVote);
}

function* addVote(action) {
    console.log(action)
    try {
        const responseData = yield call(postsblogPostApi.votingSelectionSubmit, action.payload);
        yield put({ type: actionType.ADDED_VOTE, payload: responseData });

    } catch (err) {
        console.log(err);
    }
}