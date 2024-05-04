const express = require('express');
const router = express.Router()
const User = require('./userModel');
const questions = require('./questions')


router.get('/questions', (req, res) => {
    res.json(questions)
});


router.post('/userResult', async (req, res) => {
    try {
        const { username, answers } = req.body;

        const totalScore = answers.reduce((acc, answer) => acc + (answer.isCorrect ? 1 : 0), 0);

        let user = await User.findOne({ username });
        if (!user) {
            user = new User({ username });
        }

        user.score = totalScore;

        user.answers = answers;

        await user.save();

        res.status(200).json({ message: "Resultat uppdaterat" });
    } catch (error) {
        console.error('Fel vid uppdatering av resultat:', error);
        res.status(500).json({ message: "Något gick fel" });
    }
});


router.get('/highestScores', async (req, res) => {
    try {
        
        const highestScorers = await User.find({}).sort({ score: -1 }).limit(5);

        res.status(200).json(highestScorers);
    } catch (error) {
        console.error('Fel vid hämtning av högsta poäng:', error);
        res.status(500).json({ message: "Något gick fel" });
    }
});

module.exports = router;