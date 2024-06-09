const express = require("express");
const multer = require("multer");
const cloudinary = require("../cloudinaryConfig");
const { Cat, Dog, Bird } = require("../models/discriminatorSchemas");
const Pet = require("../models/petType");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Middleware to parse JSON bodies
router.use(express.json());

// Create a new pet with image upload
router.post("/pets", upload.single("image"), async (req, res) => {
  const { kind, ...petData } = req.body;
  console.log(petData);
  let newPet;
  //Cloudinary image upload.
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "Pets",
      });
      petData.image = result.secure_url;
    }

    switch (kind) {
      case "Cat":
        newPet = new Cat(petData);
        break;
      case "Dog":
        newPet = new Dog(petData);
        break;
      case "Bird":
        newPet = new Bird(petData);
        break;
      default:
        return res.status(400).json({ error: "Invalid pet kind" });
    }
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all pets
router.get("/pets", async (req, res) => {
  const { kind } = req.query;

  try {
    let pets;
    if (kind) {
      pets = await Pet.find({
        kind: kind.charAt(0).toUpperCase() + kind.slice(1),
      });
    } else {
      pets = await Pet.find();
    }
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific pet by ID
router.get("/pets/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet not found" });
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a pet with optional image upload
router.put("/pets/:id", upload.single("image"), async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: "Pet not found" });

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      req.body.image = result.secure_url;
    }

    Object.assign(pet, req.body);
    const updatedPet = await pet.save();
    res.json(updatedPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a pet
router.delete("/pets/:id", async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) return res.status(404).json({ error: "Pet not found" });
    res.json({ message: "Pet deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
