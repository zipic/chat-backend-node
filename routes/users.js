const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../model/Users');

router.use(bodyParser.json());

router.use(cors);

router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const existingUser = await User.findOne({ where: { name } });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this name already exists' });
    }

    const newUser = await User.create({ name });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/:name', async (req, res) => {
  const name = req.params.name;

  try {
    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/chat', async(req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
    
  } catch(error) {
    console.log('Error processing GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
