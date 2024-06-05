import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";

export default function* getCandidatesSaga() {
    yield takeEvery(actionType.GET_CANDIDATES, fetchCandidates);
}

function* fetchCandidates() {
    try {
        const responseData = yield call(postsblogPostApi.fetchCandidateData);
        yield put({ type: actionType.GOT_CANDIDATES, payload: responseData });
    } catch (err) {
        console.log(err);
    }
}