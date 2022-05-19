const rollDiceBtn = document.querySelector('#dice-roll');
const gif = document.querySelector('#dicegif');
const output = document.querySelector('.output')

const gifPop = () => {
    gif.style.visibility = 'visible';
    output.style.visibility = 'hidden';
    setTimeout(function () {(gif.style.visibility = 'hidden')}, 1000);
    setTimeout(rollDice, 1000);
    output.style.visibility = 'visible';


}

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

rollDiceBtn.addEventListener('click', gifPop) 

