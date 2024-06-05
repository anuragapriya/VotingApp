import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import {configureStore} from "@reduxjs/toolkit";

import { getVotersSaga,getCandidatesSaga,addVoterSaga,addCandidateSaga,addVoteSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
  })

sagaMiddleware.run(getVotersSaga);
sagaMiddleware.run(getCandidatesSaga);
sagaMiddleware.run(addCandidateSaga);
sagaMiddleware.run(addVoterSaga);
sagaMiddleware.run(addVoteSaga);