const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
  zone: { type: String, required: true },
  collectionDate: { type: Date, required: true },
  vehicleId: { type: String, required: true },
  wasteQuantity: { type: Number, required: true, min: 1 },
});

module.exports = mongoose.model("Waste", wasteSchema);