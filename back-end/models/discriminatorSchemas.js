const mongoose = require("mongoose");
const Pet = require("./petType");

// Cat Schema
const catSchema = new mongoose.Schema({
  origin: { type: String },
  temperament: { type: String },
  colors: { type: String },
});

const Cat = Pet.discriminator("Cat", catSchema);

// Dog Schema
const dogSchema = new mongoose.Schema({
  breed_group: { type: String },
  size: { type: String },
  lifespan: { type: String },
  origin: { type: String },
  temperament: { type: String },
  colors: { type: String },
});

const Dog = Pet.discriminator("Dog", dogSchema);

// Bird Schema
const birdSchema = new mongoose.Schema({
  species: { type: String },
  family: { type: String },
  habitat: { type: String },
  place_of_found: { type: String },
  diet: { type: String },
  weight_kg: { type: Number },
  height_cm: { type: Number },
});

const Bird = Pet.discriminator("Bird", birdSchema);

module.exports = { Cat, Dog, Bird };
