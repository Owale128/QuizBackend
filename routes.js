const express = require('express');
const router = express.Router()
const User = require('./userModel');
const questions = require('./questions')


router.get('/questions', (req, res) => {
    res.json(questions)
});


router.post('/userResult', async (req, res) => {
    try {
        const { username, score, answers } = req.body;

        let user = await User.findOne({ username });
        if (!user) {
            user = new User({ username });
        }

        user.score = score;

        user.answers = answers;

        await user.save();

        res.status(200).json({ message: "Resultat uppdaterat" });
    } catch (error) {
        console.error('Fel vid uppdatering av resultat:', error);
        res.status(500).json({ message: "Något gick fel" });
    }
});

module.exports = router;