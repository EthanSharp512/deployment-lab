const rollDiceBtn = document.querySelector('#dice-roll');


const rollDice = () => {
    axios.get("/api/rolldice")
    .then(res => {
        const data = res.data;
        console.log(res.data)
        document.getElementById('dice-roll-output').textContent = (`You rolled ${data[0]} and ${data[1]}!`);
    });
};

const diceMessage = () => {
    axios.get("/api/rolldice")
    .then(res => {
        const data = res.data;
        console.log(res.data)
        document.getElementById('fate').textContent = data;
    });
};

rollDiceBtn.addEventListener('click', rollDice, diceMessage)
