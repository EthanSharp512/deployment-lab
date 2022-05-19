module.exports = {
    rollDice: (req, res) => {
        const throwdice1 =  Math.floor(Math.random() * 6) + 1;
        const throwdice2 =  Math.floor(Math.random() * 6) + 1;
        let rolls = []
        rolls.push(throwdice1, throwdice2)
        res.status(200).send(rolls);
    }
}