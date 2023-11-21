let currentNum = 15;
let randomNum = Math.floor(Math.random() * currentNum);
let container = document.getElementById('container');
let nameContainer = document.createElement('div');
nameContainer.id = 'nameContainer';
container.appendChild(nameContainer);

for(i = 0; i < 3; i++){
    let childContainer = document.createElement('div');
    let nameText = document.createElement('p');
    childContainer.id = 'childContainer';
    nameText.innerText = 'Click Me'
    nameContainer.appendChild(childContainer);
    childContainer.appendChild(nameText).classList.add('commonText');
}

let textOne = document.querySelector('#nameContainer div:nth-child(1) p.commonText');
    textOne.addEventListener('click', () => {
        textOne.innerText = arrayOne[`${randomNum}`];
        randomNum = Math.floor(Math.random() * currentNum);
    });
let textTwo = document.querySelector('#nameContainer div:nth-child(2) p.commonText');
    textTwo.addEventListener('click', () => {
        textTwo.innerText = arrayTwo[`${randomNum + 1}`];
        randomNum = Math.floor(Math.random() * currentNum);
    });
let textThree = document.querySelector('#nameContainer div:nth-child(3) p.commonText');
    textThree.addEventListener('click', () => {
        textThree.innerText = arrayThree[`${randomNum}`];
        randomNum = Math.floor(Math.random() * currentNum);
    });
let genBtn = document.getElementById('gen');
genBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * currentNum);
    textOne.innerText = arrayOne[`${randomNum}`];
    randomNum = Math.floor(Math.random() * currentNum);
    textTwo.innerText = arrayTwo[`${randomNum}`];
    randomNum = Math.floor(Math.random() * currentNum);
    textThree.innerText = arrayThree[`${randomNum}`];
})

let arrayOne = ['mr.', 'elder', 'dr.', 'king', 'mrs.', 'inspector', 'sir.', 'brotha', 'sista', 'uncle', 'mama', 'lil', 'lord', 'rabbi', 'super'];
let arrayTwo = ['giant', 'smelly', 'cool', 'tiny', 'loud', 'blue', 'nice', 'wild', 'weird', 'jive', 'asian', 'creepy', 'gay', 'mad', 'freaky', 'fat'];
let arrayThree = ['mango', 'clown', 'cat', 'squid', 'boy', 'snake', 'balls', 'guy', 'turkey', 'burger', 'pants', 'mouth', 'knees', 'beard', 'baby'];