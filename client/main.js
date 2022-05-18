const rollDiceBtn = document.querySelector('#dice-roll');
const rollDiceInput = document.getElementById()


const rollDice = () => {
    axios.get("https://f22deploymentlab.herokuapp.com/api/rolldice")
    .then(res => {
        const data = res.data;
        document.getElementById('dice-roll-output').textContent = data;
    });
};


rollDiceBtn.addEventListener('click', rollDice)