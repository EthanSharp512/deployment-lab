const rollDiceBtn = document.querySelector('#dice-roll');
const divs = document.querySelectorAll('#dicegif');
const currentImage = 0;

rollDiceBtn.addEventListener('click', function(){
    button.style.display = 'inline';
    divs[currentImage].style.display = 'block';
    setTimeout(hide, 1000);
});

function hide() {
    button.style.display = 'block';
    divs[currentImage].style.display = 'none';
    currentImage = (currentImage + 1) % divs.length;
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

rollDiceBtn.addEventListener('click', setTimeout(rollDice, 1000))
