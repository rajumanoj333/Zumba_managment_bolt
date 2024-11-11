const express = require('express');
const router = express.Router();
const { Participant, Batch } = require('../models');

// List all participants
router.get('/', async (req, res) => {
  const participants = await Participant.findAll({ include: Batch });
  res.render('participants/index', { participants });
});

// New participant form
router.get('/new', async (req, res) => {
  const batches = await Batch.findAll();
  res.render('participants/new', { batches });
});

// Create participant
router.post('/', async (req, res) => {
  await Participant.create(req.body);
  res.redirect('/participants');
});

// Edit participant form
router.get('/:id/edit', async (req, res) => {
  const participant = await Participant.findByPk(req.params.id);
  const batches = await Batch.findAll();
  res.render('participants/edit', { participant, batches });
});

// Update participant
router.put('/:id', async (req, res) => {
  const participant = await Participant.findByPk(req.params.id);
  await participant.update(req.body);
  res.redirect('/participants');
});

// Delete participant
router.delete('/:id', async (req, res) => {
  const participant = await Participant.findByPk(req.params.id);
  await participant.destroy();
  res.redirect('/participants');
});

module.exports = router;