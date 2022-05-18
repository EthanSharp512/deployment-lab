const rollDiceBtn = document.querySelector('#dice-roll');


const rollDice = () => {
    axios.get("http://localhost:4000/api/rolldice/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

rollDiceBtn.addEventListener('click', rollDice)