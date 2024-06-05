import { combineReducers } from "redux";

import getVoters from "./getVoters";
import getCandidates from "./getCandidates";
import addVoter from "./addVoter";
import addCandidate from "./addCandidate";
import addVote from "./addVote";

export default combineReducers({
    getVoters,
    getCandidates,
    addVoter,
    addCandidate,
    addVote
});
