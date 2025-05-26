const User = require('../models/User');
const Thought = require('../models/Thought');

const getUsers = async (req, res) => {
    try {
      const users = await User.find().populate('friends').populate('thoughts');
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  };

  const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.userId)
        .populate('friends')
        .populate('thoughts');
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  const updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      // Also delete all thoughts associated with this user
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
  
      res.json({ message: 'User and thoughts deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  };
  
  const addFriend = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const removeFriend = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  };


  