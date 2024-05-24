import React, { useEffect, useState } from "react";
import { Candidate } from "./candidate";
import { Voter } from "./voter";
import { VotingSelection } from "./votingSelection";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

export function VotingIndex() {
    const [candidateData, saveCandidateData] = useState([]);
    const [voterData, saveVoterData] = useState([]);

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

    const fetchVoterData = async () => {
        try {
            const response = await fetch(`/api/voters/Get`);
            const jsonData = await response.json();
            console.log(jsonData);
            saveVoterData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchCandidateData = async () => {
        try {
            const response = await fetch(`/api/candidates/Get`);
            const jsonData = await response.json();
            console.log(jsonData);
            saveCandidateData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchVoterData();
        fetchCandidateData();
    }, []);

    const onVoterSubmit = async (voterName) => {
        if (voterName) {
            let newVoter = {
                name: voterName
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newVoter)
            };

            fetch(`/api/voters/post`, requestOptions)
                .then(response => response.json())
                .finally(() => fetchVoterData());
            console.log('New Voter submitted.')
        }
    };

    const onCandidateSubmit = (candidateName) => {
        if (candidateName) {
            let newCandidate = {
                name: candidateName
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCandidate)
            };

            fetch(`/api/candidates/post`, requestOptions)
                .then(response => response.json())
                .finally(() => fetchCandidateData());
            console.log('New Candidate submitted.')
        }
    };

    const onVotingSelectionSubmit = (voterId, candidateId) => {

        if (voterId > 0 && candidateId > 0) {
            let newVote = {
                voterId: voterId,
                candidateId: candidateId
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newVote)
            };

            fetch(`/api/votes/post`, requestOptions)
                .then(response => response.json())
                .finally(() => { fetchVoterData(); fetchCandidateData(); });
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
}
