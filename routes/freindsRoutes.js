const express = require('express');
const friendRouter = express.Router();
const Freind = require('../models/freinds');

// Create new friend
friendRouter.post('/friend/post', async (req, res) => {
  try {
    const newFreind = new Freind(req.body);
    const savedFreind = await newFreind.save();
    res.status(201).json(savedFreind);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all friends
friendRouter.get('/friend/showAll', async (req, res) => {
  try {
    const Freinds = await Freind.find();
    res.json(Freinds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get friend by ID
friendRouter.get('/friend/:id', async (req, res) => {
  try {
    const Freind = await Freind.findById(req.params.id);
    if (!Freind) return res.status(404).json({ message: 'Freind not found' });
    res.json(Freind);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update friend
friendRouter.put('/friend/:id', async (req, res) => {
  try {
    const updated = await Freind.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Freind not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete freind
friendRouter.delete('/friend/:id', async (req, res) => {
  try {
    const deleted = await Freind.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Freind not found' });
    res.json({ message: 'Freind deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = friendRouter;
