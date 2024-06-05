import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { green, grey, red } from "@mui/material/colors";
import {
  ThumbUpOffAltRounded,
  ThumbDownOffAltRounded,
  AddCircle,
} from "@mui/icons-material";
import AddVoter from "./addVoter";

export function Voter({ ...props }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onVoterSubmit = (voterName) => {
    if (voterName) {
      handleClose();
      props.onVoterSubmit(voterName);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: grey[900] }}>
            <TableCell align="right" sx={{ color: "white" }}>
              Voter(s)
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
              Has Voted
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.voterData && (props.voterData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                {row.hasVoted == true ? (
                  <ThumbUpOffAltRounded
                    fontSize="small"
                    sx={{ color: green[500] }}
                  />
                ) : (
                  <ThumbDownOffAltRounded
                    fontSize="small"
                    sx={{ color: red[500] }}
                  />
                )}
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
      <AddVoter
        open={open}
        handleClose={handleClose}
        onVoterSubmit={onVoterSubmit}
      />
    </TableContainer>
  );
}
