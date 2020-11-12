const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos el modelo User

const User = mongoose.model('User', userSchema);

module.exports = User;