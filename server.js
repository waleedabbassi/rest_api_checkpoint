const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// Load environment variables
dotenv.config({ path: './config/.env' });


// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    console.log('Connected to the database');
    })
    .catch((error) => {
    console.error('Error connecting to the database:', error);
    });


// Create an Express app
const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Middleware to parse JSON bodies
app.use(express.json());


// GET route to return all users
app.get('/users', async (req, res) => {
    try {
    const users = await User.find();
    res.json(users);
    } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' });
    }
});


/*

// POST route to add a new user

app.post('/users', async (req, res) => {
    try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
    } catch (error) {
    res.status(500).json({ error: 'Error adding user' });
    }
});
*/


/*
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
    } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
    }
});
*/

/*
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const {name,age,favoriteFoods} = req.body;
    try {
      const user = await User.findByIdAndUpdate(id,{name,age,favoriteFoods}, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' });
    }
  });

  
*/
  app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' });
    }
  });



/*

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User removed successfully' });
    } catch (error) {
    res.status(500).json({ error: 'Error removing user' });
    }
});
*/
