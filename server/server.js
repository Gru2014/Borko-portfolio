const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer')
const mongoose = require('mongoose');
const UsersMsg = require('./UserModel');
require('dotenv').config({ path: './.env' });
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const uri = "mongodb://localhost:27017/message"
// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log('DB Connection Successfully');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// app.post('/user-message', async (req, res) => {
//   const { name, email, message } = req.body;
//   const emailRegex = /\S+@\S+\.\S+/;

//   // Validate the email format
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ error: 'Invalid email format' });
//   }

//   try {
//     // Create the user message object and save it to the database
//     await new UsersMsg({ name, email, message }).save();

//     // Respond to the client
//     res.status(201).json({
//       message: 'Your message was successfully sent',
//     });
//   } catch (error) {
//     // Handle database or other errors
//     console.error('Error saving user message:', error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while saving your message' });
//   }
// });

// app.post('/admin/login', (req, res) => {
//   const { username, password } = req.body;
//   // console.log('Received login request:', req.body);
//   // console.log(process.env.USERNAME, process.env.PASSWORD);

//   if (username === process.env.USERNAME && password === process.env.PASSWORD) {
//     console.log('Admin user logged in:', username);
//     res.status(201).json({ message: 'Admin User granted permissions' });
//   } else {
//     console.log('Invalid login attempt for user:', username);
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// app.get('/user-backend', async (req, res) => {
//   const userMessages = await UsersMsg.find();
//   // console.log(userMessages);
//   res.json(userMessages);
// });

// // DELETE route to delete a user by id
// app.delete('/delete-user/:id', async (req, res) => {
//   const idToDelete = req.params.id;
//   console.log(idToDelete);
//   // Find the index of the user with the given id
//   const deletedUser = await UsersMsg.findByIdAndDelete(idToDelete);

//   if (!deletedUser) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   // Remove the user from the users array
//   res.json({ message: 'User deleted', deletedUser });
// });
// const port = process.env.PORT || 5000
// app.listen(port, () => {
//   console.log(`Server Started on Port ${port}`);
// });

const port = process.env.PORT || 5000

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'jensendavid0511@gmail.com',
        pass: "It's my privacy david"
      }
    });
    
    const mailOptions = {
      from: 'jensendavid0511@gmail.com',
      to: 'jensendavid0511@gmail.com',
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    console.log(req.body)
    
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});