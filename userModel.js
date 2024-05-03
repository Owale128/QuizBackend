const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    answers: [
        {
            question: String,
            selectedOption: Number,
            isCorrect: Boolean
        }
    ]
});

const User = mongoose.model('User', userSchema, 'quizGame');

module.exports = User;