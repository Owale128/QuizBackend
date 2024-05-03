const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, { 
            dbName: 'Quiz',
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log('Connected to MongoDB');
    } catch (error) {
         console.error('Could not connect to MongoDB:', error);
        }
    };
        module.exports = connectDB;