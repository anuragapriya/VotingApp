import {
    GET_VOTERS,
    GET_CANDIDATES,
    ADD_VOTE,
    ADD_VOTER,
    ADD_CANDIDATE
} from "./actionTypes";

export const getVoters = () => {
    return {
        type: GET_VOTERS,
    };
};

export const getCandidates = () => {
    return {
        type: GET_CANDIDATES,
    };
};
export const addVoter = (data) => {
    return {
        type: ADD_VOTER, payload: data
    };
};

export const addCandidate = (data) => {
    return {
        type: ADD_CANDIDATE, payload: data
    };
};

export const addVote = (data) => {
    return {
        type: ADD_VOTE, payload: data
    };
};
