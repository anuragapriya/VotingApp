export default {   
    fetchVoterData : async function () {
        try {
            const response = await fetch(`/api/voters/Get`);
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        } catch (error) {
            console.error('Error fetching voter data:', error);
        }
    },
     fetchCandidateData: async function () {
        try {
            const response = await fetch(`/api/candidates/Get`);
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        } catch (error) {
            console.error('Error fetching candidate data:', error);
        }
    },

     voterSubmit : async function (voterName) {
        if (voterName) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(voterName)
            };
            console.log(requestOptions);
            
            const response = await fetch(`/api/voters/post`, requestOptions);
            const jsondata = await response.json();
            console.log(jsondata);
            return jsondata;

            console.log('New Voter submitted.')
        }
    },

    candidateSubmit: async function (candidateName) {
        if (candidateName) {

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(candidateName)
            };

            const response = await fetch(`/api/candidates/post`, requestOptions);
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
            console.log('New Candidate submitted.')
        }
    },
    votingSelectionSubmit: async function (vote) {
        if (vote != null) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vote)
            };

            const response = await fetch(`/api/votes/post`, requestOptions);
            const jsonData = await response.json();
            return jsonData;
            console.log('New Vote submitted.')
        }
    }
}

