const express = require('express');
const router = express.Router();
const { Batch } = require('../models');

// List all batches
router.get('/', async (req, res) => {
  const batches = await Batch.findAll();
  res.render('batches/index', { batches });
});

// New batch form
router.get('/new', (req, res) => {
  res.render('batches/new');
});

// Create batch
router.post('/', async (req, res) => {
  await Batch.create(req.body);
  res.redirect('/batches');
});

// Edit batch form
router.get('/:id/edit', async (req, res) => {
  const batch = await Batch.findByPk(req.params.id);
  res.render('batches/edit', { batch });
});

// Update batch
router.put('/:id', async (req, res) => {
  const batch = await Batch.findByPk(req.params.id);
  await batch.update(req.body);
  res.redirect('/batches');
});

// Delete batch
router.delete('/:id', async (req, res) => {
  const batch = await Batch.findByPk(req.params.id);
  await batch.destroy();
  res.redirect('/batches');
});

module.exports = router;