// appform.js
import express from 'express';
const router = express.Router();
import YourModel from '../YourModel.js';

// Handle POST request to /api/v1/appform
router.post('/', async (req, res) => {
    console.log("inside mongo appform");
    console.log("req body is"+JSON.stringify(req.body));
  try {
    // Create a new instance of YourModel using data from the request body
    const newData = new YourModel({
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
      reason: req.body.reason,
    });

    // Save the new data to the database
    await newData.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data' });
  }
});

export default router;
