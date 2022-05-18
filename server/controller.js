module.exports = {
    rollDice: (req, res) => {
        let rolls = []
        const throwdice1 =  (Math.random() * 6) + 1;
        const throwdice2 =  (Math.random() * 6) + 1;
        rolls.push(throwdice1, throwdice2)
        res.status(200).send(rolls);
    },
}
