const express = require('express');
const pubRouter = express.Router();
const Publication = require('../models/publications');

// Create new pub
pubRouter.post('/pub/post', async (req, res) => {
  try {
    const newFreind = new Publication(req.body);
    const savedFreind = await newFreind.save();
    res.status(201).json(savedFreind);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all pubs
pubRouter.get('/pub/showAll', async (req, res) => {
  try {
    const Freinds = await Publication.find();
    res.json(Freinds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get pub by ID
pubRouter.get('/pub/:id', async (req, res) => {
  try {
    const Publication = await Publication.findById(req.params.id);
    if (!Publication) return res.status(404).json({ message: 'Publication not found' });
    res.json(Publication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update pub
pubRouter.put('/pub/:id', async (req, res) => {
  try {
    const updated = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Publication not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete freind
pubRouter.delete('/pub/:id', async (req, res) => {
  try {
    const deleted = await Publication.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Publication not found' });
    res.json({ message: 'Publication deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = pubRouter;
