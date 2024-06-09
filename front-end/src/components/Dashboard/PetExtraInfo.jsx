import React from "react";
import { TextField } from "@mui/material";

const PetExtraInfo = ({ newPet, handleInputChange }) => {
  return (
    <>
      {newPet.kind === "Bird" && (
        <>
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="species"
            label="Species"
            type="text"
            fullWidth
            value={newPet.species || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="family"
            label="Family"
            type="text"
            fullWidth
            value={newPet.family || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="habitat"
            label="Habitat"
            type="text"
            fullWidth
            value={newPet.habitat || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="place_of_found"
            label="Place Of Found"
            type="text"
            fullWidth
            value={newPet.place_of_found || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="diet"
            label="Diet"
            type="text"
            fullWidth
            value={newPet.diet || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="weight_kg"
            label="Weight(kg)"
            type="number"
            fullWidth
            value={newPet.weight_kg || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="height_cm"
            label="Height(cm)"
            type="number"
            fullWidth
            value={newPet.height_cm || ""}
            onChange={handleInputChange}
          />
        </>
      )}

      {newPet.kind === "Dog" && (
        <>
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="breed_group"
            label="Breed Group"
            type="text"
            fullWidth
            value={newPet.breed_group || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="size"
            label="Size"
            type="text"
            fullWidth
            value={newPet.size || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="lifespan"
            label="Lifespan"
            type="text"
            fullWidth
            value={newPet.lifespan || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="origin"
            label="Origin"
            type="text"
            fullWidth
            value={newPet.origin || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="temperament"
            label="Temperament"
            type="text"
            fullWidth
            value={newPet.temperament || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="colors"
            label="Colors"
            type="text"
            fullWidth
            value={newPet.colors || ""}
            onChange={handleInputChange}
          />
        </>
      )}
      {newPet.kind === "Cat" && (
        <>
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="origin"
            label="Origin"
            type="text"
            fullWidth
            value={newPet.origin || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="temperament"
            label="Temperament"
            type="text"
            fullWidth
            value={newPet.temperament || ""}
            onChange={handleInputChange}
          />
          <TextField
            className="custom-dialog__textfield"
            variant="filled"
            margin="dense"
            name="colors"
            label="Colors"
            type="text"
            fullWidth
            value={newPet.colors || ""}
            onChange={handleInputChange}
          />
        </>
      )}
    </>
  );
};

export default PetExtraInfo;
