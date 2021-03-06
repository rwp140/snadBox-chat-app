//imports
const mongoose = require('mongoose');

//schema
const profileSchema = new mongoose.Schema({
  name: String,
  ProfileID: String,
  IconIMG: String,
  chats:[String]
}, {});

//export
const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;
