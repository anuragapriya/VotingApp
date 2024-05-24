import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export function VotingSelection({ ...props }) {
  const [selectedVoterId, setSelectedVoterId] = React.useState("");
  const [selectedCandidateId, setSelectedCandidateId] = React.useState("");
  const [showValidationMessage, setShowValidationMessage] =
    React.useState(false);

  const handleVoterSelectionChange = (event) => {
    setSelectedVoterId(event.target.value);
    setShowValidationMessage(false);
  };

  const handleCandidateSelectionChange = (event) => {
    setSelectedCandidateId(event.target.value);
    setShowValidationMessage(false);
  };

  const onVotingSelectionSubmit = (e) => {
    console.log("selectedVoterIdk - " + selectedVoterId);
    const voterId = parseInt(selectedVoterId);
    const candidateId = parseInt(selectedCandidateId);
    let isValidSelection = !isNaN(voterId) && !isNaN(candidateId);

    if (isValidSelection) {
      props.onVotingSelectionSubmit(voterId, candidateId);
      setSelectedVoterId("");
      setSelectedCandidateId("");
      setShowValidationMessage(false);
    } else {
      setShowValidationMessage(true);
    }
  };

  return (
    <Stack spacing={4} direction="row">
      <div className="column">
        <Box sx={{ minWidth: 120, height: 20 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Voter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedVoterId}
              onChange={handleVoterSelectionChange}
            >
              {props.voterData.map((row) => (
                <MenuItem value={row.id}>{row.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="column">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">
              Candidate
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCandidateId}
              onChange={handleCandidateSelectionChange}
            >
              {props.candidateData.map((row) => (
                <MenuItem value={row.id}>{row.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          align="center"
          variant="contained"
          size="medium"
          onClick={() => {
            onVotingSelectionSubmit();
          }}
        >
          Submit
        </Button>
      </div>
      {showValidationMessage && (
        <Alert severity="error">
          Both voter and candidate should be selected to make a vote submission
        </Alert>
      )}
    </Stack>
  );
}
