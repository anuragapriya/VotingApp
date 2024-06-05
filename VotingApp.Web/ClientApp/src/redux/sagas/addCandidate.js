import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";

export default function* addCandidateSaga() {
    yield takeEvery(actionType.ADD_CANDIDATE, addCandidate);
}

function* addCandidate(action) {
    console.log(action)
    try {
        const responseData = yield call(postsblogPostApi.candidateSubmit, action.payload);
        yield put({ type: actionType.ADDED_CANDIDATE, payload: responseData });

    } catch (err) {
        console.log(err);
    }
}