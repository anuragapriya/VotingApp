import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCandidate from "./addCandidate";
import { green, grey } from "@mui/material/colors";
import { AddCircle } from "@mui/icons-material";

export function Candidate({ ...props }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onCandidateSubmit = (candidateName) => {
    if (candidateName) {
      handleClose();
      props.onCandidateSubmit(candidateName);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: grey[900] }}>
            <TableCell align="right" sx={{ color: "white" }}>
              Candidate(s)
            </TableCell>
            <TableCell align="right">
              <AddCircle
                fontSize="medium"
                style={{ cursor: "pointer" }}
                sx={{ color: green[700] }}
                onClick={() => {
                  handleOpen();
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ bgcolor: grey[300] }}>
              Name
            </TableCell>
            <TableCell align="center" sx={{ bgcolor: grey[300] }}>
              Votes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.candidateData && (props.candidateData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.voteCount}</TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
      <AddCandidate
        open={open}
        handleClose={handleClose}
        onCandidateSubmit={onCandidateSubmit}
      />
    </TableContainer>
  );
}
