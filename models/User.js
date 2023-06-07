const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
age: {
    type: Number
},
favoriteFoods: {
    type: [String]
}
});

const User = mongoose.model('User', userSchema);
/*
// Create a new person instance
const user = new User({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
});

*/

module.exports = User;