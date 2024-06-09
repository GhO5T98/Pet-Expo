import React, { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import usePets from "../hooks/usePet";
import DashCard from "./DashCard";
import PetAddForm from "./PetAddForm";
import DashTable from "./DashTable";
import DashDrawer from "./DashDrawer";
import PetDeleteDialog from "./PetDeleteDialog";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const drawerWidth = 200;
  const { pets, loading, error, petCounts, setPets, setPetCounts } = usePets();
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    description: "",
    imageFile: null,
    kind: "",
    //Birds//
    species: "",
    family: "",
    habitat: "",
    place_of_found: "",
    diet: "",
    weight_kg: 0,
    height_cm: 0,
    //Dogs + Cats//
    breed_group: "",
    size: "",
    lifespan: "",
    origin: "",
    temperament: "",
    colors: "",
  });
  const [currentPetId, setCurrentPetId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [petToDelete, setPetToDelete] = useState(null);

  const { admin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/Login");
    }
  }, [admin, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsEdit(false);
    setNewPet({
      name: "",
      description: "",
      imageFile: null, // Update this line
      kind: "",
      //Birds//
      species: "",
      family: "",
      habitat: "",
      place_of_found: "",
      diet: "",
      weight_kg: 0,
      height_cm: 0,
      //Dogs + Cats//
      breed_group: "",
      size: "",
      lifespan: "",
      origin: "",
      temperament: "",
      colors: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPet({ ...newPet, imageFile: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newPet.name);
    formData.append("description", newPet.description);
    formData.append("kind", newPet.kind);
    //Birds//
    formData.append("species", newPet.species);
    formData.append("family", newPet.family);
    formData.append("habitat", newPet.habitat);
    formData.append("place_of_found", newPet.place_of_found);
    formData.append("diet", newPet.diet);
    formData.append("weight_kg", newPet.weight_kg);
    formData.append("height_cm", newPet.height_cm);
    //Dogs + Cats//
    formData.append("breed_group", newPet.breed_group);
    formData.append("size", newPet.size);
    formData.append("lifespan", newPet.lifespan);
    formData.append("origin", newPet.origin);
    formData.append("temperament", newPet.temperament);
    formData.append("colors", newPet.colors);
    if (newPet.imageFile) {
      formData.append("image", newPet.imageFile);
    }

    if (isEdit) {
      try {
        const originalPet = pets.find((pet) => pet._id === currentPetId);
        if (originalPet.kind !== newPet.kind) {
          // Delete the old pet
          await axios.delete(`http://localhost:5000/pets/${currentPetId}`);

          // Create a new pet with the updated kind
          const response = await axios.post(
            "http://localhost:5000/pets",
            formData
          );
          const addedPet = response.data;

          setPets([
            ...pets.filter((pet) => pet._id !== currentPetId),
            addedPet,
          ]);
          setPetCounts((prevCounts) => {
            const newCounts = { ...prevCounts };
            if (originalPet.kind === "Cat") newCounts.cats -= 1;
            if (originalPet.kind === "Dog") newCounts.dogs -= 1;
            if (originalPet.kind === "Bird") newCounts.birds -= 1;
            if (addedPet.kind === "Cat") newCounts.cats += 1;
            if (addedPet.kind === "Dog") newCounts.dogs += 1;
            if (addedPet.kind === "Bird") newCounts.birds += 1;
            return newCounts;
          });
        } else {
          // Update the existing pet
          const response = await axios.put(
            `http://localhost:5000/pets/${currentPetId}`,
            formData
          );
          const updatedPet = response.data;
          setPets(
            pets.map((pet) => (pet._id === currentPetId ? updatedPet : pet))
          );
        }
        handleCloseModal();
      } catch (error) {
        console.error("Error updating pet:", error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/pets",
          formData
        );
        const addedPet = response.data;
        setPets([...pets, addedPet]);
        setPetCounts((prevCounts) => {
          const newCounts = { ...prevCounts };
          if (addedPet.kind === "Cat") newCounts.cats += 1;
          if (addedPet.kind === "Dog") newCounts.dogs += 1;
          if (addedPet.kind === "Bird") newCounts.birds += 1;
          return newCounts;
        });
        handleCloseModal();
      } catch (error) {
        console.error("Error adding pet:", error);
      }
    }
  };

  const handleEdit = (pet) => {
    setNewPet({
      ...pet,
      imageFile: null, // Reset imageFile when editing
    });
    setCurrentPetId(pet._id);
    setIsEdit(true);
    handleOpenModal();
  };

  const handleOpenDeleteDialog = (petId) => {
    setPetToDelete(petId);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setPetToDelete(null);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/pets/${petToDelete}`);
      setPets(pets.filter((pet) => pet._id !== petToDelete));
      setPetCounts((prevCounts) => {
        const pet = pets.find((pet) => pet._id === petToDelete);
        const newCounts = { ...prevCounts };
        if (pet.kind === "Cat") newCounts.cats -= 1;
        if (pet.kind === "Dog") newCounts.dogs -= 1;
        if (pet.kind === "Bird") newCounts.birds -= 1;
        return newCounts;
      });
      handleCloseDeleteDialog();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading data</Typography>;

  return (
    <Box sx={{ display: "flex", bgcolor: "#151515", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          bgcolor: "#151515",
          zIndex: "1",
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "#272829",
            display: "flex",
            justifyContent: "center",

            gap: 2,
            ml: { sx: 10, sm: "10em", md: "10em" },
          }}
        >
          <PetsIcon sx={{ fontSize: "2rem", transform: "rotate(-25deg)" }} />
          <Typography variant="h5" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <DashDrawer handleLogout={handleLogout} drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          bgcolor: "#151515",
          color: "#ffffff",
          mt: 3,
        }}
      >
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <DashCard title="Total Cats" count={petCounts.cats} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <DashCard title="Total Dogs" count={petCounts.dogs} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <DashCard title="Total Birds" count={petCounts.birds} />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              mb: 2,
              backgroundColor: "#272829",
              color: "#f2f2f2",
              fontWeight: "600",
              textTransform: "capitalize",
              border: "1px solid #f2f2f2",
              "&:hover": {
                backgroundColor: "#f2f2f2",
                color: "#272829",
              },
            }}
          >
            Add Pet
          </Button>
          <DashTable
            pets={pets}
            onEdit={handleEdit}
            onDelete={handleOpenDeleteDialog}
          />
        </Box>
      </Box>
      <PetAddForm
        open={modalOpen}
        handleClose={handleCloseModal}
        newPet={newPet}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        isEdit={isEdit}
      />
      <PetDeleteDialog
        open={deleteDialogOpen}
        handleClose={() => setDeleteDialogOpen(false)}
        handleDelete={handleDelete}
      />
    </Box>
  );
};

export default Dashboard;
