// YourModel.js
import mongoose from 'mongoose';

// Define the schema for your data
const YourSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  reason: String,
});

// Create a model based on the schema
const YourModel = mongoose.model('YourModel', YourSchema);

export default YourModel;
