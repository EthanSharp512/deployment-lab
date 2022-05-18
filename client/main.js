const rollDiceBtn = document.querySelector('#dice-roll');


const rollDice = () => {
    axios.get("/api/rolldice")
    .then(res => {
        const data = res.data;
        console.log(res.data)
        document.getElementById('dice-roll-output').textContent = data.value;
    });
};


rollDiceBtn.addEventListener('click', rollDice)