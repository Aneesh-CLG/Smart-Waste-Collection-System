const express = require("express");
const router = express.Router();
const Waste = require("../models/Waste");

// GET all records
router.get("/", async (req, res) => {
  const wastes = await Waste.find();
  res.json(wastes);
});

// POST new record
router.post("/", async (req, res) => {
  const { zone, collectionDate, vehicleId, wasteQuantity } = req.body;

  if (new Date(collectionDate) > new Date()) {
    return res.status(400).json({ message: "Date cannot be in the future" });
  }

  if (wasteQuantity <= 0) {
    return res.status(400).json({ message: "Waste quantity must be > 0" });
  }

  try {
    const newWaste = new Waste({ zone, collectionDate, vehicleId, wasteQuantity });
    await newWaste.save();
    res.status(201).json(newWaste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;