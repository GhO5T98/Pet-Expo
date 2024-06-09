const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
  },
  { discriminatorKey: "kind" }
);

module.exports = mongoose.model("Pet", petSchema);
