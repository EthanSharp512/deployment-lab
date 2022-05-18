const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');


colorBtn.addEventListener('click', () => {
    alert('Black is my favorite color.')
})




const throwdice1 = () => ~~(Math.random() * 6) + 1;
const throwdice2 = () => ~~(Math.random() * 6) + 1;


throwdice1();
throwdice2();




