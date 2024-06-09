import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

import PetExtraInfo from "./PetExtraInfo";
import "./dashStyle.scss";

const PetAddForm = ({
  open,
  handleClose,
  newPet,
  handleInputChange,
  handleFileChange,
  handleSubmit,
  isEdit,
}) => {
  return (
    <Dialog className="custom-dialog" open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <DialogTitle className="custom-dialog__title">
          {isEdit ? "Edit Pet" : "Add Pet"}
        </DialogTitle>
        <DialogContent>
          <TextField
            className="custom-dialog__textfield"
            margin="dense"
            name="name"
            label="Name"
            type="text"
            variant="filled"
            fullWidth
            value={newPet.name}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            margin="dense"
            name="description"
            label="Description"
            variant="filled"
            type="text"
            multiline
            rows={3}
            fullWidth
            value={newPet.description}
            onChange={handleInputChange}
          />
          <FormControl
            fullWidth
            margin="dense"
            className="custom-dialog__textfield"
            variant="filled"
          >
            <InputLabel>Kind</InputLabel>
            <Select
              name="kind"
              value={newPet.kind}
              onChange={handleInputChange}
            >
              <MenuItem value="Cat">Cat</MenuItem>
              <MenuItem value="Dog">Dog</MenuItem>
              <MenuItem value="Bird">Bird</MenuItem>
            </Select>
          </FormControl>

          <PetExtraInfo newPet={newPet} handleInputChange={handleInputChange} />
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              marginTop: "16px",
              color: "#f2f2f2",
            }}
          />
        </DialogContent>
        <DialogActions className="custom-dialog__actions">
          <Button
            sx={{ backgroundColor: "#272829", color: "#f2f2f2" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: "#0A6847",
              color: "#f2f2f2",
              "&:hover": {
                backgroundColor: "#f2f2f2",
                color: "#0A6847",
              },
            }}
          >
            {isEdit ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PetAddForm;
