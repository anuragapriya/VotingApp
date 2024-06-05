import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import api from "../../server/api";

export default function* getVotersSaga() {
    yield takeEvery(actionType.GET_VOTERS, fetchVoters);
}

function* fetchVoters() {
    try {
        const responseData = yield call(api.fetchVoterData);
        yield put({ type: actionType.GOT_VOTERS, payload: responseData });
    } catch (err) {
        console.log(err);
    }
}