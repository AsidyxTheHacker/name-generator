let randomNum = Math.floor(Math.random() * 5);
let container = document.getElementById('container');
let nameContainer = document.createElement('div');
nameContainer.id = 'nameContainer';
container.appendChild(nameContainer);

for(i = 0; i < 3; i++){
    let childContainer = document.createElement('div');
    let nameText = document.createElement('p');
    childContainer.id = 'childContainer';
    nameText.innerText = 'poopydoopy'
    nameContainer.appendChild(childContainer);
    childContainer.appendChild(nameText).classList.add('commonText');
}

let textOne = document.querySelector('#nameContainer div:nth-child(1) p.commonText');
    textOne.addEventListener('click', () => {textOne.innerText = arrayOne[`${randomNum}`];})
let textTwo = document.querySelector('#nameContainer div:nth-child(2) p.commonText');
    textTwo.addEventListener('click', () => {textTwo.innerText = arrayTwo[`${randomNum}`];})
let textThree = document.querySelector('#nameContainer div:nth-child(3) p.commonText');
    textThree.addEventListener('click', () => {textThree.innerText = arrayThree[`${randomNum}`];})

let arrayOne = ['mr.', 'the', 'dr.', 'king', 'mrs.'];
let arrayTwo = ['giant', 'smelly', 'cool', 'tiny', 'loud'];
let arrayThree = ['potato', 'clown', 'rapper', 'squid', 'box'];