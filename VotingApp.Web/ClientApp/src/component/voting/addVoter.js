import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddVoter({ ...props }) {
  const [voterName, setVoterName] = React.useState("");

  const handleVoterNameChange = (e) => {
    setVoterName(e.target.value);
  };

  const onVoterSubmit = (e) => {
    if (voterName) {
      props.onVoterSubmit(voterName);
      setVoterName("");
    }
    return false;
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Voter Registration
          </Typography>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="normal"
            size="small"
            required
            error={!voterName}
            helperText={!voterName ? "Voter Name required" : ""}
            onChange={(e) => handleVoterNameChange(e)}
          />
          <div style={{ marginTop: 10 }}>
            <Button
              align="center"
              variant="contained"
              size="small"
              onClick={() => {
                onVoterSubmit();
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
