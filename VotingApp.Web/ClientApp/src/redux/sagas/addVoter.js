import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";

export default function* addVoterSaga() {
    yield takeEvery(actionType.ADD_VOTER, addVoter);
}

function* addVoter(action) {
    console.log(action)
    try {
        const responseData = yield call(postsblogPostApi.voterSubmit, action.payload);
        yield put({ type: actionType.ADDED_VOTER, payload: responseData });

    } catch (err) {
        console.log(err);
    }
}