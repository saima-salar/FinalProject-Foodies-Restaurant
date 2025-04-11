// import app from "./app.js";

// app.listen(process.env.PORT, ()=>{
//     console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
// })

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Ensure the app can parse JSON requests

// POST route example
app.post('/data', (req, res) => {
  console.log(req.body); // Logs the posted data
  res.status(200).json({ message: 'Data received', data: req.body });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
