import React, { useEffect, useState } from "react";
import { Candidate } from "./candidate";
import { Voter } from "./voter";
import { VotingSelection } from "./votingSelection";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { connect } from "react-redux";
import  * as actionType from "../../redux/actions";

const VotingIndex = (props) => {
console.log(props);
    const { voterData, candidateData,addedVoter,addedCandidate, addedVote,actions } = props;

    let availableVoters =
        voterData != undefined
            ? voterData.filter((x) => x.hasVoted == false)
            : [];

    let showAllVotersCastedVoteMessage =
        voterData != undefined &&
        voterData.length > 0 &&
        voterData.every((x) => x.hasVoted == true);

    let canShowVotingSelection =
        candidateData != undefined &&
        candidateData.length > 0 &&
        availableVoters != undefined &&
        availableVoters.length > 0;

    useEffect(() => {
         actions.getVoters();
         actions.getCandidates();
    }, []);

    useEffect(() => {
        if (addedVoter) {
            actions.getVoters();
        } else if (addedCandidate) {
            actions.getCandidates();
        }
        else if (addedVote) {
             actions.getVoters();
             actions.getCandidates();
        }

    }, [addedVoter, addedCandidate, addedVote])

    const onVoterSubmit = async (voterName) => {
        if (voterName) {
            let newVoter = {
                name: voterName
            };

            actions.addVoter(newVoter);
            console.log('New Voter submitted.')
        }
    };

    const onCandidateSubmit = (candidateName) => {
        if (candidateName) {
            let newCandidate = {
                name: candidateName
            };
            actions.addCandidate(newCandidate);
            console.log('New Candidate submitted.')
        }
    };

    const onVotingSelectionSubmit = (voterId, candidateId) => {

        if (voterId > 0 && candidateId > 0) {
            let newVote = {
                voterId: voterId,
                candidateId: candidateId
            };

            actions.addVote(newVote);
            console.log('New Vote submitted.')
        }
    };

    return (
        <>
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <Voter voterData={voterData} onVoterSubmit={onVoterSubmit} />
                    </Grid>
                    <Grid item sm={6}>
                        <Candidate
                            candidateData={candidateData}
                            onCandidateSubmit={onCandidateSubmit}
                        />
                    </Grid>
                </Grid>
            </div>

            <div style={{ marginTop: 10 }}>
                {showAllVotersCastedVoteMessage && (
                    <Alert severity="warning">All voter(s) have already submitted their vote.</Alert>
                )}

                {!canShowVotingSelection && !showAllVotersCastedVoteMessage && (
                    <Alert severity="warning">
                        Voter or Candidate not found. Require at least one voter and candidate to make vote submission.
                    </Alert>
                )}

                {canShowVotingSelection && (
                    <div>
                        <div>
                            <h3>Votes!</h3>
                        </div>
                    <VotingSelection
                        voterData={availableVoters}
                        candidateData={candidateData}
                        onVotingSelectionSubmit={onVotingSelectionSubmit}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
const mapStateToProps = (state) => {
    console.log(state);
    return ({
        voterData: state.getVoters.voters,
        candidateData: state.getCandidates.candidates,
        addedVoter: state.addVoter.voter,
        addedCandidate: state.addCandidate.candidate,
        addedVote: state.addVote.vote
    })
};

 const mapDispatchToProps = (dispatch) => ({
     actions: {
         getVoters: () => {
             dispatch(actionType.getVoters());
         },
         getCandidates: () => {
             dispatch(actionType.getCandidates());
         },
         addVoter: (payload) => {
             dispatch(actionType.addVoter(payload));
         },
         addCandidate: (payload) => {
             dispatch(actionType.addCandidate(payload));
         },
         addVote: (payload) => {
             dispatch(actionType.addVote(payload));
         }
     }
 });

export default connect(mapStateToProps,mapDispatchToProps)(VotingIndex);
