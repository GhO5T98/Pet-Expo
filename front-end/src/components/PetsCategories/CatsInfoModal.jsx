import React from "react";
import { Box, Typography, Modal, Container } from "@mui/material";

const CatsInfoModal = ({ open, handleClose, selectedPet }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "#f2f2f2",
    border: "2px solid #c2e6f9",
    boxShadow: 22,
    padding: "1em 1.5em",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container sx={{ textAlign: "center" }}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            sx={{ color: "#111214", fontWeight: 600 }}
          >
            {selectedPet.name}
          </Typography>
        </Container>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <strong>Origin:</strong> {selectedPet.origin}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <strong>Temperament:</strong> {selectedPet.temperament}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <strong>Colors:</strong> {selectedPet.colors}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <strong>Description:</strong> {selectedPet.description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CatsInfoModal;
