import mongoose from "mongoose"
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  passowrd: String,
  gender: String,
  age: Number,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
});

const User = model('User', userSchema);
export default User;