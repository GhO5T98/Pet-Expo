import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import "./dashStyle.scss";

const PetDeleteDialog = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog className="custom-dialog" open={open} onClose={handleClose}>
      <DialogTitle className="custom-dialog__title">Delete Pet</DialogTitle>
      <DialogContent>
        <DialogContentText className="custom-dialog__content">
          Are you sure you want to delete this pet? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ backgroundColor: "#272829", color: "#f2f2f2" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          sx={{
            backgroundColor: "#FE0000",
            color: "#f2f2f2",
            "&:hover": {
              backgroundColor: "#f2f2f2",
              color: "#fe0000",
            },
          }}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PetDeleteDialog;
