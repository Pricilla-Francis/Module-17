const Thought = require('../models/Thought');
const User = require('../models/User');

const getThoughts = async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const getThoughtById = async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const createThought = async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
  
      await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );
  
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const updateThought = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
  
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const deleteThought = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
  
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
  
      await User.findByIdAndUpdate(
        thought.userId,
        { $pull: { thoughts: thought._id } },
        { new: true }
      );
  
      res.json({ message: 'Thought deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const addReaction = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true, runValidators: true }
      );
  
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
  
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const removeReaction = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
  
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
  
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  module.exports = {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
  };
  