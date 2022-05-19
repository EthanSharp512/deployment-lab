let equal = true;

module.exports = {
    rollDice: (req, res) => {
        const throwdice1 =  Math.floor(Math.random() * 6) + 1;
        const throwdice2 =  Math.floor(Math.random() * 6) + 1;
        let rolls = []
        rolls.push(throwdice1, throwdice2)
        if(rolls[0]===rolls[1]) {
            let equal = true;
        } else{
            let equal = false;
        }
        res.status(200).send(rolls);
    },
    diceMessage: (req, res) => {
        if(equal === true){
            res.status(200).send("You rolled doubles! A broken clock is right twice a day...");
        } else if(equal === false){
            res.status(200).send("You didn't roll doubles... A fool and his life are soon parted...");
        }
    }
}
