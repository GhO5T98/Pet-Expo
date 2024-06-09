import React, { useState } from "react";
import { Box, Typography, Container, TextField, Divider } from "@mui/material";
import DogModal from "./DogsInfoModal";
import CatModal from "./CatsInfoModal";
import BirdModal from "./BirdsInfoModal";
import PetSection from "./PetsSections";

const PetCat = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <>
      <Box mt={9}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
              fontWeight: "600",
              mt: "1em",
            }}
          >
            Explore Our Lovely Pets
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            margin="normal"
            onChange={handleSearchChange}
            sx={{
              borderRadius: "0",
              width: { xs: "80%", sm: "90%", md: "100%" },
            }}
          />
        </Container>

        <Container sx={{ mt: "2em" }}>
          <PetSection
            apiUrl="http://localhost:5000/pets?kind=Dog"
            title="Dog"
            searchTerm={searchTerm}
            ModalComponent={DogModal}
          />
        </Container>

        <Container>
          <PetSection
            apiUrl="http://localhost:5000/pets?kind=Cat"
            title="Cat"
            searchTerm={searchTerm}
            ModalComponent={CatModal}
          />
        </Container>

        <Container>
          <PetSection
            apiUrl="http://localhost:5000/pets?kind=Bird"
            title="Bird"
            searchTerm={searchTerm}
            ModalComponent={BirdModal}
          />
        </Container>
      </Box>
    </>
  );
};

export default PetCat;
