module.exports = {
    rollDice: (req, res) => {
        let rolls = []
        const throwdice1 =  Math.floor(Math.random() * 6) + 1;
        const throwdice2 =  Math.floor(Math.random() * 6) + 1;
        rolls.push(throwdice1, throwdice2)

        if(rolls[0] === rolls[1]){
            let message = "A broken clock is right twice a day..."
            res.status(200).send(rolls, message);
        } else if(rolls[0] !== rolls[1]){
            let message = "A fool and his life are soon parted..."
            res.status(200).send(rolls, message);
        }
    },
}
