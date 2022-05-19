const rollDiceBtn = document.querySelector('#dice-roll');
const divs = document.querySelectorAll('#dicegif');

const rollDice = () => {
    axios.get("/api/rolldice")
    .then(res => {
        const data = res.data;
        document.getElementById('dice-roll-output').textContent = (`You rolled ${data[0]} and ${data[1]}!`);

        if(data[0] === data[1]){
            document.getElementById('fate').textContent = ("You rolled doubles! A broken clock is right twice a day...");
        } else if(data[0] !== data[1]){
            document.getElementById('fate').textContent = ("You didn't roll doubles... A fool and his life are soon parted...");
        }
    });
};

rollDiceBtn.addEventListener('click', function() {
    divs.style.visibility = 'visible';
    setTimeout((divs.style.visibility = 'hidden'), 1000);
})
